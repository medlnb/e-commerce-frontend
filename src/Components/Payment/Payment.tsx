import './Payment.css'

function Payment() {
  return (
    <div className='Payment'>
      <div className="card--detail">
        <h1>card detail.</h1>
        <p>SELECT CARD TYPE</p>
        <div className='banks'>
          <img
            src="https://1000logos.net/wp-content/uploads/2021/11/VISA-logo-500x281.png" />
          <img
            src='https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo-500x281.png' />
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/300px-MasterCard_Logo.svg.png' />
        </div>
        <input
          className='card--input'
          placeholder='card number' />

        <div className='card--back'>
          <div>
            <p>expiry date</p>
            <div className='cart--date'>
              <input
                className='digit--input number--input'
                type='number' />
              /
              <input
                className='digit--input number--input'
                type='number' />
              /
              <input
                className='digit--input number--input'
                type='number' />
            </div>
          </div>
          <div>
            <p>CVV</p>
            <input
              className='digit--input number--input three--digit'
              type='number' />
          </div>
        </div>
        <button className='checkout'>CHECKOUT</button>
      </div>
      <div className='bottom--payment'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Sunt consectetur eum adipisci dignissimos id aspernatur qui vero!
          Hic, harum cumque voluptatem recusandae vitae quo ipsam,
          praesentium obcaecati, optio animi perferendis.
        </p>
      </div>

    </div>
  )
}

export default Payment