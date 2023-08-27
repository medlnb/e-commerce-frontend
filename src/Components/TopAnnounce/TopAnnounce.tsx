import './TopAnnounce.css'
import { get_shoes } from '../../Data/Shoes'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface props {
  model: string | null,
  description: string | null,
  img: string | undefined,
  _id: string | null
}

function TopAnnounce() {
  const navigate = useNavigate()
  const [shoe, isShoe] = useState<props>({
    model: null,
    description: null,
    img: undefined,
    _id: null

  })

  useEffect(() => {
    get_shoes().then(
      data => {
        isShoe(data[0].ShoeData[0])
      }
    )
  }, [])
  return (
    <div className='TopAnnounce--container'>
      <article className='Announce'>
        <div className="Announce--info">
          <h1 className='Announce--title'>{shoe.model}</h1>
          <p className='Announce--paragraph'>{shoe.description}</p>
          <button className='Announce--button' onClick={() => { navigate(`/product/${shoe._id}`) }}>See more...</button>
        </div>
      </article>
      <div className='black--circle'>
        <img className='Announce--img' src={shoe.img} />
      </div>
    </div>
  )
}

export default TopAnnounce