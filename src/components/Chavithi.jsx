import Section from "./Section";
import { chavithiInfo } from "../data/chavithi";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

export default function Chavithi() {
  const { t, i18n } = useTranslation();
  const date = dayjs(chavithiInfo.date).format("DD MMM YYYY");

  return (
    <Section
      id="chavithi"
      title={t("chavithi.title")}
      lead={t("chavithi.lead")}
    >
      <div className="card">
        <div className="kv">
          <strong style={{ width: "40%" }}>{t("chavithi.date")}</strong>
          <strong style={{ width: "70%" }}>{date}</strong>
        </div>
        <div className="kv">
          <strong style={{ width: "40%" }}>{t("chavithi.venue")}</strong>
          <strong style={{ width: "70%" }}>
            {t("chavithi.venue_content")}
          </strong>
        </div>
        <div style={{ marginTop: 14 }}>
          <strong className="badge">{t("chavithi.timings")}</strong>
          <div className="List" style={{ marginTop: 8 }}>
            {chavithiInfo.timings.map((tmg, idx) => (
              <strong
                className="kv"
                style={{
                  display: "grid",

                  width: "100%",
                }}
                key={idx}
              >
                <div>
                  <span>{tmg.label}</span>
                  <span>{tmg.lead}</span>
                </div>
              </strong>
            ))}
          </div>
        </div>
      </div>
      <strong>Ekaham</strong>
      <div className="card">
        <div className="kv">
          <strong style={{ width: "40%" }}>{t("chavithi.date")}</strong>
          <strong style={{ width: "70%" }}>{chavithiInfo.Ekaham_date}</strong>
        </div>
        <div className="kv">
          <strong style={{ width: "40%" }}>{t("chavithi.venue")}</strong>
          <strong style={{ width: "70%" }}>
            {t("chavithi.venue_content")}
          </strong>
        </div>
        <div style={{ marginTop: 14 }}>
          <strong className="badge">{t("chavithi.timings")}</strong>
          <div className="List" style={{ marginTop: 8 }}>
            {chavithiInfo.Ekaham.map((tmg, idx) => (
              <strong
                className="kv"
                style={{
                  display: "grid",

                  width: "100%",
                }}
                key={idx}
              >
                <div>
                  <span>{tmg.Ekaham_label}</span>
                  <span>{tmg.Ekaham_lead}</span>
                </div>
              </strong>
            ))}
          </div>
        </div>

        {/* <div style={{ marginTop: 14 }}>
          <div className="badge">{t("chavithi.rituals")}</div>
          <ul>
            {chavithiInfo.rituals.map((r, idx) => (
              <li key={idx}>{r}</li>
            ))}
          </ul>
        </div> */}
      </div>
    </Section>
  );
}
