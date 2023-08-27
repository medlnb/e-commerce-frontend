import './ReviewsPage.css'
import { get_shoes } from '../../Data/Shoes'
import { useEffect, useState } from 'react'
import { Shoe } from '../../Types/Shoe'
import Review from '../../Components/Review/Review'
interface model {
  title: string,
  ShoeData: Shoe[]
}

function ReviewsPage() {
  const [shoes, setShoes] = useState<JSX.Element[]>([])
  useEffect(() => {
    get_shoes().then(
      (data: model[]) => {
        const filtred: model[] = []
        data.map(shoe => {
          shoe.ShoeData.map(item => {
            if (item.reviews.length != 0 && !filtred.includes(shoe))
              filtred.push(shoe)
          }
          )
        })
        setShoes(filtred.map(shoe => {
          return <Review key={shoe.title} title={shoe.title} ShoeData={shoe.ShoeData} />
        }))
      }
    )
  }, [])
  return (
    <div className='reviewsPage--container'>
      {shoes}
    </div>
  )
}

export default ReviewsPage