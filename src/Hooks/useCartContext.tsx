import { useContext } from "react"
import { CartContext } from "../Contexts/CartContext"

export const useCartContext = () => {
  const Cartcontext = useContext(CartContext)
  if (!Cartcontext) {
    throw { err: "must be used inside a Cartcontext provider" }
  }
  return Cartcontext
}