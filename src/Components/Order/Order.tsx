import './Order.css'
import shoes from '../../assets/shoes.png'
import { Cart_item } from '../../Types/Cart_item'
import { useCartContext } from '../../Hooks/useCartContext';
import { removeOrder } from '../../Data/Orders';
import { ActionKind } from '../../Types/Cart_item';
import { useAuthContext } from '../../Hooks/useAuthContext';


function Order({ _id, model, size, color, price, quantity, img }: Cart_item) {
  const { user } = useAuthContext()
  const { dispatch } = useCartContext()

  const handleRemove = () => {
    if (!dispatch || !user.token)
      return
    removeOrder(user.token, _id)
    const deletedItem: Cart_item = {
      _id,
      model,
      color,
      size,
      img,
      price,
      quantity
    }
    dispatch({
      type: ActionKind.REMOVE_ITEM,
      payload: [deletedItem]
    })
  }

  const handlePlus = (isplus: boolean) => {
    if ((!isplus && quantity == 1) || !dispatch)
      return
    const deletedItem: Cart_item = {
      _id,
      model,
      color,
      img,
      size,
      price,
      quantity: isplus ? quantity + 1 : quantity - 1
    }
    dispatch({
      type: ActionKind.CHANGE_QUANTITY,
      payload: [deletedItem]
    })
  }

  return (
    <div className='order-container'>
      <div className='order-detail'>
        <img src={img == "bruh" ? shoes : img} />
        <div>
          <p>{model}</p>
          <p>SIZE {size}</p>
        </div>
        <div className='vertical-line' />
        <p>{color}</p>
        <div className='vertical-line' />
        <div className='size--controll'>
          <button onClick={() => handlePlus(true)}>+</button>
          <p>{quantity}</p>
          <button onClick={() => handlePlus(false)}>-</button>
        </div>
        <div className='vertical-line' />
        <p>PRICING ${price}</p>
      </div>
      <button onClick={handleRemove}>X</button>
    </div>
  )
}

export default Order