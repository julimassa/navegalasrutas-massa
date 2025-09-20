import "./Contact.css";
import toast from "react-hot-toast";


export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("¡Gracias por contactarnos! Te responderemos a la brevedad.");
  };

  return (
    <main className="contact-page">
      <h1>Contacto</h1>
      <p>Si tenés consultas sobre nuestros productos, completá el formulario:</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Tu nombre" required />
        <input type="email" name="email" placeholder="Tu email" required />
        <textarea name="message" placeholder="Escribí tu mensaje..." required />
        
        <button type="submit" className="btn primary">
          Enviar
        </button>
      </form>

    </main>
  );
}
