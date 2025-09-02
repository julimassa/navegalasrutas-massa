import React from "react";
import Item from "./Item";

function ItemList({ products }) {
  return (
    <div className="item-grid">
      {products.map((prod) => (
        
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
}

export default ItemList;
