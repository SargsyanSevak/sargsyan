"use client";
import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";

const Switcher = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const element = document.documentElement;

    if (isDarkMode) {
      element.classList.add("dark");
      document.body.classList.add("darkMode");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("darkMode");
      localStorage.removeItem("theme");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onWindowMatch = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkQuery.addEventListener("change", onWindowMatch);

    return () => {
      darkQuery.removeEventListener("change", onWindowMatch);
    };
  }, []);

  return (
    <div
      className="text-[24px] flex justify-center items-center h-full w-full"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <span className="cursor-pointer text-yellow-500">
          <FiSun />
        </span>
      ) : (
        <span className="cursor-pointer text-black">
          <HiOutlineMoon />
        </span>
      )}
    </div>
  );
};

export default Switcher;
