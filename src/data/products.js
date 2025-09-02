const PRODUCTS = [
  {
    id: 1,
    nombre: "Cinturón Americano Completo",
    price: 15000,
    imagen: "/img/americano.jpg",
    descripcion:
      "Cinturon Policial, dos cintos en uno, cinto Externo en Cordura Importada de 5 cm de ancho con velkro en toda su extencion, Talle standard extensible a 112 cm",
  },
  {
    id: 2,
    nombre: "Cinturón Nato Arena",
    price: 16500,
    imagen: "/img/arena2.jpg",
    descripcion:
      "Cinturon Militar de 55mm de ancho en cinta Nato con 2 pasadores abiertos Nato",
  },
  {
    id: 3,
    nombre: "Cinturón Piton Angosto (frente)",
    price: 18000,
    imagen: "/img/frente-los-ocho.JPG",
    descripcion:
      "Cinturon tactico de 4 cm de ancho, alta calidad, hebilla de acetato y cinta Titulo 500",
  },
  {
    id: 4,
    nombre: "Cinturón Lazo",
    price: 16000,
    imagen: "/img/lazo.jpg",
    descripcion:
      "Cinturon de sarga/polipropileno, de 4 cm de ancho con hebilla doble encanche",
  },
  {
    id: 5,
    nombre: "Cinturón Pitón Angosto",
    price: 22000,
    imagen: "/img/piton-angosto-camo.jpg",
  },
  {
    id: 6,
    nombre: "Cinturón Pitón Nato Bombero",
    price: 23000,
    imagen: "/img/piton-nato-bombero.jpg",
  },
  {
    id: 7,
    nombre: "Cintos Personalizados",
    price: 19000,
    imagen: "/img/lg.jpg",
  },
  {
    id: 8,
    nombre: "Marinero 48 Agujeros",
    price: 20000,
    imagen: "/img/48-agujeros.png",
  },
];


const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function computeCategory(nombre = "") {
  const n = nombre.toLowerCase();
  if (n.includes("americano")) return "americano";
  if (n.includes("nato")) return "nato";
  if (n.includes("piton") || n.includes("pitón")) return "piton";
  if (n.includes("marinero")) return "marinero";
  if (n.includes("personaliz")) return "personalizados";
  if (n.includes("lazo")) return "lazo";
  return "otros";
}


function enrich(list) {
  return list.map((p) => ({ ...p, category: computeCategory(p.nombre) }));
}

export async function getProducts() {
  await delay(500);
  return enrich(PRODUCTS);
}

export async function getProductsByCategory(categoryId) {
  await delay(500);
  const data = enrich(PRODUCTS).filter((p) => p.category === categoryId);
  return data;
}

export async function getProductById(id) {
  await delay(500);
  const item = enrich(PRODUCTS).find((p) => String(p.id) === String(id));
  return item || null;
}

export const CATEGORIES = Array.from(
  new Set(PRODUCTS.map((p) => computeCategory(p.nombre)))
)
  .map((id) => ({ id, label: id.charAt(0).toUpperCase() + id.slice(1) }))
  .sort((a, b) => a.label.localeCompare(b.label));


export default PRODUCTS;
