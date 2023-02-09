import React from "react";
import { AddToCartButton } from "../components/addToCartButton";
import { useParams } from "react-router-dom";

export const Product = () => {
  const smth = useParams();
  return (
    <div>
      <h2>Tovar</h2>
      <div>Price</div>
      <div>Description</div>
      <AddToCartButton size='m'/>
    </div>
  );
};
