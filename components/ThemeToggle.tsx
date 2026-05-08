"use client";

export default function ThemeToggle() {

  const toggleTheme = () => {

    document.body.classList.toggle("dark");

    const isDark =
      document.body.classList.contains("dark");

    localStorage.setItem(
      "theme",
      isDark ? "dark" : "light"
    );
  };

  if (typeof window !== "undefined") {

    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="theme-btn"
      aria-label="Toggle Theme"
    >
      Toggle Theme
    </button>
  );
}