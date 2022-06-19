import React from "react";

const CartItem = ({ item, updateCart, removeFromCart }) => {
  console.log(item);
  return (
    <div className="shadow-3xl flex flex-col ">
      <div className="h-52 relative overflow-hidden">
        <img
          className="absolute w-full h-full object-cover"
          src={item.image.url}
          alt=""
        />
      </div>
      <div className="flex flex-row justify-between px-3 pt-2">
        <h5 className="font-medium"> {item.name} </h5>
        <h4 className="font-medium">{item.line_total.formatted_with_symbol}</h4>
      </div>
      <div className="flex flex-row justify-between px-3 pt-2 pb-3 ">
        <div className="flex flex-row justify-between ">
          <button
            className="pr-2"
            onClick={() => updateCart(item.id, item.quantity - 1)}
          >
            -
          </button>
          <h2 className="pr-2"> {item.quantity} </h2>
          <button
            className="pr-2"
            onClick={() => updateCart(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <button
          className="bg-[#cf2e2e] rounded py-1 px-4 text-white text-xs"
          onClick={() => removeFromCart(item.id)}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default CartItem;
