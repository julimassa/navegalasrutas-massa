// src/components/ui/Breadcrumb.jsx
import { Link } from "react-router-dom";

export default function Breadcrumb({ items = [] }) {
  // items: [{ label: string, to?: string }]
  return (
    <nav aria-label="breadcrumb" style={{ margin: "8px 0 12px" }}>
      {items.map((it, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={idx} style={{ fontSize: 14, color: isLast ? "#111" : "#555" }}>
            {it.to && !isLast ? (
              <Link to={it.to} style={{ color: "#555", textDecoration: "none" }}>
                {it.label}
              </Link>
            ) : (
              <span>{it.label}</span>
            )}
            {!isLast && <span style={{ margin: "0 6px", color: "#bbb" }}>{"/"}</span>}
          </span>
        );
      })}
    </nav>
  );
}
