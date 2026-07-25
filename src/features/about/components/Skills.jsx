import { skillGroups } from '../data/skills'

export const Skills = () => {
  return (
    <div className="skills">
      {skillGroups.map((group) => (
        <div key={group.key} className="skills__group">
          <h3 className={`skills__group-title skills__group-title--${group.key}`}>
            {group.label}
          </h3>
          <div className="skills__list">
            {group.skills.map((skill) => (
              <div key={skill.name} className="skill-bar">
                <div className="skill-bar__head">
                  <span>{skill.name}</span>
                  <span className="mono">{skill.level}%</span>
                </div>
                <div className="skill-bar__track">
                  <div
                    className={`skill-bar__fill skill-bar__fill--${group.key}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
