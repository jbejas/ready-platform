import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Locales
import en from "@locales/en.json";
import es from "@locales/es.json";

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

i18n.use(initReactI18next).init({
  // debug: true,
  compatibilityJSON: "v3",
  resources,
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
