import { useTranslation } from "react-i18next";
import { background } from "../assets";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section id="home" className="hero">
      <div className="container" style={{ padding: "10px 20px" }}>
        <div
          style={{
            height: "400px",
            overflow: "hidden",
          }}
        >
          <img src={background} alt="" style={{ width: "100%" }} />
        </div>
        <div
          style={{
            padding: "10px 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{t("hero.title")}</h1>
          <p
            style={{ fontSize: "1.2rem", fontWeight: "600", lineHeight: "1.3" }}
          >
            {t("hero.desc")}
          </p>
          {/* <p>{t("hero.location")}</p> */}
          <a href="#chavithi" className="btn">
            {t("nav.chavithi")}
          </a>
        </div>
      </div>
    </section>
  );
}
