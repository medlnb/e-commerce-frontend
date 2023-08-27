import Bottom_Product_page from './Bottom_Product_page'
import './Product_page.css'
import Top_Product_page from './Top_Product_page'
import { useParams } from 'react-router-dom'
import { get_shoe } from '../../Data/Shoes'
import { useEffect, useState } from 'react'
import { Shoe } from '../../Types/Shoe'


function Product_page() {

  const { productid } = useParams<string>()
  const [data, setdata] = useState<Shoe[] | null>(null)

  useEffect(() => {
    get_shoe("" + productid).then(
      (_data: Shoe[]) => setdata(_data)
    )
  }, [])
  return (
    <div className='Product_page'>
      {data && <>
        <Top_Product_page content={data} />
        <Bottom_Product_page content={data} />
      </>}
    </div>
  )
}

export default Product_page