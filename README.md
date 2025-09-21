🛍️ Proyecto Final – E-commerce React (CoderHouse)
📌 Descripción

Aplicación de e-commerce desarrollada con React + Vite como entrega final del curso React JS (CoderHouse).

La app simula una tienda online de cinturones (Braixa – Todo en Cintos), mostrando productos desde Firebase Firestore, filtrados por categoría. Incluye carrito de compras con estado global (Context API), checkout con creación de órdenes en Firestore y descuento real de stock.

🚀 Tecnologías utilizadas

⚛ React + Vite

🧭 React Router DOM – navegación SPA

📦 Context API + useState – manejo global del carrito

🔥 Firebase Firestore – base de datos de productos y órdenes

💾 LocalStorage – persistencia del carrito

🎨 CSS personalizado + Grid / Flexbox

🖼️ React Slick – carrusel de imágenes en la página de inicio

📂 Estructura de carpetas
src/
├── components/       # Componentes reutilizables (NavBar, Item, Cart, etc.)
├── context/          # Contexto global (CartContext)
├── pages/            # Páginas (Home, Contact, Productos, Checkout, Cart)
├── services/         # Firebase y lógica de productos/órdenes
├── utils/            # Helpers (formatPrice, normalización de categorías)
├── App.jsx           # Rutas principales
└── main.jsx          # Punto de entrada

🛒 Funcionalidades principales

Listado de productos

Datos obtenidos en tiempo real desde Firestore (products)

Filtro por categorías: Cintos Militares y Cintos de Diseño

Buscador de productos (ignora mayúsculas/acentos)

Descripción truncada (4 líneas) + link “Ver más” al detalle

Detalle de producto

Información completa (nombre, imagen, precio, descripción)

Stock actualizado dinámicamente

Botón “Añadir al carrito” deshabilitado si no hay stock

Carrito

Agregar productos

Incrementar / decrementar cantidad (limitado por stock real)

Eliminar ítems o vaciar carrito

Persistencia en localStorage

Subtotales + total

Visualización de stock restante por producto

Checkout

Formulario (nombre, email, teléfono)

Validación de campos obligatorios

Crea una orden en Firestore (orders)

Descuenta stock en la colección products

Muestra el ID de la orden como confirmación

Home

Carrusel de imágenes con react-slick

Tarjetas destacadas de categorías

Contacto

Página simple con formulario (placeholder para futura integración de EmailJS)

Estilos

Diseño responsivo (desktop/mobile)

Botones reutilizables (.btn.primary, .btn.ghost, .btn.danger)

Tipografía neutra y estética minimalista

🔗 Rutas principales

/ → Inicio con carrusel + categorías destacadas

/productos → Catálogo completo

/category/:categoryId → Productos filtrados por categoría

/item/:id → Detalle del producto

/cart → Carrito de compras

/checkout → Proceso de compra

/contacto → Página de contacto

/bienvenida → Página extra de bienvenida

* → Redirección a inicio

⚙️ Instalación y uso

Clonar el repositorio:

git clone https://github.com/usuario/coderhouse-massa.git
cd coderhouse-massa


Instalar dependencias:

npm install


Configurar Firebase en src/services/firebase.jsx con tus credenciales.

Ejecutar en modo desarrollo:

npm run dev


Generar build para producción:

npm run build

✅ Criterios de entrega cumplidos

✔ Catálogo dinámico desde Firebase
✔ Detalle de producto
✔ Filtrado por categorías
✔ Carrito con estado global
✔ Checkout con validación
✔ Creación de órdenes en Firestore
✔ Descuento real de stock
✔ Uso de promesas, hooks y context
✔ Estilos personalizados + responsive
✔ Home con carrusel y categorías destacadas

✍️ Autora

👩‍💻 Julia Massa
📚 Curso React JS – CoderHouse