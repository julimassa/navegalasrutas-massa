import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../../services/products";
import ItemDetail from "../itemDetail/ItemDetail";
import Breadcrumb from "../ui/Breadcrumb";
import { getCategoryLabel } from "../../utils/categories";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError("");
    setItem(null);

    (async () => {
      try {
        const prod = await getProductById(id);
        if (!cancelled) setItem(prod);
      } catch (err) {
        if (!cancelled) {
          console.error("ItemDetailContainer error:", err);
          setError(err?.message || "No se pudo cargar el producto.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => { cancelled = true; };
  }, [id]);

  if (loading) {
    return <p style={{ padding: 16 }}>Cargando detalle…</p>;
  }

  if (error) {
    return (
      <div style={{ padding: 16 }}>
        <Breadcrumb items={[{ label: "Inicio", to: "/" }, { label: "Productos", to: "/productos" }]} />
        <div
          style={{
            padding: "10px 12px",
            background: "#ffecec",
            border: "1px solid #ffb3b3",
            color: "#a40000",
            borderRadius: 8,
            marginBottom: 12
          }}
        >
          {error}
        </div>
        <Link to="/productos" className="btn ghost">Volver</Link>
      </div>
    );
  }

  if (!item) {
    return (
      <div style={{ padding: 16 }}>
        <Breadcrumb items={[{ label: "Inicio", to: "/" }, { label: "Productos", to: "/productos" }]} />
        <p>Producto no encontrado.</p>
        <Link to="/productos" className="btn ghost">Volver</Link>
      </div>
    );
  }

  return (
    <section style={{ maxWidth: 1100, margin: "16px auto", padding: "0 12px" }}>
      <Breadcrumb
        items={[
          { label: "Inicio", to: "/" },
          { label: "Productos", to: "/productos" },
          item?.category
            ? { label: getCategoryLabel(item.category), to: `/category/${item.category}` }
            : { label: "Detalle" },
          { label: item.title ?? item.nombre ?? "Producto" },
        ]}
      />
      <ItemDetail product={item} />
    </section>
  );
}
