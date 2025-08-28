import React from "react";
import Item from "./Item";

function ItemList({ products }) {
  return (
    <div className="item-grid">
      {products.map((prod) => (
        <Item
          key={prod.id}
          nombre={prod.nombre}
          price={prod.price}
          imagen={prod.imagen}
        />
      ))}
    </div>
  );
}

export default ItemList;
