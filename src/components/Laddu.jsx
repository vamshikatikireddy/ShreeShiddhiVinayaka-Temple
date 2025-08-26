import React from "react";
import Section from "./Section";
import { laddu, laddu2 } from "../assets";
import { useTranslation } from "react-i18next";

function Laddu() {
  const { t } = useTranslation();
  return (
    <div>
      <Section id="laddu" title={t("Laddu.title")} className="section">
        <div className="card" style={{ height: "300px" }}>
          <p>Laddu Pata Begins from 2:00 PM</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <img
              src={laddu}
              alt=""
              style={{ maxWidth: 300, height: "220px" }}
            />
            <img
              src={laddu2}
              alt=""
              style={{ maxWidth: 300, height: "220px" }}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Laddu;
