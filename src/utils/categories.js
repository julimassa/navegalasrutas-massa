// src/utils/categories.js
export const CATEGORY_LABELS = {
  militares: "Cintos Militares",
  diseno: "Cintos de Diseño",      // usamos "diseno" como id en la URL/DB
};

export function getCategoryLabel(id) {
  if (!id) return "";
  return CATEGORY_LABELS[id] ?? id;
}
