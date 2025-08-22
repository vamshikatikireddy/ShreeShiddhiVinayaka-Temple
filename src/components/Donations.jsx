import Section from "./Section";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Donations() {
  const { t } = useTranslation();
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const url = `${import.meta.env.BASE_URL}data/donations.json`;
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
        setData(json);
      })
      .catch((e) => {
        console.error("[Donations] error:", e);
        setErr(e.message);
      });
  }, []);

  if (err) {
    return (
      <Section
        id="donations"
        title={t("donations.title")}
        lead={t("donations.lead")}
      >
        <div className="card">Failed to load donations. {err}</div>
      </Section>
    );
  }

  if (!data) {
    return (
      <Section
        id="donations"
        title={t("donations.title")}
        lead={t("donations.lead")}
      >
        <div className="card" style={{ minHeight: 200 }}>
          Loading...
        </div>
      </Section>
    );
  }

  return (
    <Section
      id="donations"
      title={t("donations.title")}
      lead={t("donations.lead")}
    >
      <div>
        <div className="card">
          <div className="badge">{t("donations.how")}</div>
          <div className="gridList" style={{ marginTop: 10 }}>
            <div className="kv">
              <span>{t("donations.bank")}</span>
              <span>{data.methods.bank.branch}</span>
            </div>
            <div className="kv">
              <span>{t("donations.name")}</span>
              <span>{data.methods.bank.name}</span>
            </div>
            <div className="kv">
              <span>{t("donations.number")}</span>
              <span>{data.methods.bank.number}</span>
            </div>
            <div className="kv">
              <span>{t("donations.ifsc")}</span>
              <span>{data.methods.bank.ifsc}</span>
            </div>
            <div className="kv">
              <span>{t("donations.upi")}</span>
              <span>{data.methods.upi}</span>
            </div>
            <div className="kv">
              <span>{t("donations.onsite")}</span>
              <span>{data.methods.onsite}</span>
            </div>
          </div>
          <p className="meta" style={{ marginTop: 8 }}>
            {t("donations.note")}
          </p>
        </div>

        <div className="card">
          <div className="badge">Recent Donations</div>
          <div className="gridList" style={{ marginTop: 10 }}>
            {data.recent.map((d, idx) => (
              <div className="kv" key={idx}>
                <span>
                  {d.donor} ({d.purpose})
                </span>
                <strong>₹ {d.amount}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
