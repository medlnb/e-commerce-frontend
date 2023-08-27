import './Header.css'
import { GoPerson } from 'react-icons/go'
import { AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai'
import Connection from '../Connection/Connection'
import { useState } from 'react'
import { useAuthContext } from '../../Hooks/useAuthContext'
import { useCartContext } from '../../Hooks/useCartContext'
import { useNavigate } from 'react-router-dom'

function Header() {
  const { state } = useCartContext()
  const { user } = useAuthContext()
  const [showConnection, setShowConnection] = useState(false)
  const navigate = useNavigate()
  return (
    <header className='header'>
      {showConnection && <Connection isloggedin={user.email} />}
      <span className='search'>
        <AiOutlineSearch />
        <input placeholder='Search' />
      </span>
      {user.username && <>
        <p>{state && state.length}</p>
        <AiOutlineShopping onClick={() => navigate('/cart')} />
      </>}
      <GoPerson
        onClick={() => setShowConnection(prev => !prev)} />
    </header >
  )
}

export default Header