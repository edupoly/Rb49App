import React, { useEffect } from "react";

function Products() {
  var [products, setProducts] = React.useState([]);

  //useEffect for mounting time
  useEffect(function () {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts([...data]);
      });
  }, []);

  return (
    <div className="border border-5 p-2 m-2 border-info">
      <h1>Products Length:{products.length}</h1>
      <ul>
        {products.map((product) => {
          return <li>{product.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Products;
// mounting
// updation
// unmounting
