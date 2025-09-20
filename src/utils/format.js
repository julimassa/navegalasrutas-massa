// src/utils/format.js
export const formatPrice = (value) => {
  const n = Number(value);
  if (Number.isNaN(n)) return value;      // si viniera mal, devolvemos tal cual
  return `$${n.toLocaleString("es-AR")}`; // → $24.990
};
