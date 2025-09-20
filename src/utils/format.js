export const formatPrice = (value) => {
  const n = Number(value);
  if (Number.isNaN(n)) return value;      
  return `$${n.toLocaleString("es-AR")}`; 
};
