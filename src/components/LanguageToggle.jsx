import { useTranslation } from "react-i18next";

export default function LanguageToggle({ onLang }) {
  const { i18n } = useTranslation();
  const isTelugu = i18n.language === "te";

  return (
    <div
      className="lang-toggle-switch"
      role="switch"
      aria-checked={isTelugu}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isTelugu}
          onChange={() => onLang(isTelugu ? "en" : "te")}
          aria-label="Toggle language"
        />
        <span className="slider" />
      </label>

      <div className="switch-labels">
        {isTelugu && <span className="switch-label active">English</span>}
        {!isTelugu && <span className="switch-label active">తెలుగు</span>}
      </div>
    </div>
  );
}
