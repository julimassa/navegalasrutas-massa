export default function Home(){
  return (
    <main style={{maxWidth:1100, margin:"0 auto", padding:"12px"}}>
       
       <h1 style={{
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "800",
        margin: "20px 0",
        color: "#111"
      }}>
        Bienvenidos a nuestra Tienda Online
      </h1>
      
      <section style={{marginBottom:16}}>
        <img
          src="/img/banner1.JPG"   
          alt="Banner"
          style={{width:"100%", height:"auto", borderRadius:12}}
        />
      </section>

      <section style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
        gap:12
      }}>
        <img src="/img/foto-1.jpg" alt="Foto 1"
             style={{width:"100%", height:220, objectFit:"cover", borderRadius:12}} />
        <img src="/img/foto-2.jpg" alt="Foto 2"
             style={{width:"100%", height:220, objectFit:"cover", borderRadius:12}} />
      </section>
    </main>
  );
}
