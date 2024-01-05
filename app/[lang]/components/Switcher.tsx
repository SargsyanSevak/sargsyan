"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [currentMode, setCurrentMode] = useState("light");
  useEffect(() => {
    setCurrentMode(window.localStorage.getItem("theme") || "light");
  }, [currentMode, theme]);

  return (
    <button
      className="text-[24px] flex justify-center items-center h-full w-full"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {currentMode === "dark" ? (
        <HiOutlineMoon />
      ) : currentMode === "light" ? (
        <FiSun />
      ) : null}
    </button>
  );
}

export default ThemeToggle;
