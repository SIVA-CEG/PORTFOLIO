import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = ["about", "skills", "projects", "contact"];

export default function Header({ theme, toggleTheme }) {
  const isDark = theme === "dark";
  const [active, setActive] = useState("about");

  const containerRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  /* 🔥 SMOOTH SCROLL FUNCTION */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 100; // adjust based on navbar height
    const top = el.offsetTop - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  /* 🔥 SCROLL SPY */
  useEffect(() => {
    const handleScroll = () => {
      NAV_ITEMS.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.offsetTop - 150;
        const height = el.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 🔥 INDICATOR ANIMATION */
  useEffect(() => {
    const activeEl = document.querySelector(
      `.nav-link[data-id="${active}"]`
    );

    if (activeEl && containerRef.current) {
      const rect = activeEl.getBoundingClientRect();
      const parentRect = containerRef.current.getBoundingClientRect();

      setIndicatorStyle({
        width: rect.width,
        left: rect.left - parentRect.left,
      });
    }
  }, [active]);

  return (
    <>
      <style>{`
        .nav-wrapper {
          position: sticky;
          top: 0;
          width: 100%;
          z-index: 1000;

          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.08);

          display: flex;
          justify-content: center;
          padding: 16px 0;
        }

        .nav-container {
          width: 95%;
          max-width: 1400px;

          display: flex;
          justify-content: space-between;
          align-items: center;

          padding: 14px 30px;
          border-radius: 16px;

          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);

          box-shadow: 0 10px 40px rgba(0,0,0,0.4);
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 30px;
          position: relative;
        }

        .nav-link {
          position: relative;
          font-size: 0.95rem;
          color: var(--text-main);
          padding: 6px 10px;
          transition: 0.3s;
          z-index: 2;
          background: none;
          border: none;
          cursor: pointer;
        }

        .nav-link:hover {
          color: #00d4ff;
          transform: translateY(-2px) scale(1.05);
          text-shadow: 0 0 10px rgba(0,212,255,0.5);
        }

        .nav-link.active {
          color: #00d4ff;
          font-weight: 600;
        }

        .nav-indicator {
          position: absolute;
          bottom: -6px;
          height: 2px;
          background: linear-gradient(90deg, #00d4ff, #7c3aed);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .theme-btn {
          padding: 8px 16px;
          border-radius: 999px;
          border: none;
          background: linear-gradient(90deg, #00d4ff, #7c3aed);
          cursor: pointer;
          font-size: 1rem;
          transition: 0.3s;
        }

        .theme-btn:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 0 20px rgba(0,212,255,0.5);
        }
          .resume-btn {
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 0.85rem;
          text-decoration: none;
          color: white;
          background: linear-gradient(90deg, #00d4ff, #7c3aed);
          transition: 0.3s;
        }

        .resume-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 0 15px rgba(0,212,255,0.5);
        }

        .resume-btn.download {
          background: linear-gradient(90deg, #22c55e, #16a34a);
        }
      `}</style>

      <motion.header
        className="nav-wrapper"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">
          
          {/* 🔥 NAV LINKS */}
          <div className="nav" ref={containerRef}>
            <div className="nav-indicator" style={indicatorStyle} />

            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                data-id={item}
                className={`nav-link ${
                  active === item ? "active" : ""
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>

          {/* 🔥 THEME BUTTON */}
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
  
          {/* 🔥 VIEW RESUME */}
          <a
            href="/public/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            View CV
          </a>

          {/* 🔥 DOWNLOAD RESUME */}
          <a
            href="/public/resume.pdf"
            download
            className="resume-btn download"
          >
            Download CV
          </a>

          {/* 🔥 THEME BUTTON */}
          <button className="theme-btn" onClick={toggleTheme}>
            {isDark ? "🌙" : "☀️"}
          </button>

        </div>
        </div>
      </motion.header>
    </>
  );
}