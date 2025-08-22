import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import te from "./te.json";

const saved =
  typeof window !== "undefined" ? localStorage.getItem("lang") : "en";
const lng = saved || "en";

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, te: { translation: te } },
  lng,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
