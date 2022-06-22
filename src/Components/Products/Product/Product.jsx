import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = ({ product, addToCart }) => {
  return (
    <article className="shadow-3xl">
      <div className="flex flex-col">
        <div className="h-52 relative overflow-hidden">
          <img
            className="absolute w-full h-full object-cover"
            src={product.image.url}
            alt={product.name}
          />
        </div>
        <div className="flex flex-row justify-between px-3 pt-2 ">
          <h5 className="font-medium"> {product.name} </h5>
          <h5 className="font-medium">{product.price.formatted_with_symbol}</h5>
        </div>
        <p
          className="px-3 font-extralight text-gray-500 text-xs"
          dangerouslySetInnerHTML={{ __html: `${product.description} ` }}
        />
      </div>
      <div className="cardActions flex justify-end px-3 py-4">
        <button className="" onClick={() => addToCart(product.id, 1)}>
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path d="M 1.71875 2 C 1.6875 2.007813 1.65625 2.019531 1.625 2.03125 C 1.613281 2.03125 1.605469 2.027344 1.59375 2.03125 C 1.574219 2.039063 1.550781 2.050781 1.53125 2.0625 C 0.652344 2.273438 0 3.058594 0 4 C 0 5.105469 0.894531 6 2 6 C 3.105469 6 4 5.105469 4 4 L 8.65625 4 C 9.902344 4 10.550781 4.257813 11.03125 4.6875 C 11.503906 5.113281 11.886719 5.824219 12.21875 6.9375 L 12.21875 6.96875 L 20.21875 39.21875 C 20.519531 40.363281 20.789063 41.539063 21.625 42.5 C 21.96875 42.898438 22.410156 43.222656 22.9375 43.46875 C 22.359375 44.164063 22 45.035156 22 46 C 22 48.199219 23.800781 50 26 50 C 28.199219 50 30 48.199219 30 46 C 30 45.265625 29.785156 44.59375 29.4375 44 L 35.5625 44 C 35.214844 44.59375 35 45.265625 35 46 C 35 48.199219 36.800781 50 39 50 C 41.199219 50 43 48.199219 43 46 C 43 44.972656 42.582031 44.054688 41.9375 43.34375 C 42.050781 43.039063 42.003906 42.695313 41.820313 42.429688 C 41.632813 42.160156 41.328125 42 41 42 L 25.71875 42 C 24.179688 42 23.578125 41.671875 23.15625 41.1875 C 22.738281 40.710938 22.453125 39.867188 22.15625 38.75 L 22.15625 38.71875 L 21.46875 36 L 39.8125 36 C 40.230469 36 40.605469 35.738281 40.75 35.34375 L 47.9375 16.34375 C 48.050781 16.039063 48.003906 15.695313 47.820313 15.429688 C 47.632813 15.160156 47.328125 15 47 15 L 16.28125 15 L 14.15625 6.46875 C 14.15625 6.449219 14.15625 6.425781 14.15625 6.40625 C 13.773438 5.117188 13.28125 4 12.375 3.1875 C 11.46875 2.375 10.207031 2 8.65625 2 L 2 2 C 1.96875 2 1.9375 2 1.90625 2 C 1.875 2 1.84375 2 1.8125 2 C 1.78125 2 1.75 2 1.71875 2 Z M 16.78125 17 L 45.5625 17 L 39.125 34 L 21 34 Z M 30.90625 18.96875 C 30.863281 18.976563 30.820313 18.988281 30.78125 19 C 30.316406 19.105469 29.988281 19.523438 30 20 L 30 24 L 26 24 C 25.96875 24 25.9375 24 25.90625 24 C 25.875 24 25.84375 24 25.8125 24 C 25.261719 24.050781 24.855469 24.542969 24.90625 25.09375 C 24.957031 25.644531 25.449219 26.050781 26 26 L 30 26 L 30 30 C 29.996094 30.359375 30.183594 30.695313 30.496094 30.878906 C 30.808594 31.058594 31.191406 31.058594 31.503906 30.878906 C 31.816406 30.695313 32.003906 30.359375 32 30 L 32 26 L 36 26 C 36.359375 26.003906 36.695313 25.816406 36.878906 25.503906 C 37.058594 25.191406 37.058594 24.808594 36.878906 24.496094 C 36.695313 24.183594 36.359375 23.996094 36 24 L 32 24 L 32 20 C 32.011719 19.710938 31.894531 19.433594 31.6875 19.238281 C 31.476563 19.039063 31.191406 18.941406 30.90625 18.96875 Z M 26 44 C 27.117188 44 28 44.882813 28 46 C 28 47.117188 27.117188 48 26 48 C 24.882813 48 24 47.117188 24 46 C 24 44.882813 24.882813 44 26 44 Z M 39 44 C 40.117188 44 41 44.882813 41 46 C 41 47.117188 40.117188 48 39 48 C 37.882813 48 37 47.117188 37 46 C 37 44.882813 37.882813 44 39 44 Z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default Product;