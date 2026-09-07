import type { CSSProperties } from "react";

export function ChromeWordmark() {
  return (
    <span className="chrome-stage" aria-hidden="true">
      <span className="chrome-float">
        <span className="chrome-spin">
          {Array.from({ length: 9 }, (_, depth) => (
            <b
              key={depth}
              className={`chrome-face ${depth === 8 ? "chrome-front" : "chrome-edge"}`}
              style={{ "--depth": `${depth - 4}px` } as CSSProperties}
            >
              NXRE<em>✳</em>
            </b>
          ))}
          <b className="chrome-face chrome-back">
            NXRE<em>✳</em>
          </b>
        </span>
      </span>
    </span>
  );
}
