import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/* 1. FIX VERCEL / SSR ISSUE
   Theme is decided synchronously before first render */
const getInitialTheme = () => {
  if (typeof window === "undefined") return true; // default dark
  return localStorage.getItem("theme") === "dark";
};

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  /* 2. APPLY THEME + FORCE MOBILE DARK */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth < 640;

    if (isMobile) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      return;
    }

    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  /* 3. TOGGLE ONLY AFFECTS DESKTOP */
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-4 right-4 z-50 p-2 rounded-full transition-colors duration-300",
        "max-sm:hidden focus:outline-none",
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
