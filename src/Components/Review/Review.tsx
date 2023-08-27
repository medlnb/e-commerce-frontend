import { Shoe } from "../../Types/Shoe"
import './Review.css'
import { BiUserCircle } from 'react-icons/bi'
interface model {
  title: string,
  ShoeData: Shoe[]
}
interface reviewType {
  username: string,
  text: string,
  rating: string,
  createdAt: string
}
function Review({ title, ShoeData }: model) {
  const reviewsData: JSX.Element[] = []
  ShoeData.map(shoe => {
    if (shoe.reviews.length != 0)
      shoe.reviews.map((review: reviewType) => {
        reviewsData.push(
          <div className="review" key={reviewsData.length}>
            <div className="review--inside">
              <div className="review--username"><BiUserCircle />{review.username} :</div>
              <p>{review.text}</p>
            </div>
          </div>
        )
      }
      )
  }
  )
  return (
    <div className='review--container'>
      <div className="review--title">
        <img className="" src={ShoeData[0].img} />
        <p>{title.split("_")[0]}</p>
      </div>
      <div className="reviews">
        {reviewsData}
      </div>
    </div>
  )
}

export default Review