import Hero from "./components/Hero/Hero"
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart"
import { useState } from "react";
import CartProvider from "./components/context/CartProvider";

function App() {
  
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () =>{
    setCartIsShow(true)
  }

  const hideCartHandler = (e) =>{
    e.preventDefault();    
    setCartIsShow(false)
  }

  return (
     <CartProvider>      
        <div style={{ 
          minHeight: "100vh",           // tam ekran yüksekliği
          display: "flex",
          flexDirection: "column"
        }}>
          <Header onShowCart={showCartHandler}/>
          <Hero/>
          <Products/>
          {cartIsShow && <Cart onClose={hideCartHandler}/>}
          <Footer /> 
        </div>
     </CartProvider> 
  )
}

export default App
