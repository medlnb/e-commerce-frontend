import { useEffect, useState } from 'react'
import Order from '../../Components/Order/Order'
import Payment from '../../Components/Payment/Payment'
import { Cart_item } from '../../Types/Cart_item'
import { useCartContext } from '../../Hooks/useCartContext'
import { useAuthContext } from '../../Hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'
import './Cart.css'


function Cart() {
  const navigate = useNavigate()
  const { user } = useAuthContext()

  if (!user.username)
    navigate("/")
  const [orders, setOrders] = useState<JSX.Element[]>([])
  const [isloading, setIsloading] = useState<boolean>(true)
  const { state }: { state: Cart_item[] | null } = useCartContext()
  useEffect(() => {
    if (!state) {
      setIsloading(false)
      return
    }
    if (!state.length) {
      setOrders([<p key="empty-cart-message"> Get u something for ur feet son.</p>])
      setIsloading(false)
      return
    }

    const notPayedOrders = state.filter(
      (order: Cart_item) => !order.payed
    )

    const orderElements = notPayedOrders.map((order: Cart_item, index: number) => (
      <Order
        key={index}
        _id={order._id}
        quantity={order.quantity}
        model={order.model}
        img={order.img}
        size={order.size}
        color={order.color}
        price={order.price}
      />
    ))
    setIsloading(false)
    setOrders(orderElements)

  }, [state]);
  return (
    <div className='Card--container'>
      <div className='left--Card--container'>
        <h1>your shopping cart.</h1>
        <div className='Orders--container'>
          {!isloading && orders}
        </div>
      </div>
      <Payment />
    </div>
  )
}

export default Cart