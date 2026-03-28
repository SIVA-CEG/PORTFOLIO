import React from "react";
import { motion } from "framer-motion";
import Hero3D from "./Hero3D";

export default function Showcase3D({ fullScreen }) {
  return (
    <motion.section
      className="showcase-3d-root"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        height: fullScreen ? "10vh" : "auto",
        position: "relative",
      }}
    >
      {/* 🔥 WELCOME TEXT - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          position: "absolute",
          top: "2rem",
          left: "2.5rem",
          zIndex: 10,
          textAlign: "left",
          pointerEvents: "none",
        }}
      >
        <div style={{
          fontSize: "0.7rem",
          letterSpacing: "0.4em",
          color: "rgba(255,255,255,0.35)",
          textTransform: "uppercase",
          marginBottom: "0.4rem",
        }}>
        </div>
        <span style={{
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          fontWeight: 900,
          letterSpacing: "0.2em",
          background: "linear-gradient(135deg, #ffffff 0%, #a0c4ff 60%, #ffffff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontFamily: "'Orbitron', sans-serif",
          display: "block",
          lineHeight: 1,
        }}>
          SIVA
        </span>
         Welcome to my Portfolio
      </motion.div>

      {/* 🔥 3D */}
      <Hero3D />

      {/* 🔥 CAPTION */}
      <div className="showcase-caption" style={{ bottom: "3rem" }}>
        CODE LEARN REPEAT
      </div>
    </motion.section>
  );
}