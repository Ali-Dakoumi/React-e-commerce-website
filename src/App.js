import { useEffect, useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import NavBar from "./Components/Products/NavBar/NavBar";
import Products from "./Components/Products/Products";
import { commerce } from "./Commerce/Commerce";
import Cart from "./Components/Cart/Cart";

import Checkout from "./Components/CheckoutForm/Checkout/Checkout";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const addToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  const updateCart = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });
    console.log(response.cart);
    setCart(response.cart);
  };

  const removeFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response.cart);
  };

  const emptyCart = async (productId, quantity) => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  return (
    <div className="App w-full h-full ">
      <NavBar total={cart.total_items} />
      <Routes>
        <HashRouter basename="/">
          <Route
            exact
            path="/"
            element={<Products addToCart={addToCart} products={products} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                updateCart={updateCart}
                cart={cart}
                removeFromCart={removeFromCart}
                emptyCart={emptyCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
                order={order}
                refreshCart={refreshCart}
              />
            }
          />
        </HashRouter>
      </Routes>
    </div>
  );
}

export default App;
