"use client";

import { useState } from "react";

function Character({ activity }: { activity: "skate" | "walk" | "soda" }) {
  return (
    <svg
      viewBox="0 0 120 160"
      className={`pixel-person person-${activity}`}
      aria-hidden="true"
    >
      <ellipse
        className="character-shadow"
        cx="61"
        cy="149"
        rx="39"
        ry="5"
        fill="#090909"
        opacity=".65"
      />
      <g className="character-body">
        <g className="leg leg-back">
          <path d="M61 91 82 91 80 115 91 138 73 142 59 117Z" fill="#555c61" />
          <path d="m73 100 7 15 11 23-10 2-14-27Z" fill="#343b41" />
          <path d="m73 137 18-2 12 8-2 6H73l-5-4Z" fill="#c8ced0" />
          <path d="M73 145h29v5H72Z" fill="#62686d" />
        </g>
        <g className="leg leg-front">
          <path d="M39 90 63 91 61 117 48 140 30 136 39 113Z" fill="#73797b" />
          <path d="m39 99 12 5-4 19-9 15-8-2 9-23Z" fill="#454e55" />
          <path d="m31 133 18 3-1 11-30 1-1-6Z" fill="#e1e0d7" />
          <path d="m18 145 30-1v5H18Z" fill="#666d72" />
          <path d="m39 104 12 2-2 10-12-2Z" fill="#879094" />
        </g>
        <path
          d="M40 45 61 39 82 49 89 86 78 101 35 97 30 73Z"
          className="hoodie-main"
        />
        <path d="m61 39 21 10 7 37-11 15-10-36Z" className="hoodie-shadow" />
        <path d="m40 45 21-6-9 28-17 13-5-7Z" className="hoodie-light" />
        <path d="m44 79 23-1 7 12-33-1Z" fill="#111820" opacity=".45" />
        <path d="m49 61 5-2 4 8 7-10 5 2-12 17Z" fill="#d5d9d8" />
        <g className="arm arm-back">
          <path d="m79 50 12 5 10 27-13 6-13-22Z" className="hoodie-shadow" />
          <path d="m88 83 12-3 3 11-9 5-7-5Z" fill="#ac8170" />
        </g>
        <g className="character-head">
          <path d="m46 24 21-4 11 12-4 19-16 6-14-13Z" fill="#bf9880" />
          <path d="m65 24 13 8-4 19-12 4 5-17Z" fill="#896352" />
          <path d="m43 29 3-14 19-6 17 12-2 13-17-6-16 6Z" fill="#20262d" />
          <path d="m46 15 19-6 17 12-21-5Z" fill="#68717b" />
          <path d="m48 28 14-3 27 9-3 5-25-8Z" fill="#10151a" />
          <path d="m50 36 9 2-1 6-8-2Z" fill="#1d222a" />
          <path d="m62 39 10-1-1 6-8 2Z" fill="#1d222a" />
          <path d="m58 39 5 1" stroke="#1d222a" strokeWidth="2" />
        </g>
        <g className={`arm arm-front ${activity === "soda" ? "soda-arm" : ""}`}>
          <path d="m36 49 13 12-12 25-13-7 2-18Z" className="hoodie-main" />
          <path d="m26 61 10-9 3 11-8 16-7-1Z" className="hoodie-light" />
          {activity === "soda" ? (
            <>
              <path d="m26 77 10 5 20-21-5-8-10 5Z" fill="#bf9880" />
              <g className="soda-can">
                <path d="m47 43 13 1 1 19-13-1Z" fill="#ce283c" />
                <path d="m56 44 4 0 1 19-5-1Z" fill="#731827" />
                <path d="m47 43 4-3 9 1v3Z" fill="#c6d3d7" />
                <path d="m51 48 5 1-3 8-3-1Z" fill="#f0e8dc" />
              </g>
            </>
          ) : (
            <path d="m24 78 12 6-5 10-9-3-3-6Z" fill="#bf9880" />
          )}
        </g>
      </g>
      {activity === "skate" && (
        <g className="skateboard">
          <path d="m8 148 7-4 87 0 10-5-2 8-10 5H19Z" fill="#b92537" />
          <path d="m13 146 88-1 7-3-6 6H20Z" fill="#aeb7ba" />
          <path d="M28 151h7m49 0h7" stroke="#aeb7ba" strokeWidth="3" />
          <circle cx="31" cy="154" r="4" fill="#e2dfcf" />
          <circle cx="88" cy="154" r="4" fill="#e2dfcf" />
        </g>
      )}
    </svg>
  );
}

export function StreetScene() {
  const [paused, setPaused] = useState(false);
  return (
    <section
      className={`street-scene${paused ? " is-paused" : ""}`}
      aria-label="Animated low-poly streetwear scene"
    >
      <div className="street-scene-label">
        <span>NXRE / AFTER HOURS</span>
        <button
          type="button"
          onClick={() => setPaused(!paused)}
          aria-label={paused ? "Play street scene" : "Pause street scene"}
        >
          {paused ? "▶ PLAY" : "Ⅱ PAUSE"}
        </button>
      </div>
      <div
        className="street-world"
        role="img"
        aria-label="Three low-poly characters in oversized streetwear: one skateboarding, one walking, and one drinking soda."
      >
        <div className="street-grid" aria-hidden="true" />
        <div className="street-block street-block-one" aria-hidden="true" />
        <div className="street-block street-block-two" aria-hidden="true" />
        <div className="street-tag" aria-hidden="true">
          NXRE
        </div>
        <div className="street-character street-skater">
          <Character activity="skate" />
        </div>
        <div className="street-character street-walker">
          <Character activity="walk" />
        </div>
        <div className="street-character street-soda">
          <Character activity="soda" />
        </div>
      </div>
    </section>
  );
}
