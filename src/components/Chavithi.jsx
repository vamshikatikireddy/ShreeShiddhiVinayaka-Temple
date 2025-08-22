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
          <span>{t("chavithi.date")}</span>
          <strong>{date}</strong>
        </div>
        <div className="kv">
          <span>{t("chavithi.venue")}</span>
          <strong>{chavithiInfo.venue}</strong>
        </div>
        <div style={{ marginTop: 14 }}>
          <div className="badge">{t("chavithi.timings")}</div>
          <div className="list" style={{ marginTop: 8 }}>
            {chavithiInfo.timings.map((tmg, idx) => (
              <div className="kv" key={idx}>
                <span>{tmg.label}</span>
                <span>{tmg.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 14 }}>
          <div className="badge">{t("chavithi.rituals")}</div>
          <ul>
            {chavithiInfo.rituals.map((r, idx) => (
              <li key={idx}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
