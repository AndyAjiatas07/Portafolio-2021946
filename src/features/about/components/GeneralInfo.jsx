const DATA = [
  ['Nombre', 'Andy Ariel Ajiatas Xiquin'],
  ['Edad', '18 años'],
  ['País', 'Guatemala'],
  ['Formación', 'Perito en Computación'],
  ['Institución', 'Centro Educativo Técnico Laboral KINAL'],
  ['Estado', 'Estudiante (último año)'],
  ['Experiencia', 'Desarrollo de proyectos académicos y personales'],
  ['Área de interés', 'Desarrollo Full Stack'],
  ['Idiomas', 'Español (nativo)'],
  ['Objetivo', 'Convertirme en Ingeniero en Sistemas y desarrollador profesional'],
]

export const GeneralInfo = () => {
  return (
    <div className="general-info">
      <table>
        <tbody>
          {DATA.map(([label, value]) => (
            <tr key={label}>
              <th>{label}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
