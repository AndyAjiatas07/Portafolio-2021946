import { useState } from "react";
import { SectionTitle } from "../../../shared/components/ui/SectionTitle";
import { GeneralInfo } from "./GeneralInfo";
import { Skills } from "./Skills";
import { EducationExperience } from "./EducationExperience";
import "./AboutPage.css";

const TABS = [
  { key: "perfil", label: "Perfil" },
  { key: "datos", label: "Datos generales" },
  { key: "habilidades", label: "Habilidades" },
  { key: "educacion", label: "Educación y experiencia" },
];

const STRENGTHS = [
  "Organización",
  "Responsabilidad",
  "Aprendizaje continuo",
  "Resolución de problemas",
  "Trabajo en equipo",
  "Adaptabilidad",
  "Pensamiento analítico",
  "Disciplina",
];

export const AboutPage = () => {
  const [tab, setTab] = useState("perfil");

  return (
    <section className="about">
      <div className="about__inner">
        <SectionTitle
          eyebrow="Sobre mí"
          title="Desarrollador Full Stack en formación"
          description="Estudiante de Perito en Computación con interés en construir productos completos: de la interfaz al servidor."
        />

        <div className="about__layout">
          <aside className="about__side">
            <div className="about__photo">
              <img
                src="/src/assets/img/profile.jpg"
                alt="Foto de Andy Ajiatas"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <ul className="about__strengths">
              {STRENGTHS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </aside>

          <div className="about__content">
            <div className="about__tabs" role="tablist">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={tab === t.key}
                  className={`about__tab ${tab === t.key ? "is-active" : ""}`}
                  onClick={() => setTab(t.key)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="about__panel">
              {tab === "perfil" && (
                <div className="about__profile">
                  <p>
                    Soy Andy Ariel Ajiatas Xiquin, estudiante de Perito en
                    Computación en el Centro Educativo Técnico Laboral KINAL,
                    con un fuerte interés en el desarrollo de software,
                    especialmente en el desarrollo web y de aplicaciones. Me
                    considero una persona organizada, responsable y con una
                    mentalidad de mejora continua, siempre buscando aprender
                    nuevas tecnologías y crear soluciones que generen valor.
                  </p>
                  <p>
                    Disfruto enfrentar desafíos técnicos, trabajar en equipo y
                    transformar ideas en proyectos funcionales. Mi objetivo es
                    seguir creciendo como desarrollador, especializarme en
                    ingeniería de software y participar en proyectos que tengan
                    un impacto real.
                  </p>
                </div>
              )}

              {tab === "datos" && <GeneralInfo />}
              {tab === "habilidades" && <Skills />}
              {tab === "educacion" && <EducationExperience />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
