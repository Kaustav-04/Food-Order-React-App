import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {

  let [cartIsShown, setCartShowState] = useState(false);

  const showCart = () =>{
    setCartShowState(true);
  }

  const hideCart = () =>{
    setCartShowState(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCart}/>}
      <Header onShowCart={showCart}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
