import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const ROLES = [
  "Desarrollador Full Stack en formación",
  "Construyo interfaces con React",
  "Diseño APIs con Node.js y Express",
  "Exploro arquitectura backend",
];

const LAYERS = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "languages", label: "Lenguajes de programación" },
  { key: "database", label: "Base de datos" },
  { key: "tools", label: "Herramientas" },
];

export const HomePage = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <span className="hero__eyebrow mono">
            // bienvenido a mi portafolio
          </span>
          <h1>
            Hola, soy <span className="hero__name">Andy Ajiatas</span>
          </h1>
          <p className="hero__role mono" key={roleIndex}>
            {ROLES[roleIndex]}
          </p>
          <p className="hero__tagline">
            Apasionado por el desarrollo de software, la resolución de problemas
            y el aprendizaje continuo.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/proyectos">
              Ver proyectos
            </Link>
            <Link className="btn btn--ghost" to="/contacto">
              Contactarme
            </Link>
          </div>
        </div>

        <div className="hero__stack" aria-hidden="true">
          {LAYERS.map((layer, i) => (
            <div
              key={layer.key}
              className={`hero__layer hero__layer--${layer.key}`}
              style={{ "--i": i }}
            >
              <span className="mono">{layer.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
