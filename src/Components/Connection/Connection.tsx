import './Connection.css'
import { AiOutlineLogin } from 'react-icons/ai'
import { BsPersonPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../Hooks/useAuthContext'

interface props {
  isloggedin: string | null
}

function Connection({ isloggedin }: props) {
  const { handleUserChange } = useAuthContext()

  const HandleLogout = () => {
    handleUserChange({
      username: null,
      email: null,
      token: null
    })
  }
  return (
    <div className='Connection'>
      {(isloggedin === null) ?
        <Link to={'/login'} className='link'>
          <div className='icon-text'>
            <AiOutlineLogin />
            <button className='Connection--button'>Log in</button>
          </div>
        </Link>
        : <button className='link' onClick={HandleLogout}>
          <div className='icon-text'>
            <AiOutlineLogin />
            <span className='Connection--button'>Log out</span>
          </div>
        </button>}

      <Link to='/signup' className='link'>
        {(isloggedin === null) && <div className='icon-text'>
          <BsPersonPlus />
          <button>Sign up</button>
        </div>}
      </Link>
    </div >

  )
}
export default Connection