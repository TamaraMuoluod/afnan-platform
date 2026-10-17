import { createContext, useContext, useEffect, useState } from "react";
import ar from "../i18n/ar.json";
import en from "../i18n/en.json";

const translations = { ar, en };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem("lang") || "ar"
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLanguage = () =>
    setLang((l) => (l === "ar" ? "en" : "ar"));

  const t = (key) => {
    const value = key
      .split(".")
      .reduce((obj, k) => obj?.[k], translations[lang]);
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}