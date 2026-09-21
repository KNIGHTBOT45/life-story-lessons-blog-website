"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Life Stories", href: "/life-stories" },
    { name: "Education", href: "/education" },
    { name: "Motivation", href: "/motivation" },
    { name: "Mentoring", href: "/mentoring" },
    { name: "Technology", href: "/technology" },
    { name: "Videos", href: "/videos" },
    { name: "About Me", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="/" className="logo">
          Life Story
          <span>Lessons</span>
        </a>

        <nav className="desktop-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-nav">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}