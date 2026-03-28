// src/components/StarsOverlay.jsx
import React, { useRef, useEffect } from "react";

/*
StarsOverlay:
- draws many small twinkling stars across the full viewport using a canvas
- visible only when theme === 'moon' (component still mounts but opacity toggles)
- pointer-events: none (non-interactive)
*/

export default function StarsOverlay({ theme = "moon", density = 0.0012 }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf = null;
    let stars = [];
    let w = 0, h = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      w = (canvas.width = window.innerWidth * DPR);
      h = (canvas.height = window.innerHeight * DPR);
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      // regenerate stars count based on density
      const count = Math.max(60, Math.floor((window.innerWidth * window.innerHeight) * density));
      stars = new Array(count).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: (Math.random() * 1.6 + 0.6) * DPR,
        alpha: Math.random() * 0.9 + 0.1,
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        phase: Math.random() * Math.PI * 2
      }));
    }

    function draw(t) {
      ctx.clearRect(0, 0, w, h);
      for (let s of stars) {
        s.phase += s.twinkleSpeed;
        const a = Math.abs(Math.sin(s.phase)) * s.alpha;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="stars-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 6,
        pointerEvents: "none",
        opacity: theme === "moon" ? 1 : 0,
        transition: "opacity 420ms cubic-bezier(.16,.84,.44,1)",
        mixBlendMode: "screen"
      }}
      aria-hidden="true"
    />
  );
}
