import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Code Retrieval System",
    tech: ["C++", "Python (Flask)", "HTML", "CSS", "JavaScript"],
    desc: [
      "Engineered a trie-based search system with O(L) prefix matching",
      "Built Flask REST API integrated with C++ backend",
      "Real-time suggestions using AJAX",
      "Reduced lookup latency by 60%",
      "File-based storage + JSON communication"
    ],
    github: "https://github.com/SIVA-CEG/CODE-RETRIEVAL-SYSTEM",
  },
  {
    title: "XProctor - Online Proctoring System",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "TensorFlow.js", "Socket.io"],
    desc: [
      "AI-based proctoring system using real-time computer vision",
      "Face detection & anomaly detection using TensorFlow.js",
      "Secure authentication with JWT & bcrypt",
      "Real-time monitoring with Socket.io",
      "Integrated Monaco Editor for coding tests"
    ],
    github: "https://github.com/SIVA-CEG/XPROCTOR",
  },
  {
    title: "Smart Campus Chatbot",
    tech: ["Next.js", "React", "TypeScript", "LLM APIs"],
    desc: [
      "AI chatbot for real-time campus navigation",
      "Implemented prompt engineering for accurate responses",
      "Built server-side APIs with streaming responses",
      "Modular UI for enhanced user experience"
    ],
    github: "https://github.com", // optional
    live: "https://chatbot-workshop-neon.vercel.app",
  },
];

export default function Projects() {
  return (
    <>
      <style>{`
        .projects-section {
        margin-top: 40px;
        padding: 40px;
        width: 100vw;
        margin-left: calc(-50vw + 50%);
}

        .projects-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 30px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 20px;
        }

        .project-card {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
          position: relative;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 40px rgba(0,212,255,0.2);
        }

        .project-title {
          font-size: 2.5rem;
          font-weight: 700;
        }

        .tech-tags {
          margin-top: 10px;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tag {
          background: rgba(0,212,255,0.15);
          color: #00d4ff;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 1rem;
        }

        .project-desc {
          margin-top: 12px;
          font-size: 1.25rem;
          color: var(--text-muted);
        }

        .project-desc li {
          margin-bottom: 6px;
        }

        .project-links {
          margin-top: 14px;
          display: flex;
          gap: 10px;
        }

        .btn {
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.8rem;
          background: #00d4ff;
          color: black;
          text-decoration: none;
          font-weight: 600;
        }

        .btn-outline {
          border: 1px solid #00d4ff;
          color: #00d4ff;
          padding: 6px 12px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 1.25rem;
        }

        .btn-outline:hover {
          background: #00d4ff;
          color: black;
        }
      `}</style>

      <section className="projects-section" id="projects">
        <h2 className="projects-title">🚀 Projects</h2>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={i}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="project-title">{p.title}</div>

              {/* Tech Stack */}
              <div className="tech-tags">
                {p.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              {/* Description */}
              <ul className="project-desc">
                {p.desc.map((d, idx) => (
                  <li key={idx}>• {d}</li>
                ))}
              </ul>

              {/* Links */}
              <div className="project-links">
                {p.github && (
                  <a href={p.github} target="_blank" className="btn-outline">
                    GitHub
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" className="btn">
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}