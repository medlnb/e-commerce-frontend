import React, { createContext, useReducer, useEffect } from "react"
import { Cart_item } from "../Types/Cart_item"
import { getOrders } from "../Data/Orders"
import { Action, ActionKind } from "../Types/Cart_item"
import { useAuthContext } from "../Hooks/useAuthContext"


export const CartContext = createContext<{ state: Cart_item[] | null, dispatch: React.Dispatch<Action> | null }>({
  state: null,
  dispatch: null
});

export const CartReducer = (state: Cart_item[], action: Action): Cart_item[] => {
  switch (action.type) {
    case ActionKind.SET_ITEM:
      return action.payload

    case ActionKind.ADD_ITEM:
      return [...state, action.payload[0]]

    case ActionKind.REMOVE_ITEM:
      return state.filter(item => item._id !== action.payload[0]._id)

    case ActionKind.CHANGE_QUANTITY:
      return state.map(item => {
        if (item._id == action.payload[0]._id)
          return action.payload[0]
        else
          return item
      })


    default:
      return state;
  }
}


export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer<React.Reducer<Cart_item[], Action>>(CartReducer, [])
  const { user } = useAuthContext()
  useEffect(() => {
    async function fetchData() {
      try {
        if (user.token && user.email) {
          const orders: Cart_item[] = await getOrders(`bearer ${user.token}`, user.email)
          dispatch({ type: ActionKind.SET_ITEM, payload: orders })
        }
      } catch (error) {
        console.error("Error fetching orders:", error)
      }
    }

    fetchData()
  }, [user])
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
