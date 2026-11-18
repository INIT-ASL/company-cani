// oxlint-disable react/only-export-components
// src/context/LanguageContext.jsx
import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { translations } from '../translations/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  // Default language is English ('en')
  const [language, setLanguageState] = useState(() => {
    try {
      return localStorage.getItem('cani_language') || 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = useCallback((lang) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('cani_language', lang);
    } catch {
      // Ignore storage errors in restricted context
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const nextLang = prev === 'en' ? 'id' : 'en';
      try {
        localStorage.setItem('cani_language', nextLang);
      } catch {
        // Ignore storage errors
      }
      return nextLang;
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Nested translation helper: t('home.hero.title')
  const t = useCallback(
    (path) => {
      const keys = path.split('.');
      let current = translations[language];
      for (const key of keys) {
        if (current && current[key] !== undefined) {
          current = current[key];
        } else {
          // Fallback to English if translation is missing
          let fallback = translations['en'];
          for (const fKey of keys) {
            if (fallback && fallback[fKey] !== undefined) {
              fallback = fallback[fKey];
            } else {
              return path;
            }
          }
          return fallback;
        }
      }
      return current;
    },
    [language]
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t,
    }),
    [language, setLanguage, toggleLanguage, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
