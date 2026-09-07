"use client";
import Link from "next/link";
import { useState } from "react";
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="announcement">
        NXRE — NO RULES EXIST <span>INDEPENDENT EXPRESSION</span>
      </div>
      <header className="header">
        <Link
          className="wordmark"
          href="/"
          aria-label="NXRE home"
          onClick={() => setOpen(false)}
        >
          NXRE<span aria-hidden="true">✳</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/#drop">The drop</Link>
          <Link href="/#collections">Collections</Link>
          <Link href="/#lookbook">Lookbook</Link>
        </nav>
        <Link className="header-about" href="/#manifesto">
          The mindset ↗
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
      </header>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
      >
        {[
          ["The drop", "drop"],
          ["Collections", "collections"],
          ["Lookbook", "lookbook"],
          ["The mindset", "manifesto"],
        ].map(([name, id]) => (
          <Link key={id} href={`/#${id}`} onClick={() => setOpen(false)}>
            {name} ↗
          </Link>
        ))}
      </nav>
    </>
  );
}
