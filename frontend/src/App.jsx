import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './layouts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Pricelist from './Pricelist';
import Giftbox from './Pages/Giftbox';
import Productcard from './Pages/Productcard';
import { useState } from 'react';
import CartPage from './Pages/Cartpage';
import CheckoutPage from './Pages/CheckoutPage';
import ThankYouPage from './Pages/ThankYouPage';

function App() {
  // Cart is an object mapping product id to product info including quantity
  const [cart, setCart] = useState({});

  // Add product to cart
  const addToCart = (product) => {
    setCart(prevCart => {
      const key = product.id || product.sNo; // support both id & sNo
      if (prevCart[key]) {
        return {
          ...prevCart,
          [key]: {
            ...prevCart[key],
            quantity: prevCart[key].quantity + 1,
          },
        };
      } else {
        return {
          ...prevCart,
          [key]: {
            ...product,
            price: product.price || parseInt(product.title?.replace('RS:', '')),
            quantity: 1,
          },
        };
      }
    });
  };

  // Remove a product from cart (decrease quantity by 1)
  const removeFromCart = (productId) => {
    console.log('removeFromCart called with:', productId);
    setCart(prevCart => {
      console.log('Current cart before removal:', prevCart);
      if (!prevCart[productId]) {
        console.log('Product not found in cart:', productId);
        return prevCart;
      }
      if (prevCart[productId].quantity > 1) {
        const newCart = {
          ...prevCart,
          [productId]: {
            ...prevCart[productId],
            quantity: prevCart[productId].quantity - 1,
          },
        };
        console.log('Decreased quantity, new cart:', newCart);
        return newCart;
      } else {
        const newCart = { ...prevCart };
        delete newCart[productId];
        console.log('Removed item completely, new cart:', newCart);
        return newCart;
      }
    });
  };

  // Remove all quantity of a product from cart (complete removal)
  const removeAllFromCart = (productId) => {
    console.log('removeAllFromCart called with:', productId);
    setCart(prevCart => {
      console.log('Current cart before complete removal:', prevCart);
      const newCart = { ...prevCart };
      delete newCart[productId];
      console.log('Removed all quantity, new cart:', newCart);
      return newCart;
    });
  };

  // ✅ Calculate total count of items in cart
  const cartCount = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <Routes>
        <Route
          element={
            <Layout
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cartCount={cartCount}   // pass count to Layout/Header
            />
          }
        >
          <Route
            path="/"
            element={
              <Home
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cartCount={cartCount}   // pass count to Home if needed
              />
            }
          />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route
            path="/price"
            element={
              <Pricelist
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cartCount={cartCount}   // pass count to Price page too
              />
            }
          />
          <Route path="/giftbox" element={<Giftbox />} />
           <Route
          path="/product"
          element={<Productcard cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />}
        />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                removeAllFromCart={removeAllFromCart}
                cartCount={cartCount}
              />
            }
          />

          <Route path='/checkout' element={<CheckoutPage/>}/>
          <Route path='/thank-you' element={<ThankYouPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
