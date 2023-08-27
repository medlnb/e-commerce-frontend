import './Product.css'
import shoes from '../../assets/shoes.png'
import { useNavigate } from 'react-router-dom'
import { Shoe } from '../../Types/Shoe'

type Props = {
  index: number;
  data: Shoe
}


const lessThan15daysOld = (stringDate: string) => {

  const year = Number(stringDate.substring(0, 4))
  const month = Number(stringDate.substring(5, 7))
  const day = Number(stringDate.substring(8, 10))
  const updatedAtDate = new Date(year, month - 1, day)
  const todaysDate = new Date()
  const timeDifference = todaysDate.getTime() - updatedAtDate.getTime()
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  if (daysDifference < 15)
    return true
  return false
}

function Product({ index, data: { _id, model, brand, price, updatedAt, img } }: Props) {
  const navigate = useNavigate()
  const isnew = lessThan15daysOld(updatedAt)


  const handleClick = () => {
    navigate('/product/' + _id)
  }
  return (
    <div className='product' onClick={handleClick}>
      <div className={index % 2 ? 'top' : 'top dark'}>
        <div className='upper'>
          <p>{brand}</p>
          <p>{isnew && "New"}</p>
        </div>
        <img className='shoe_img' src={img == "bruh" ? shoes : img} alt={model} />
      </div>
      <div className='bottom'>
        <div className='lower'>
          <p className='title'>{model}</p>
          {/* favorite icon */}
        </div>
        <p className='title'>pricing ${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Product;
