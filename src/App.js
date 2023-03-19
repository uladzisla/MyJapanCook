import React, { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const showCartHandler = () => {
    setCartIsVisible(true);
  };
  const hideCartVisible = () => [setCartIsVisible(false)];
  return (
    <React.Fragment>
      {cartIsVisible && <Cart onHideCart={hideCartVisible} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals></Meals>
      </main>
    </React.Fragment>
  );
}

export default App;
