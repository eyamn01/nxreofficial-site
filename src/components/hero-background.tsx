"use client";

import { useState } from "react";
import { Art } from "@/components/storefront";

export function HeroBackground() {
  const [paused, setPaused] = useState(false);

  return (
    <>
      <Art
        kind="campaign"
        className={`hero-motion${paused ? " is-paused" : ""}`}
        label="Animated abstract campaign placeholder. NXRE campaign photography or video to follow."
      />
      <button
        type="button"
        className="motion-control"
        aria-label={
          paused ? "Play background animation" : "Pause background animation"
        }
        onClick={() => setPaused(!paused)}
      >
        <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
        {paused ? "Play motion" : "Pause motion"}
      </button>
    </>
  );
}
