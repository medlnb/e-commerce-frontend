import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const Nav_elements = ["Homepage", "Reviews", "Contacts"]
  const navbar = Nav_elements.map(element =>
    <Link
      to={element == "Homepage" ? "/" : `/${element}`}
      key={element}
      className='nav_element'
      style={{ color: "white" }}
    > {element}</Link >
  )
  return (
    <nav className='nav'>
      <h1 className='logo'>Shoes</h1><p className='com'>.com</p>
      {navbar}
    </nav>
  )
}

export default Navbar