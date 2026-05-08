"use client";

import { useEffect } from "react";

export default function BackToTop() {

  useEffect(() => {
    const button = document.getElementById("back-to-top");

    const handleScroll = () => {
      if (!button) return;

      if (window.scrollY > 300) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        display: "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "12px 16px",
        borderRadius: "50px",
        border: "none",
        backgroundColor: "#2d6a4f",
        color: "white",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      ↑ Top
    </button>
  );
}