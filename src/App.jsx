import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";  // detalle
import Cart from "./components/cart/Cart";
import Home from "./pages/Home";              
import Contact from "./pages/Contact";       

export default function App(){
  return (
    <>
      <NavBar />
      <Routes>
        {/* Inicio con banner */}
        <Route path="/" element={<Home />} />

        {/* Productos: muestra TODOS los productos */}
        <Route path="/productos" element={<ItemListContainer />} />

        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        {/* Detalle y Carrito */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />

        {/* Contacto */}
        <Route path="/contacto" element={<Contact />} />

        
        <Route path="*" element={<p style={{padding:16}}>404</p>} />
      </Routes>
    </>
  );
}

