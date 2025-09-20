import { useEffect, useState, useMemo } from "react";
import { useParams, NavLink } from "react-router-dom"; 
import ItemList from "../item/ItemList";
import { getProducts, getProductsByCategory } from "../../services/products"; 
import "./ItemListContainer.css";
import Breadcrumb from "../ui/Breadcrumb";

const CATEGORIES = [
  { id: "militares", label: "Cintos Militares" },
  { id: "diseno",    label: "Cintos de Diseño" },
];

function normalize(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function ItemListContainer() {
  const { categoryId } = useParams();          
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [q, setQ] = useState(""); 

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError("");

    (async () => {
      try {
        const data = categoryId
          ? await getProductsByCategory(categoryId)
          : await getProducts();

        if (!cancelled) setItems(data);
      } catch (err) {
        if (!cancelled) {
          console.error("ItemListContainer error:", err);
          setItems([]);
          setError(err?.message || "No se pudieron cargar los productos.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [categoryId]);

  const filtered = useMemo(() => {
    const term = normalize(q.trim());
    if (!term) return items;

    return items.filter((p) => {
      const title = normalize(p.title ?? p.nombre ?? "");
      const desc  = normalize(p.description ?? p.descripcion ?? "");
      const cat   = normalize(p.category ?? "");
      return (
        title.includes(term) ||
        desc.includes(term) ||
        cat.includes(term)
      );
    });
  }, [items, q]);

  return (
    <section style={{ maxWidth: 1100, margin: "16px auto", padding: "0 12px" }}>
      {categoryId ? (
        <Breadcrumb
          items={[
            { label: "Inicio", to: "/" },
            { label: "Productos", to: "/productos" },
            { label: CATEGORIES.find(c => c.id === categoryId)?.label ?? categoryId },
          ]}
        />
      ) : (
        <Breadcrumb items={[{ label: "Inicio", to: "/" }, { label: "Productos" }]} />
      )}
      
      <div className="search-container">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar productos..."
          className="search-input"
        />
      </div>

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
        {categoryId
          ? (CATEGORIES.find(c => c.id === categoryId)?.label ?? `Categoría: ${categoryId}`)
          : "Productos"}
      </h1>

      {loading && <p style={{padding:"12px 0"}}>Cargando...</p>}
      {!!error && (
        <div style={{
          padding:"10px 12px",
          background:"#ffecec",
          border:"1px solid #ffb3b3",
          color:"#a40000",
          borderRadius:8,
          margin:"8px 0"
        }}>
          {error}
        </div>
      )}
      {!loading && !error && <ItemList products={filtered} />}
    </section>
  );
}
