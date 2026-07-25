import { education, experience } from '../data/timeline'

function TimelineBlock({ title, items }) {
  return (
    <div className="timeline">
      <h3>{title}</h3>
      <ol className="timeline__list">
        {items.map((item) => (
          <li key={item.title} className="timeline__item">
            <span className="timeline__period mono">{item.period}</span>
            <h4>{item.title}</h4>
            <p className="timeline__place">{item.place}</p>
            <p className="timeline__desc">{item.description}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export const EducationExperience = () => {
  return (
    <div className="education-experience">
      <TimelineBlock title="Educación" items={education} />
      <TimelineBlock title="Experiencia" items={experience} />
    </div>
  )
}
