import { useTranslation } from "react-i18next";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useTranslation();
  return (
    <footer className="footer">
      © {year} {t("brand")} — {t("location")}
    </footer>
  );
}
