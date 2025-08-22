import Section from "./Section";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [info, setInfo] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const url = `${import.meta.env.BASE_URL}data/contact.json`;
    // For debugging
    // console.log("[Contact] fetch:", url);

    fetch(url, { cache: "no-cache" })
      .then((r) => {
        if (!r.ok)
          throw new Error(`HTTP ${r.status} ${r.statusText} for ${url}`);
        const ct = r.headers.get("content-type") || "";
        if (!ct.includes("application/json")) {
          return r.text().then((txt) => {
            throw new Error(
              `Unexpected content-type: ${ct}. Body starts: ${txt.slice(0, 80)}`
            );
          });
        }
        return r.json();
      })
      .then((json) => {
        setInfo(json);
        // console.log("[Contact] data:", json);
      })
      .catch((e) => {
        console.error("[Contact] error:", e);
        setErr(e.message);
      });
    // console.log(info);
  }, []);

  if (err) {
    return (
      <Section id="contact" title={t("contact.title")} lead={t("contact.lead")}>
        <div className="card">Failed to load contact info. {err}</div>
      </Section>
    );
  }

  if (!info)
    return (
      <Section id="contact" title={t("contact.title")} lead={t("contact.lead")}>
        <div className="card">Loading...</div>
      </Section>
    );

  return (
    <Section id="contact" title={t("contact.title")} lead={t("contact.lead")}>
      <div className="card">
        <div className="gridList">
          <span>
            {t("contact.phone")}:{info.phone}
          </span>
          <span>
            {t("contact.email")}:{info.email}
          </span>
          <span>
            {t("contact.address")}: {info.address}
          </span>
        </div>
      </div>
      <div style={{ marginTop: 16 }} className="card">
        <div className="badge">Map</div>
        <div style={{ marginTop: 8 }}>
          <iframe
            title="Temple Location Map"
            src="https://www.google.com/maps?q=Shree%20Shiddhi%20Vinayaka%20Swamy%20Temple%20Rudravari%20Merakha%20Kunavaram&output=embed"
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: 12 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Section>
  );
}
