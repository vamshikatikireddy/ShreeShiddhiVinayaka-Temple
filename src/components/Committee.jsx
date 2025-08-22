import Section from "./Section";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Committee() {
  const { t } = useTranslation();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const url = `${import.meta.env.BASE_URL}data/committee.json`;
    fetch(url)
      .then((r) => r.json())
      .then(setMembers)
      .catch(console.error);
  }, []);

  return (
    <Section
      id="committee"
      title={t("committee.title")}
      lead={t("committee.lead")}
    >
      <div className="grid">
        {members.map((m, idx) => (
          <div className="card" key={idx}>
            <h3 style={{ margin: "8px 0" }}>{m.name}</h3>
            <p className="meta">{m.role}</p>
            <p className="meta">{m.phone}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
