import React from "react";
import Product from "./Product/Product";

const Products = ({ products, addToCart }) => {
  return (
    <main>
      <section className="grid grid-cols-auto-fit-200 gap-5 pt-16 pb-10 px-5">
        {products.map((product) => (
          <div key={product.id}>
            <Product product={product} addToCart={addToCart} />
          </div>
        ))}
        {products.map((product) => (
          <div key={product.id}>
            <Product product={product} addToCart={addToCart} />
          </div>
        ))}
        {products.map((product) => (
          <div key={product.id}>
            <Product product={product} addToCart={addToCart} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Products;
