import { addReview } from '../../Data/Shoes'
import { useState } from 'react'
import { useAuthContext } from '../../Hooks/useAuthContext'
import './Reviews.css'

// import 

interface ReviewsType {
  username: string | null,
  rating: string,
  text: string,
  createdAt: string
}
interface props {
  reviewsDatas: ReviewsType[],
  shoesId: string
}

function Reviews({ reviewsDatas, shoesId }: props) {
  const [comment, setComment] = useState<string>('')
  const { user } = useAuthContext()
  console.log(reviewsDatas)
  const HandleComment = () => {
    setComment("")
    if (user.username)
      addReview(shoesId, comment, user.username)
  }

  const reviews = reviewsDatas.map((review, index) => {
    return <div key={index} >
      <p>{review.username}:</p>
      <p style={{ color: "gray" }}>{review.text}</p>
    </div>
  })
  return (
    <>
      <div className='reviews--container'>
        {reviews.length ? reviews :<p>No reviews yet</p> }
      </div>
      <div className='reviews--comment'>
        <input
          onChange={(e) => { setComment(e.target.value) }}
          value={comment}
          className='reviews--input'
          placeholder='Your thoughts matter!' />
        <button onClick={HandleComment}>Send</button>
      </div>
    </>
  )
}

export default Reviews