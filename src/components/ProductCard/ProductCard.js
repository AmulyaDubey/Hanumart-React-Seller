import React from "react";
import ProductImage from "./sampleProduct.png";
import "./ProductCardStyles.css";
import { withRouter } from "react-router-dom";
// import { addToCart } from "../../core/cart";
// import { getUserId } from "../../core/auth";

const ProductCard = (props) => {
  if (!props.product) return null;

  const add = (event) => {
    // const userId = getUserId();
    const userId = 5;

    if (!userId) {
      alert("You need to login first!");
      props.history.push("/login");
    }

    // addToCart(userId, props.product._id).then((data) => {
    //   event.target.style.backgroundColor = "orange";
    //   event.target.innerHTML = "Added";
    //   setTimeout(() => {
    //     event.target.style.backgroundColor = "var(--green)";
    //     event.target.innerHTML = "Add to Cart";
    //   }, 2000);
    // });
  };

  const selectProduct = () => {
    if (props.mode === "seller")
      props.history.push(`/seller/product?mode=edit`);
    else props.history.push(`/product/${props.product._id}`);
  };

  const { wishlist, product, mode } = props;
  return (
    <div className="product__card">
      {mode === "customer" && (
        <div className="wishlist__icon">
          {wishlist ? (
            <i className="fa fa-heart wishlist__heart" aria-hidden="true"></i>
          ) : (
            <i
              className="fa fa-heart-o wishlist__heart__open"
              aria-hidden="true"
            ></i>
          )}
        </div>
      )}
      <div className="discount__tag">
        <p>10% off</p>
      </div>
      <div className="product__image" onClick={() => selectProduct()}>
        <img src={ProductImage} alt="product" />
      </div>
      <div className="product__card__details">
        <p className="product__title">{product.name}</p>
        <p className="product__price">Rs.100</p>
      </div>
      <div className="full-width">
        {mode === "customer" ? (
          <button
            className="full-width standard-green-btn"
            onClick={(e) => add(e)}
          >
            Add to Cart
          </button>
        ) : (
          <button
            className="full-width standard-blue-btn"
            style={{ marginTop: 0 }}
            // onClick={(e) => add(e)}
          >
            Update Item
          </button>
        )}
      </div>
    </div>
  );
};

export default withRouter(ProductCard);
