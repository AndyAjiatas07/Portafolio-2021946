import { SectionTitle } from "../../../shared/components/ui/SectionTitle";
import "./ContactPage.css";

const LINKS = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andy-ajiatas-92688b422/",
    hint: "Conecta conmigo profesionalmente",
  },
  {
    key: "email",
    label: "Email",
    href: "mailto:aajiatas-2021496@kinal.edu.gt",
    hint: "Enviame un correo",
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/AndyAjiatas07",
    hint: "Explora mi código",
  },
];

export const ContactPage = () => {
  return (
    <section className="contact">
      <div className="contact__inner">
        <SectionTitle
          align="center"
          eyebrow="Contacto"
          title="Conversemos"
          description="Estoy abierto a prácticas profesionales, colaboraciones y nuevas oportunidades para seguir aprendiendo."
        />

        <div className="contact__links">
          {LINKS.map((link) => (
            <a
              key={link.key}
              className="contact__link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__link-label">{link.label}</span>
              <span className="contact__link-hint mono">{link.hint}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
