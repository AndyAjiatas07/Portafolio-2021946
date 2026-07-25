import { SectionTitle } from "../../../shared/components/ui/SectionTitle";
import "./ContactPage.css";

const LINKS = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tu-usuario",
    hint: "Conecta conmigo profesionalmente",
  },
  {
    key: "computrabajo",
    label: "CompuTrabajo",
    href: "https://www.computrabajo.com.gt/tu-perfil",
    hint: "Revisa mi perfil laboral",
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/tu-usuario",
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
