import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>{t("hero.title")}</h1>
        <p>{t("hero.location")}</p>
        <p>{t("hero.desc")}</p>
        <a href="#chavithi" className="btn">
          {t("nav.chavithi")}
        </a>
      </div>
    </section>
  );
}
