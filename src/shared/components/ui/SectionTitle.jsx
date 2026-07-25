import './SectionTitle.css'

export const SectionTitle = ({ eyebrow, title, description, align = 'left' }) => {
  return (
    <div className={`section-title section-title--${align}`}>
      {eyebrow && <span className="section-title__eyebrow mono">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p className="section-title__desc">{description}</p>}
    </div>
  )
}
