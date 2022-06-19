import React from "react";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
const Cart = ({ cart, updateCart, removeFromCart, emptyCart }) => {
  if (!cart.line_items) return "Loading...";
  const isEmpty = !cart.line_items.length; //   const isEmpty = cart.line_items.length === 0 ;
  const EmptyCart = () => {
    return <p>Your cart is empty, start adding some articles.</p>;
  };

  const FilledCart = () => {
    return (
      <>
        <section className=" grid grid-cols-auto-fit-200 gap-5">
          {cart.line_items.map((item) => (
            <div key={item.id}>
              <CartItem
                updateCart={updateCart}
                removeFromCart={removeFromCart}
                item={item}
              />
            </div>
          ))}
        </section>
        <div className="flex flex-row justify-between items-center  pt-16">
          <h2>Subtotal: {cart.subtotal.formatted_with_symbol}</h2>
          <div>
            <button
              className="bg-[#cf2e2e] rounded py-2 px-4  ml-2 text-white"
              onClick={emptyCart}
            >
              EMPTY CART
            </button>
            <button className="bg-[#2E76CF] rounded py-2 px-4 ml-2 text-white">
              <Link to={"/checkout"}>CHECKOUT</Link>
            </button>
          </div>
        </div>
      </>
    );
  };
  return (
    <section className="p-32">
      <h1 className="py-5">Your shopping cart</h1>

      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </section>
  );
};

export default Cart;
