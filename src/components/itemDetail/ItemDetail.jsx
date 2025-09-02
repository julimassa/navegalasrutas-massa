export default function ItemDetail({ product }){
  if (!product) return null;

  return (
    <div style={{display:"grid", gridTemplateColumns:"minmax(260px,420px) 1fr", gap:20}}>
      <img
        src={product.imagen}
        alt={product.nombre}
        style={{width:"100%", height:260, objectFit:"cover", borderRadius:12}}
      />

      <div>
        <h2 style={{marginTop:0}}>{product.nombre}</h2>
        <div style={{fontWeight:800, fontSize:20}}>${product.price}</div>
        <p style={{marginTop:10}}>{product.descripcion || "Sin descripción"}</p>
      </div>
    </div>
  );
}
