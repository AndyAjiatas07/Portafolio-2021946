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
                src="/img/profile.jpg"
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
                    Soy <strong>Andy Ariel Ajiatas Xiquin</strong>, estudiante
                    de
                    <strong> Perito en Computación</strong> en el Centro
                    Educativo Técnico Laboral KINAL y desarrollador Full Stack
                    en formación. Me apasiona el desarrollo de software y la
                    posibilidad de crear soluciones que aporten valor a las
                    personas mediante la tecnología. Disfruto aprender nuevas
                    herramientas, mejorar mis habilidades y enfrentar retos que
                    me permitan crecer tanto en el ámbito técnico como personal.
                  </p>

                  <p>
                    Durante mi formación he trabajado en diversos proyectos de
                    desarrollo web, aplicaciones móviles y sistemas backend,
                    utilizando tecnologías modernas como React, React Native,
                    Node.js, Express, Java, .NET, PostgreSQL y MongoDB. Cada
                    proyecto me ha permitido fortalecer mis conocimientos sobre
                    arquitectura de software, consumo de APIs, bases de datos,
                    control de versiones y buenas prácticas de desarrollo.
                  </p>

                  <p>
                    Me considero una persona organizada, responsable y
                    disciplinada. Disfruto analizar problemas, investigar
                    diferentes alternativas y encontrar soluciones eficientes.
                    Creo firmemente que el aprendizaje continuo es una de las
                    habilidades más importantes dentro del mundo tecnológico,
                    por lo que siempre busco mantenerme actualizado y aprender
                    nuevas metodologías, herramientas y tecnologías.
                  </p>

                  <p>
                    Además de la programación, me interesa el crecimiento
                    personal, las finanzas, la productividad y el trabajo
                    inteligente. También practico gimnasio de forma constante,
                    una actividad que me ha ayudado a desarrollar disciplina,
                    constancia y compromiso, cualidades que aplico tanto en mi
                    vida personal como en cada uno de mis proyectos.
                  </p>

                  <p>
                    Mi objetivo es continuar desarrollándome como profesional,
                    especializarme en Ingeniería de Software y participar en
                    proyectos que representen desafíos reales. Aspiro a
                    construir soluciones escalables, seguir aprendiendo de otros
                    desarrolladores y aportar valor mediante aplicaciones bien
                    diseñadas, funcionales y orientadas a resolver problemas.
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
