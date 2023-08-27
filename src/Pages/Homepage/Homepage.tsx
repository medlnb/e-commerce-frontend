import Header from '../../Components/Header/Header'
import Products_Layout from '../../Components/Products_Layout/Products_Layout'
import TopAnnounce from '../../Components/TopAnnounce/TopAnnounce'
import './Homepage.css'

function Homepage() {
  return (
    <div className='homepage'>
      <Header />
      <TopAnnounce />
      <Products_Layout />
    </div>
  )
}

export default Homepage