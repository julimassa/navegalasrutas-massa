const PRODUCTS = [
  {
    id: 1,
    nombre: "Cinturón Americano Completo",
    price: 15000,
    imagen: "/img/americano.jpg",
    descripcion:
      "Cinturon Policial, dos cintos en uno, cinto Externo en Cordura Importada de 5 cm de ancho con velkro en toda su extencion y Hebilla de Acetato, el cinturon interno no posee hebilla y tiene velkcro en toda su extencion, Talle standard extensible a 112 cm",
  },
  {
    id: 2,
    nombre: "Cinturón Nato Arena",
    price: 16500,
    imagen: "/img/arena2.jpg",
    descripcion:
      "Cinturon Militar de 55mm de ancho en cinta Nato con 2 pasadores abiertos Nato y un hebilla Nato, extensible a 1,35 mts, tambien hacemos un talle especial que se extiende a 1,70 mts",
  },
  {
    id: 3,
    nombre: "Cinturón Piton Angosto (frente)",
    price: 18000,
    imagen: "/img/frente-los-ocho.JPG",
    descripcion:
      "Cinturon tactico de 4 cm de ancho, alta calidad, hebilla de acetato y cinta Titulo 500, se realiza en colores negro, verde oliva o arena. Se extiende a 1,35 mts",
  },
  {
    id: 4,
    nombre: "Cinturón Lazo",
    price: 16000,
    imagen: "/img/lazo.jpg",
    descripcion:
      "Cinturon de sarga/polipropileno, de 4 cm de ancho con hebilla doble encanche. Disponible en 8 colores diferentes. El talle es a eleccion.",
  },
  {
    id: 5,
    nombre: "Cinturón Pitón Angosto Camuflado",
    price: 22000,
    imagen: "/img/piton-angosto-camo.jpg",
    descripcion:
      "Cinturon tactico de 4 cm de ancho, alta calidad, hebilla de acetato y cinta Titulo 500, Camuflado Selva. Se extiende a 1,35 mts",
  },
  {
    id: 6,
    nombre: "Cinturón Pitón Nato Bombero",
    price: 23000,
    imagen: "/img/piton-nato-bombero.jpg",
    descripcion:
      "Cinturon tactico de 5,5 cm de ancho, alta calidad, en Cinta Nato con 2 pasadores abiertos, se realiza en colores negro, verde oliva o arena. Su hebilla es de acetato grabado con el logo de Bomberos. Se extiende a 1,35 mts. Tambien se realizan en Talle especial que se extiende a 1,70 mts",
  },
  {
    id: 7,
    nombre: "Cintos Personalizados",
    price: 19000,
    imagen: "/img/lg.jpg",
    descripcion:
      "Cinturón Marinero de Polipropileno Sarga Reforzado con el  Logo de SU EMPRESA, Rígido y súper resistente.El precio publicado es por 10 UNIDADES. Tiempo de entrega 15 dias aproximadamente. Por mas cantidades consulte descuento.Hebillas marineras metalizadas (Niqueladas) con el Logo de SU EMPRESA Grabado en Laser.Ancho de la Cinta 3 cm. Colores de la cinta a eleccion: Negro, Azul Marino, Verde Oliva, Verde Ingles, Rojo, Violeta, Naranja y Arena.",
  },
  {
    id: 8,
    nombre: "Marinero 48 Agujeros",
    price: 20000,
    imagen: "/img/48-agujeros.png",
    descripcion:
      "Cinturón Marinero de Sarga tipo Soga con 48 Agujeros, Rígido y súper resistente.Hebillas marineras metalizadas (Niqueladas) Plateada con 48 Agujeros. Cinta de Sarga Reforzada de un Ancho de 30 mm.(3 cm) Disponible en los siguientes colores: NEGRO - VERDE MILITAR - VERDE INGLES - BEIGE - NARANJA - AZUL MARINO - BLANCO CON LINEA CENTRAL ROJA, BORDÓ, Violeta y ROJO. Las medidas van desde el talle 95, 100, 105, 110, 115, 120, hasta el 150. Para talles más grandes (hacemos hasta el talle 200), consultar. Tengan en cuenta que los talles corresponde al largo del cinturón en centímetros. ¿Como sabes tu talle? Te medís en el lugar donde vas a utilizar el  cinturon y a esa medida le agregás 10 o 15 cm como mínimo, ese es tu TALLE!!",
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
