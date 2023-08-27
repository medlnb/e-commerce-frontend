import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AuthContextProvider } from './Contexts/AuthContext.tsx'
import { CartContextProvider } from './Contexts/CartContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
