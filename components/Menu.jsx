"use client";

import { useState } from "react";
import "./menu.css";

export default function Menu({ items }) {
  const [open, setOpen] = useState(false);




  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="logo-link">
          <img src="/img/logo-embraguesla34.webp" alt="Logo" className="site-logo" />
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? "is-active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú */}
        <nav className={`menu ${open ? "menu--open" : ""}`}>
          {items.map(item => (
            <a key={item.id} href={item.url} className="menu__item">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}




