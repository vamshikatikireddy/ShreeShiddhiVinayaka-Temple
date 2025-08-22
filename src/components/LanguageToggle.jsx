import { useTranslation } from "react-i18next";

export default function LanguageToggle({ onLang }) {
  const { t, i18n } = useTranslation();
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <button
        className="btn"
        style={{
          background: i18n.language === "en" ? "var(--brand)" : "#ddd",
          color: i18n.language === "en" ? "#fff" : "#000",
        }}
        onClick={() => onLang("en")}
      >
        {t("lang.english")}
      </button>
      <button
        className="btn"
        style={{
          background: i18n.language === "te" ? "var(--brand)" : "#ddd",
          color: i18n.language === "te" ? "#fff" : "#000",
        }}
        onClick={() => onLang("te")}
      >
        {t("lang.telugu")}
      </button>
    </div>
  );
}
