import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutCards from "./components/AboutCards";
import Chavithi from "./components/Chavithi";
import Performances from "./components/Performances";
import Annasamaradhana from "./components/Annasamaradhana";
import Laddu from "./components/Laddu";
// import Donations from "./components/Donations";
import Updates from "./components/Updates";
import Committee from "./components/Committee";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll("section").forEach((sec) => obs.observe(sec));
    return () => obs.disconnect();
  }, []);

  const sections = useMemo(
    () => [
      { id: "home", label: "Home" },
      // { id: "chavithi", label: t("nav.chavithi") },
      // { id: "gallery", label: t("nav.gallery") },
      { id: "performances", label: "Events" },
      // { id: "donations", label: t("nav.donations") },
      // { id: "updates", label: t("nav.updates") },
      // { id: "annasamaradhana", label: t("nav.annasamaradhana") },
      // { id: "about", label: t("nav.about") },
      // { id: "committee", label: t("nav.committee") },
      { id: "contact", label: "Contact" },
    ],
    [t]
  );

  const setLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <>
      <Navbar active={active} sections={sections} onLang={setLang} />
      <main>
        <Hero />
        <Chavithi />
        <Performances />
        {/* <Donations /> */}
        <Annasamaradhana />
        <Laddu />
        {/* <Gallery /> */}
        {/* <Updates /> */}
        <AboutCards />
        <Committee />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
