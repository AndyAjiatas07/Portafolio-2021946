import './Badge.css'

/**
 * layer: 'frontend' | 'backend' | 'database' | 'tools'
 * Determina el color del badge, coherente con el resto del sitio.
 */
export const Badge = ({ children, layer = 'frontend' }) => {
  return <span className={`badge badge--${layer} mono`}>{children}</span>
}
