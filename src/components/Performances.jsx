// Performances.jsx — Option A: Responsive grid of day cards with square tiles

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
      <div className="perf-days-grid">
        {performances.map((d, idx) => (
          <div className="card perf-day-card" key={idx} id={`day-${d.day}`}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 8,
                gap: 8,
              }}
            >
              <div>
                <strong>
                  {t("performances.day")} {d.day}
                </strong>
              </div>
              <strong className="meta">
                {dayjs(d.date).format("DD MMM YYYY")}
              </strong>
            </div>

            <div className="perf-grid">
              {d.items.map((it, i) => (
                <div className="perf-tile" key={i}>
                  <div className="perf-thumb">
                    <img
                      src={it.image}
                      alt={`${it.program} - ${it.group}`}
                      loading="lazy"
                    />
                  </div>
                  <strong>
                    <div className="perf-text">
                      <div className="perf-line">
                        {t("performances.time")}: {it.time}
                      </div>
                      <div className="perf-line">
                        {t("performances.program")}: {it.program}
                      </div>
                      <div className="perf-line">
                        {t("performances.group")}: {it.group}
                      </div>
                    </div>
                  </strong>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* If your images are in public/ and you deploy on GitHub Pages, build src with BASE_URL:

Replace:
  <img src={it.image} ... />
With:
  const base = import.meta.env.BASE_URL;
  <img src={`${base}${it.image}`} ... />

And ensure your data uses relative paths like "images/your.jpg". If you import images from src/assets with
import { harikatha } from "../assets";
then keep src={it.image} as in this example. */
