# Proyecto React - E-commerce (CoderHouse)

## Descripción
Aplicación de e-commerce desarrollada en React como entrega de curso REACT JS.  
Incluye navegación con React Router, listado de productos, detalle individual, filtro por categorías, y carrito de compras con contexto global.

## Tecnologías
- React + Vite
- React Router DOM
- Context API
- CSS Modules simples

## Rutas principales
- `/` → Página de inicio con banner e imágenes.
- `/productos` → Lista completa de productos.
- `/category/:categoryId` → Lista de productos filtrados por categoría.
- `/item/:id` → Detalle de un producto.
- `/cart` → Carrito de compras.
- `/contacto` → Página de contacto con formulario.

## Funcionalidades
- **NavBar**: navegación con Inicio, Productos y Contacto.
- **Listado**: componente `ItemList` que hace el `map` de productos.
- **Asincronía**: productos simulados con promesas (`getProducts`, `getProductById`, `getProductsByCategory`).
- **Categorías**: filtro con chips en la vista de productos, reusando `ItemListContainer`.
- **Detalle**: `ItemDetailContainer` carga un solo producto y `ItemDetail` lo muestra.
- **Carrito**:
  - Agregar productos
  - Incrementar / decrementar cantidad
  - Eliminar ítems
  - Vaciar carrito
  - Mostrar total y cantidad
- **Estilos**: tipografía global en Arial, sistema de botones `.btn` (primary, ghost, danger).


