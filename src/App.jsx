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
        
        <Route path="/" element={<Home />} />

        
        <Route path="/productos" element={<ItemListContainer />} />

        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />

        
        <Route path="/contacto" element={<Contact />} />

        
        <Route path="*" element={<p style={{padding:16}}>404</p>} />
      </Routes>
    </>
  );
}

