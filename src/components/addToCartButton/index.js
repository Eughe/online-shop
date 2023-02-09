import React from "react";
import cartIcon from "../../assets/cart_icon.png";
import styles from "./index.module.css";

const sizes = {
  s: styles.s,
  m: styles.m,
};

export const AddToCartButton = ({ handleClick, size = "s" }) => (
  <button
    onClick={handleClick}
    className={`${styles.addToCartButton} ${sizes[size]}`}
  >
    <img src={cartIcon} alt="cart" />
  </button>
);
