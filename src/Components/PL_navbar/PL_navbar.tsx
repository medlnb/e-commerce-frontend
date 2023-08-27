import './PL_navbar.css'
import { get_shoes } from '../../Data/Shoes'
import { useEffect, useState } from 'react'
import { Shoe } from '../../Types/Shoe'

interface props {
  title: string,
  ShoeData: Shoe[]
}

function PL_navbar() {
  const [nav, setNav] = useState<JSX.Element[]>([])
  useEffect(() => {
    const brands: string[] = []
    get_shoes().then(
      data => {
        data.map((element: props) => { 
          if (!brands.includes(element.ShoeData[0].brand))
            brands.push(element.ShoeData[0].brand)
        })
        setNav(brands.map((element) =>
          <button
            className='nav_element PL'
            key={element}>
            {element}
          </button>))
      }
    )
  }, [])

  return (
    <div>
      {nav}
    </div>
  )
}

export default PL_navbar