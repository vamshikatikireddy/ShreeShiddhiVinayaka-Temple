import { useState } from "react";
import Section from "./Section";
import { gallery } from "../data/gallery";
import { useTranslation } from "react-i18next";

export default function Gallery() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = (i) => {
    setIndex(i);
    setOpen(true);
  };
  const close = () => setOpen(false);
  const prev = (e) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + gallery.length) % gallery.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % gallery.length);
  };

  return (
    <Section id="gallery" title={t("gallery.title")} lead={t("gallery.lead")}>
      <div className="grid">
        {gallery.map((g, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className="card"
            style={{ padding: 0, overflow: "hidden", cursor: "zoom-in" }}
            aria-label={`Open image ${g.alt}`}
          >
            <img src={g.src} alt={g.alt} loading="lazy" />
            <div style={{ padding: 10 }}>
              <div className="meta">{g.alt}</div>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div
          onClick={close}
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: 16,
          }}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="btn"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "#444",
            }}
          >
            ✕
          </button>
          <button
            onClick={prev}
            aria-label="Previous"
            className="btn"
            style={{ position: "absolute", left: 20, background: "#444" }}
          >
            ‹
          </button>
          <img
            src={gallery[index].src}
            alt={gallery[index].alt}
            style={{ maxWidth: "90vw", maxHeight: "85vh", borderRadius: 12 }}
          />
          <button
            onClick={next}
            aria-label="Next"
            className="btn"
            style={{ position: "absolute", right: 20, background: "#444" }}
          >
            ›
          </button>
          <div style={{ position: "absolute", bottom: 20, color: "#fff" }}>
            {gallery[index].alt}
          </div>
        </div>
      )}
    </Section>
  );
}
