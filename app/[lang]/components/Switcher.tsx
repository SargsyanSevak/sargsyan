"use client";
import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";

const Switcher = () => {
  const storedTheme =
    typeof window !== "undefined"
      ? window.localStorage.getItem("theme")
      : false;
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

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
  }, [isDarkMode, storedTheme]);

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
        <div className="cursor-pointer text-yellow-500">
          <FiSun />
        </div>
      ) : (
        <div className="cursor-pointer text-black">
          <HiOutlineMoon />
        </div>
      )}
    </div>
  );
};

export default Switcher;
