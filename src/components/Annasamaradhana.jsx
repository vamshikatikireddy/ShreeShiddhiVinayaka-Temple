import React from "react";
import Section from "./Section";
import { useTranslation } from "react-i18next";

function Annasamaradhana() {
  const { t } = useTranslation();
  return (
    <div>
      <Section
        id="annasamaradhana"
        title={t("AnnaSamaradhana.title")}
        className="section"
      >
        <div className="card">
          <p>
            Venu: Rudravari Merakha, Patha kunavaram junction, Chintalapalli,
            Razole Mandal, Andhra Pradesh
          </p>
          <p>Timing: 11:00 AM onwards</p>
          <p>Organized by: Shree Shiddhi Vinayaka Temple committee</p>
          <p>For more details, please contact: +91 9849242009</p>
        </div>
      </Section>
    </div>
  );
}

export default Annasamaradhana;
