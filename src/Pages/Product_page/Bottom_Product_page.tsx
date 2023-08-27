import { useState } from 'react'
import { Shoe } from '../../Types/Shoe'
import AboutModel from '../../Components/AboutModel/AboutModel'
import Reviews from '../../Components/Reviews/Reviews'

interface props {
  content: Shoe[] | null
}

interface ReviewsType {
  username: string | null,
  rating: string,
  text: string,
  createdAt: string
}

function Bottom_Product_page({ content }: props) {
  if (!content)
    return
  const [showenPage, setShowenPage] = useState<number>(0)
  const ReviewsData: ReviewsType[] = []
  content.map(shoe => {
    shoe.reviews.map((review: ReviewsType) => {
      if (review)
        ReviewsData.push(review)
    })
  })
  const CHARACTERISTICS_data = [
    ["Brand", "NIKE"],
    ["Details", "idktho"],
    ["Color", "White"]
  ]
  const CHARACTERISTICS = CHARACTERISTICS_data.map(char => {
    return <p key={char[0]} >{char[0]} <b>{" " + char[1]}</b></p>
  })
  return (
    <div className="bottom--container">
      <h1 className='description'>description.</h1>
      <div className="lower--bottom--container">
        <div className="left--lower--bottom--container">
          <nav className="Bottom_Product_page_nav">
            <button onClick={() => setShowenPage(0)}>About model</button>
            <button onClick={() => setShowenPage(1)}>Shipping</button>
            <button onClick={() => setShowenPage(2)}>Reviews</button>
          </nav>

          {showenPage == 0 && (content[0].description ? <AboutModel description={content[0].description} /> :
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur animi ullam aut quam distinctio qui unde voluptatibus saepe, incidunt iste officia. Natus recusandae cumque autem. Doloribus fugiat quis esse deserunt!</p>)}
          {showenPage == 1 && <p>We support world-wise shipping</p>}
          {showenPage == 2 && <Reviews reviewsDatas={ReviewsData} shoesId={content[0]._id} />}

        </div>
        <div className="CHARACTERISTICS">
          <h4>CHARACTERISTICS</h4>
          {CHARACTERISTICS}
        </div>
      </div>
    </div>
  )
}

export default Bottom_Product_page