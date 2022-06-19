import React from "react";

const Review = ({ checkoutToken }) => (
  <>
    <h6>Order summary</h6>
    <ul disablePadding>
      {checkoutToken.live.line_items.map((product) => (
        <li style={{ padding: "10px 0" }} key={product.name}>
          <p className="text-sm"> {product.name} </p>
          <div className="flex justify-between w-full items-center">
            <p className="text-gray-400 text-sm">
              {`Quantity: ${product.quantity}`}
            </p>
            <p className="text-sm">
              {product.line_total.formatted_with_symbol}
            </p>
          </div>
        </li>
      ))}
      <li>
        <div className="flex items-center justify-between w-full my-2">
          <p className="text-sm"> Total:</p>
          <h6>{checkoutToken.live.subtotal.formatted_with_symbol}</h6>
        </div>
        <div class=" h-[2px] border-b-2 border-gray-300 w-full  mb-5"></div>
      </li>
    </ul>
  </>
);

export default Review;
