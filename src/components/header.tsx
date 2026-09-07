"use client";
import Link from "next/link";
import { useState } from "react";
import { ChromeWordmark } from "@/components/chrome-wordmark";
export function Header() {
  const [open, setOpen] = useState(false);
  const [logoPaused, setLogoPaused] = useState(false);
  return (
    <>
      <div className="announcement">
        NXRE — NO RULES EXIST <span>INDEPENDENT EXPRESSION</span>
      </div>
      <header className="header">
        <div className={`brand-signature${logoPaused ? " is-paused" : ""}`}>
          <Link
            className="wordmark chrome-logo"
            href="/"
            aria-label="NXRE home"
            onClick={() => setOpen(false)}
          >
            <ChromeWordmark />
          </Link>
          <button
            type="button"
            className="logo-motion-control"
            aria-label={
              logoPaused ? "Play logo animation" : "Pause logo animation"
            }
            onClick={() => setLogoPaused(!logoPaused)}
            title={logoPaused ? "Play logo animation" : "Pause logo animation"}
          >
            <span aria-hidden="true">{logoPaused ? "▶" : "Ⅱ"}</span>
          </button>
        </div>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/shop">The drop</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/lookbook">Lookbook</Link>
        </nav>
        <Link className="header-about" href="/about">
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
          ["The drop", "shop"],
          ["Collections", "collections"],
          ["Lookbook", "lookbook"],
          ["The mindset", "about"],
        ].map(([name, id]) => (
          <Link key={id} href={`/${id}`} onClick={() => setOpen(false)}>
            {name} ↗
          </Link>
        ))}
      </nav>
    </>
  );
}
