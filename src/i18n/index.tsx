import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { en, type Translation } from "./en";
import { es } from "./es";
import { it } from "./it";

export const translations = { en, es, it } as const;
export type Language = keyof typeof translations;

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("portfolio-language");
    if (storedLanguage === "en" || storedLanguage === "es" || storedLanguage === "it") {
      setLanguageState(storedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("portfolio-language", nextLanguage);
  };

  return <I18nContext.Provider value={{ language, setLanguage, t: translations[language] }}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useTranslation must be used within I18nProvider");
  return context;
}
