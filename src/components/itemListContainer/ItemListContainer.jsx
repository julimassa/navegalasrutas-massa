import React from "react";
import products from "../../data/products";
import Item from "../item/Item";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  return (
    <div className="item-list">
      {products.map((prod) => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ItemListContainer;


