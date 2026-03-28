import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 70px;
          padding: 100px 75px;
          min-height: 500px; 
          border-radius: 24px;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(16px);
          box-shadow: 0 12px 50px rgba(0,0,0,0.35);
          flex-wrap: wrap;
        }

        .hero-left {
          flex: 1;
          min-width: 600px;
          text-align: left;
        }

        .hero-title {
          font-size: 3.3rem;
          font-weight: 900;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .gradient-text {
          background: linear-gradient(90deg, #00d4ff, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-sub {
          color: var(--text-muted);
          line-height: 1.9;
          font-size: 1.5rem;
          margin-bottom: 15px;
          max-width: 900px;
        }

        .highlight {
          color: #00d4ff;
          font-weight: 600;
        }

        .hero-aside {
          text-align: center;
          flex-shrink: 0;
        }

        /* 🔥 BIGGER IMAGE */
        .hero-photo-wrap {
          width: 500px;
          height: 500px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #00d4ff;

          box-shadow: 
            0 0 40px rgba(0,212,255,0.6),
            0 0 80px rgba(124,58,237,0.4);

          margin: auto;
          transition: transform 0.3s ease;
        }

        .hero-photo-wrap:hover {
          transform: scale(1.08);
        }

        .hero-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* 📱 MOBILE FIX */
        @media (max-width: 768px) {
          .hero-card {
            text-align: center;
            padding: 60px 20px;
             min-height: 400px; 
            gap: 40px;
          }

          .hero-left {
            text-align: center;
          }

          .hero-title {
            font-size: 2.3rem;
          }

          .hero-sub {
            font-size: 1.2rem;
          }

          .hero-photo-wrap {
            width: 200px;
            height: 200px;
          }
        }
          .coding-links {
          display: flex;
          gap: 18px;
          margin-top: 10px;
          flex-wrap: wrap;
        }

        .code-btn {
          padding: 15px 18px;
          border-radius: 999px;
          font-size: 1.5rem;
          text-decoration: none;
          color: white;
          font-weight: 500;
          transition: 0.3s;
          display: inline-block;
        }

        /* 🔥 LEETCODE STYLE */
        .code-btn.leetcode {
          background: linear-gradient(90deg, #f59e0b, #f97316);
        }

        .code-btn.leetcode:hover {
          transform: scale(1.08);
          box-shadow: 0 0 20px rgba(245,158,11,0.6);
        }

        /* 🔥 GFG STYLE */
        .code-btn.gfg {
          background: linear-gradient(90deg, #22c55e, #16a34a);
        }

        .code-btn.gfg:hover {
          transform: scale(1.08);
          box-shadow: 0 0 20px rgba(34,197,94,0.6);
        }
      `}</style>

      <section className="hero-card" id="hero">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Siva</span> 👋
          </h1>

          <p className="hero-sub">
            B.Tech IT student at Anna University with a CGPA of{" "}
            <span className="highlight">8.91</span>. I build scalable
            full-stack applications and enjoy solving complex problems using
            efficient algorithms.
          </p>

          <p className="hero-sub">
            Solved{" "}
            <span className="highlight">500+ problems</span>.
          </p>

          <div className="coding-links">
            <a
              href="https://leetcode.com/u/SIVA_ENGINEER"
              target="_blank"
              rel="noopener noreferrer"
              className="code-btn leetcode"
            >
              🚀 LeetCode
            </a>

            <a
              href="https://www.geeksforgeeks.org/profile/siva13nove4nal"
              target="_blank"
              rel="noopener noreferrer"
              className="code-btn gfg"
            >
              💡 GeeksforGeeks
            </a>
          </div>

          <p className="hero-sub">
            I mentor juniors in DSA and enjoy sharing knowledge while continuously
improving my problem-solving and development skills. I enjoy building efficient
systems, breaking them, and then fixing them better than before.
          </p>
        </motion.div>

        <motion.aside
          className="hero-aside"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="hero-photo-wrap">
            <img
              src="/headshot.jpg"
              alt="Siva"
              className="hero-photo"
            />
          </div>
        </motion.aside>
      </section>
    </>
  );
}