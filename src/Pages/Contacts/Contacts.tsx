import './Contacts.css'
import { useState } from 'react';

function Contacts() {
  const [email, setEmail] = useState<string>("")
  const [letter, setLetter] = useState<string>("")
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

  }
  return (
    <div className='contacts--container'>
      <div className='contacts--top'>
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nam doloremque, a reiciendis quisquam cum nesciunt ipsa at cumque iure, fuga quaerat eligendi in. Quasi eveniet ipsam minima quisquam vitae.</p>
        <p>info@mail.com</p>
        <p>000-000-000</p>
      </div>
      <form className='contactForm_conatiner' onSubmit={handleSubmit}>
        <h3>Please enter your details</h3>
        <h4>Email adress</h4>
        <div className='inputs_container'>
          <input
            className="inputs"
            value={email}
            id='email'
            placeholder='example@mail.com'
            onChange={(e) => { setEmail(e.target.value) }}
          />
        </div>
        <h4>How can i help you?!</h4>
        <div className='inputs_container'>
          <textarea
            className="inputs "
            placeholder='...'
            id="password"
            value={letter}
            onChange={(e) => { setLetter(e.target.value) }}
          />
        </div>

        <button
          type="submit"
          // disabled={isSubmitting}
          className={false ? 'login isSubmitting' : 'login'}
        >
          Log in
        </button>
      </form >
    </div>
  )
}

export default Contacts