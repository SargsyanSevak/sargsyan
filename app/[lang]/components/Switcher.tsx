// "use client";

// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

// const Switcher = () => {
//   const { theme, setTheme } = useTheme();
//   const [currentMode, setCurrentMode] = useState("light");
//   const handleToggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   // useEffect(() => {
//   //   if (theme === "dark") {
//   //     window.localStorage.setItem("mode", "dark");
//   //   } else {
//   //     window.localStorage.setItem("mode", "light");
//   //   }
//   // }, [theme]);
//   // const storedTheme =
//   //   typeof window !== "undefined"
//   //     ? window.localStorage.getItem("theme")
//   //     : false;
//   // const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

//   // const toggleDarkMode = () => {
//   //   setIsDarkMode((prev) => !prev);
//   // };

//   // useEffect(() => {
//   //   const element = document.documentElement;

//   //   if (isDarkMode) {
//   //     element.classList.add("dark");
//   //     document.body.classList.add("darkMode");
//   //     localStorage.setItem("theme", "dark");
//   //   } else {
//   //     element.classList.remove("dark");
//   //     document.body.classList.remove("darkMode");
//   //     localStorage.removeItem("theme");
//   //   }
//   // }, [isDarkMode, storedTheme]);

//   // useEffect(() => {
//   //   const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
//   //   const onWindowMatch = (e: MediaQueryListEvent) => {
//   //     setIsDarkMode(e.matches);
//   //   };

//   //   darkQuery.addEventListener("change", onWindowMatch);

//   //   return () => {
//   //     darkQuery.removeEventListener("change", onWindowMatch);
//   //   };
//   // }, []);

//   return (
//     <div
//       className="text-[24px] flex justify-center items-center h-full w-full"
//       onClick={() => handleToggleTheme()}
//     >
//       {theme === "dark" ? (
//         <div className="cursor-pointer text-yellow-500">
//           <span>
//             <FiSun />
//           </span>
//         </div>
//       ) : (
//         <div className="cursor-pointer text-black">
//           <span>
//             <HiOutlineMoon />
//           </span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Switcher;

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
  }, [theme]);
  return (
    <button
      className="text-[24px] flex justify-center items-center h-full w-full"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {currentMode === "dark" ? <HiOutlineMoon /> : <FiSun />}
    </button>
  );
}

export default ThemeToggle;
