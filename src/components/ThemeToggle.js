import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="w-8 h-8 flex justify-center items-center transition"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
};
export default ThemeToggle;
