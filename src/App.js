import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const changeCartIsShown = () => {
    setCartIsShown((prevState) => !prevState)
  }
  
  return (
    <CartProvider>
      {cartIsShown && <div>Cart...</div>}
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
