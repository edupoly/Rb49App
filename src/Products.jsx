import React, { useEffect } from "react";
import "./Products.css";
import Product from "./Product";
function Products() {
  var [products, setProducts] = React.useState([]);

  //useEffect for mounting time
  useEffect(function () {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts([...data]);
      });
  }, []);

  return (
    <div className="border border-1 p-2 m-2 bg-light">
      <ul className="products-list">
        {products.map((product) => {
          return <Product product={product}></Product>;
        })}
      </ul>
    </div>
  );
}

export default Products;
// mounting
// updation
// unmounting
