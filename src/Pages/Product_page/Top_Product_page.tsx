import { useState } from 'react';
import shoes from '../../assets/shoes.png'
import { Cart_item } from '../../Types/Cart_item';
import { useCartContext } from '../../Hooks/useCartContext';
import { ToastContainer, toast } from 'react-toastify';
import { PostOrder } from '../../Data/Orders';
import 'react-toastify/dist/ReactToastify.css';
import { ActionKind } from '../../Types/Cart_item';
import { Shoe } from '../../Types/Shoe';
import { useAuthContext } from '../../Hooks/useAuthContext';

interface Selected {
  color: string,
  size: number
}

interface props {
  content: Shoe[]
}


function Top_Product_page({ content }: props) {
  const { user } = useAuthContext()
  const { state, dispatch } = useCartContext()

  const [selected, setSelected] = useState<Selected>({
    color: content[0].color,
    size: content[0].size
  })
  const notify = (message: string, type: string) => {
    if (type === "info") {
      return toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    } else {
      return toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }

  const item: Cart_item = {
    model: content[0].model,
    color: selected.color,
    size: selected.size,
    price: content[0].price,
    payed: false,
    quantity: 1,
    img: content[0].img,
    email: user.email
  }

  const Handlebuy = () => {
    if (!user.token || !user.email) {
      return
    }
    if (!state || !dispatch)
      return
    if (state.find((order: Cart_item) => (order.model === item.model && order.color === item.color && order.size === item.size)))
      return notify(`${item.model} Alrddy added, if you want to add more of the same shoe, please go to the Cart`, "error")
    const newItem = PostOrder(user.token, item)
    newItem.then(
      _item => {
        notify(`${_item.model} added to your cart`, "info")
        dispatch({
          type: ActionKind.ADD_ITEM,
          payload: [_item]
        })
      }
    )

  }


  const sizes: number[] = [];
  const colors: string[] = []
  content.map((element: Shoe) => {
    if (!sizes.includes(element.size))
      sizes.push(element.size)
    if (!colors.includes(element.color))
      colors.push(element.color)
  })

  const sizes_button = sizes.map(size => {
    return <button
      key={size}
      onClick={() => setSelected(prev => {
        return { ...prev, size }
      })}
      className={size == selected.size ? 'size--button selected_size' : 'size--button'}
    >{size}</button>
  })


  const colors_container = colors.map(color => {
    return <div
      key={color}
      onClick={() => setSelected(prev => {
        return { ...prev, color }
      })}
      className={color == selected.color ? 'color--selector selected_color' : 'color--selector'}
      style={{ background: color }}>
      <img src={content[0].img == "bruh" ? shoes : content[0].img} />
    </div>
  })
  return (
    <div className="top--container">
      <ToastContainer />
      <div className="product--left">
        <img src={content[0].img} />
      </div>
      <div className="product--colors">
        {colors_container}
      </div>
      <div className="product--right">
        <div>
          <h1 className='product--title'><b>{content[0].model}</b></h1>
          <h2 style={{ fontWeight: "100" }}>Playstation White</h2>
        </div>
        <div>
          <h2 className='select--size'>SELECT SIZE</h2>
          <br></br>
          <br></br>
          <div className='size--selection'>
            {sizes_button}
          </div>
        </div>
        <div className='product--payment'>
          <button onClick={Handlebuy} className='ADD_TO_CART'>+ ADD TO CART</button>
          <h2 style={{ whiteSpace: "nowrap" }}>${" " + content[0].price.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  )
}

export default Top_Product_page