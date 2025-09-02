
export default function Contact(){
  return (
    <main style={{maxWidth:800, margin:"0 auto", padding:"16px"}}>
      <h1>Contacto</h1>
      <p>Dejanos tu consulta y te respondemos a la brevedad.</p>

      <form className="card" style={{display:"grid", gap:12}}>
        <div>
          <label>Nombre</label>
          <input className="input" name="nombre" placeholder="Tu nombre" />
        </div>
        <div>
          <label>Email</label>
          <input className="input" type="email" name="email" placeholder="tucorreo@ejemplo.com" />
        </div>
        <div>
          <label>Mensaje</label>
          <textarea className="input" name="mensaje" rows={5} placeholder="Escribí tu consulta..." />
        </div>
        <div>
          <button className="btn primary" type="button">Enviar</button>
        </div>
      </form>
    </main>
  );
}
