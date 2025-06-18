import React from "react";

function Product(props) {
  return (
    <div>
      <li>
        <img
          src={props.product.image}
          style={{ width: "200px", height: "200px" }}
          alt=""
        />
        <h6>{props.product.title.slice(0, 20)}</h6>
        <div className="card-footer">
          <b>
            {props.product.rating.rate}
            <i class="bi bi-star-fill"></i>
          </b>
          <i>Rs.{props.product.price}</i>
        </div>
      </li>
    </div>
  );
}

export default Product;
