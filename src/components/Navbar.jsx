import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";
import { Logo } from "../assets";

export default function Navbar({ active, sections, onLang }) {
  const { t } = useTranslation();
  console.log(active);
  console.log(sections);

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <div className="brand">
          <a href="#home">
            <img src={Logo} alt="" style={{ width: 100 }} />
          </a>
        </div>
        <div
          className="nav-links"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={active === s.id ? "active" : ""}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <LanguageToggle onLang={onLang} />
      </div>
    </nav>
  );
}
