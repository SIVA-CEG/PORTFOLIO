import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SITE } from "../data";

export default function Contact() {
  return (
    <>
      <style>{`
        .contact-wrapper {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          padding: 100px 60px;
          background: radial-gradient(circle at center, #020617, #000);
          display: flex;
          justify-content: center;
        }

        .contact-card {
          width: 100%;
          max-width: 1100px;
          padding: 50px;
          border-radius: 24px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
          text-align: center;
        }

        .contact-title {
          font-size: 2.8rem;
          font-weight: 900;
          margin-bottom: 20px;
        }

        .contact-sub {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 700px;
          margin: auto;
          line-height: 1.7;
        }

        .contact-buttons {
          margin-top: 40px;
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .contact-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 22px;
          border-radius: 12px;
          background: linear-gradient(90deg, #00d4ff, #7c3aed);
          color: black;
          font-weight: 700;
          text-decoration: none;
          transition: 0.3s;
        }

        .contact-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 30px rgba(0,212,255,0.4);
        }

        .contact-outline {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 22px;
          border-radius: 12px;
          border: 1px solid #00d4ff;
          color: #00d4ff;
          text-decoration: none;
          transition: 0.3s;
        }

        .contact-outline:hover {
          background: #00d4ff;
          color: black;
        }

        .contact-icons {
          margin-top: 40px;
          display: flex;
          justify-content: center;
          gap: 30px;
        }

        .icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          transition: 0.3s;
          cursor: pointer;
          color: white;
        }

        .icon:hover {
          background: #00d4ff;
          color: black;
          transform: scale(1.1);
        }
      `}</style>

      <section className="contact-wrapper" id="contact">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact-title">Let's Build Something Amazing 🚀</h2>

          <p className="contact-sub">
            Open to opportunities, collaborations, and meaningful tech conversations — let’s connect.
          </p>

          {/* BUTTONS */}
          <div className="contact-buttons">
            <a href={SITE.linkedin} target="_blank" className="contact-outline">
              <FaLinkedin /> LinkedIn
            </a>
             <a href="https://mail.google.com/mail/?view=cm&to=siva13november2005@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn">
                <FaEnvelope /> siva13november2005@gmail.com
              </a>

            <a href={SITE.github} target="_blank" className="icon">
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}