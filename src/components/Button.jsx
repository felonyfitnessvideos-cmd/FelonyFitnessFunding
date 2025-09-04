// src/components/Button.jsx
import { Link } from "react-router-dom";

export default function Button({ to, href, children, className = "" }) {
  const baseClasses = `inline-block px-6 py-3 rounded-lg font-semibold shadow-lg transform transition-transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl ${className}`;

  // If "href" is provided, render a normal anchor tag for external links
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  // Otherwise use React Router Link for internal navigation
  return (
    <Link to={to} className={baseClasses}>
      {children}
    </Link>
  );
}
