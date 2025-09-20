export const CATEGORY_LABELS = {
  militares: "Cintos Militares",
  diseno: "Cintos de Diseño",     
};

export function getCategoryLabel(id) {
  if (!id) return "";
  return CATEGORY_LABELS[id] ?? id;
}
