import Section from "./Section";
import { updates } from "../data/updates";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

export default function Updates() {
  const { t } = useTranslation();
  return (
    <Section id="updates" title={t("updates.title")} lead={t("updates.lead")}>
      <div className="list">
        {updates.map((u, idx) => (
          <div className="kv" key={idx}>
            <span>
              <strong>{u.title}</strong>
            </span>
            <span className="meta">{dayjs(u.date).format("DD MMM YYYY")}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
