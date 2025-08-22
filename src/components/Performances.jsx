import Section from "./Section";
import { performances } from "../data/performances";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

export default function Performances() {
  const { t } = useTranslation();
  return (
    <Section
      id="performances"
      title={t("performances.title")}
      lead={t("performances.lead")}
    >
      <div className="list">
        {performances.map((d, idx) => (
          <div className="card" key={idx}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <div>
                <strong>
                  {t("performances.day")} {d.day}
                </strong>
              </div>
              <div className="meta">{dayjs(d.date).format("DD MMM YYYY")}</div>
            </div>
            <div className="list">
              {d.items.map((it, i) => (
                <div
                  className="kv"
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ width: 100 }}>
                    <img src={it.image} alt="" />
                  </div>
                  <div>
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <span>
                        {t("performances.time")}: {it.time}
                      </span>
                      <span>
                        {t("performances.program")}: {it.program} <br />
                        {t("performances.group")}: {it.group}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
