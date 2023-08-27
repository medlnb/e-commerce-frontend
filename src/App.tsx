import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'
import Product_page from './Pages/Product_page/Product_page'
import Cart from './Pages/Cart.tsx/Cart'
import ReviewsPage from './Pages/ReviewsPage/ReviewsPage'
import Contacts from './Pages/Contacts/Contacts'

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route
          path="/"
          element={
            <div className='container'>
              <Navbar />
              <Homepage />
            </div>}
        />
        <Route
          path="/reviews"
          element={
            <div className='container'>
              <Navbar />
              <ReviewsPage />
            </div>}
        />
        <Route
          path="/contacts"
          element={
            <div className='container'>
              <Navbar />
              <Contacts />
            </div>}
        />
        <Route
          path='/product/:productid'
          element={<Product_page />}
        />
        <Route
          path='/signup'
          element={<SignUp />}
        />

        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/cart'
          element={<Cart />}
        />
      </Routes>

    </BrowserRouter>
  )
}

export default App
