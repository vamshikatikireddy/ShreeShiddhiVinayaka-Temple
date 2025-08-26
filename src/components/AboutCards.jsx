import Section from "./Section";
import { aboutCards } from "../data/aboutCards";
import { useTranslation } from "react-i18next";

export default function AboutCards() {
  const { t, i18n } = useTranslation();
  const isTe = i18n.language === "te";

  return (
    <Section id="about" title={t("about.title")} lead={t("about.lead")}>
      <div className="grid">
        {aboutCards.map((c, idx) => (
          <div className="card" key={idx}>
            <img src={c.img} alt="" style={{ width: 100, height: 100 }} />
            <h3 style={{ margin: "8px 0" }}>{isTe ? c.teTitle : c.title}</h3>
            <p className="meta">{isTe ? c.teDesc : c.desc}</p>
            <a
              href={c.link}
              target="_blank"
              className="btn"
              style={{ marginTop: 10 }}
            >
              {t("about.learnMore")}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
