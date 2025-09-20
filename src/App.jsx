import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout"; 
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";


export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
         {/* Página de inicio → Bienvenida */}
         <Route path="/" element={<Home />} />

        {/* Productos y catálogo */}
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Carrito */}
        <Route path="/cart" element={<Cart />} />

        {/* Otras páginas */}
        <Route path="/contacto" element={<Contact />} />

        {/* Redirección genérica */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster
       position="top-right"
       toastOptions={{
         style: { fontSize: "0.95rem" }
       }}
      />
       <Footer />
    </>
  );
}
