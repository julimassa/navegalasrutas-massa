import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/products";          // ⬅ ruta exacta a tus datos
import ItemDetail from "../itemDetail/ItemDetail";             // ⬅ ruta exacta al detalle

export default function ItemDetailContainer(){
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    let mounted = true;
    setLoading(true);
    getProductById(id)
      .then(prod => { if(mounted) setItem(prod); })
      .catch(()=> { if(mounted) setItem(null); })
      .finally(()=> { if(mounted) setLoading(false); });
    return ()=> { mounted = false; };
  }, [id]);

  if (loading) return <p style={{padding:16}}>Cargando...</p>;
  if (!item)   return <p style={{padding:16}}>Producto no encontrado</p>;

  return (
    <section style={{maxWidth:1100, margin:"16px auto", padding:"0 12px"}}>
      <ItemDetail product={item} />
    </section>
  );
}
