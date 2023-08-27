import PL_navbar from '../PL_navbar/PL_navbar'
import Product from '../Product/Product'
import './Products_Layout.css'
import { get_shoes } from '../../Data/Shoes'
import { useEffect, useState } from 'react'
import { Shoe } from '../../Types/Shoe'
import FooterNav from '../FooterNav/FooterNav'

interface item {
  title: string,
  ShoeData: Shoe[]
}

interface FooterData {
  pageSelceted: number,
  numberOfPages: number
}
2
function Products_Layout() {
  const [FooterInfo, setFooterInfo] = useState<FooterData>({
    pageSelceted: 1,
    numberOfPages: 1
  })
  const [Products_data, setProducts_data] = useState<JSX.Element[]>([])
  useEffect(() => {

    get_shoes().then((data: item[]) => {
      const avaibleShoes = data.filter(shoe => shoe.ShoeData[0].quantity > 0)
      setFooterInfo(prev => { return { ...prev, numberOfPages: avaibleShoes.length } })

      const filtredData = avaibleShoes.slice(FooterInfo.pageSelceted * 8 - 8, FooterInfo.pageSelceted * 8)
      const products = filtredData.map(({ ShoeData }: item, index: number) => {

        return <Product key={index} data={ShoeData[0]} index={index} />
      })

      setProducts_data(products)
    })
  }, [FooterInfo.pageSelceted])

  return (
    <>
      <PL_navbar />
      <div className='Products_Layout'>
        {Products_data}
      </div>
      <FooterNav index={FooterInfo.pageSelceted} ChangeIndex={setFooterInfo} numberOfIndexs={Math.ceil(FooterInfo.numberOfPages / 8)} />
    </>
  );
}

export default Products_Layout;
