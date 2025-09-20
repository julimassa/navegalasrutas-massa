// src/services/products.js
import { db } from "./firebase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

/** Trae todos los productos */
export async function getProducts() {
  const snap = await getDocs(collection(db, "products"));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

/** Trae un producto por id (id del documento en Firestore) */
export async function getProductById(id) {
  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

/** Trae productos filtrando por el campo "category" */
export async function getProductsByCategory(categoryId) {
  const q = query(collection(db, "products"), where("category", "==", categoryId));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

