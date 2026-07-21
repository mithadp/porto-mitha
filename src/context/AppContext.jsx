"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { content } from "../data/content.js";

const AppContext = createContext(null);

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getInitialLang() {
  if (typeof window === "undefined") return "id";
  const stored = localStorage.getItem("lang");
  return stored === "en" ? "en" : "id";
}

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const [lang, setLang] = useState(getInitialLang);

  // Sync state with DOM on mount (hydration alignment with script in layout.js)
  useEffect(() => {
    const actualTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    const actualLang = document.documentElement.getAttribute("lang") || "id";
    if (actualTheme !== theme) setTheme(actualTheme);
    if (actualLang !== lang) setLang(actualLang);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );
  const toggleLang = useCallback(
    () => setLang((l) => (l === "id" ? "en" : "id")),
    []
  );

  const t = content[lang];

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, toggleLang, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
