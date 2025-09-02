
import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom"; 
import ItemList from "../item/ItemList";
import { getProducts, getProductsByCategory, CATEGORIES } from "../../data/products"; 
import "./ItemListContainer.css";

export default function ItemListContainer() {
  const { categoryId } = useParams();          
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    const promise = categoryId
      ? getProductsByCategory(categoryId)
      : getProducts();

    promise
      .then((data) => {
        if (mounted) setItems(data);
      })
      .catch(() => {
        if (mounted) setItems([]);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [categoryId]);

  return (
    <section style={{ maxWidth: 1100, margin: "16px auto", padding: "0 12px" }}>
       <div className="filters">
        <NavLink
          to="/productos"
          end
          className={({ isActive }) => "chip" + (isActive && !categoryId ? " active" : "")}
        >
          Todos
        </NavLink>

        {CATEGORIES.map((c) => (
          <NavLink
            key={c.id}
            to={`/category/${c.id}`}
            className={({ isActive }) => "chip" + (isActive ? " active" : "")}
          >
            {c.label}
          </NavLink>
        ))}
      </div>
      
      <h1 style={{ margin: "8px 0 16px" }}>
        {categoryId ? `Categoría: ${categoryId}` : "Productos"}
      </h1>

      {loading ? <p>Cargando...</p> : <ItemList products={items} />}
    </section>
  );
}

