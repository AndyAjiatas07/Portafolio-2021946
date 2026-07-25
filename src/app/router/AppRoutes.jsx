import { Routes, Route } from 'react-router-dom'
import { PortfolioLayout } from '../layouts/PortfolioLayout.jsx'

// features
import { HomePage } from '../../features/home/components/HomePage.jsx'
import { AboutPage } from '../../features/about/components/AboutPage.jsx'
import { ProjectsPage } from '../../features/projects/components/ProjectsPage.jsx'
import { ProjectDetailPage } from '../../features/projects/components/ProjectDetailPage.jsx'
import { ContactPage } from '../../features/contact/components/ContactPage.jsx'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PortfolioLayout />}>
        <Route index element={<HomePage />} />
        <Route path="sobre-mi" element={<AboutPage />} />
        <Route path="proyectos" element={<ProjectsPage />} />
        <Route path="proyectos/:id" element={<ProjectDetailPage />} />
        <Route path="contacto" element={<ContactPage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<h1>Página no encontrada</h1>} />
    </Routes>
  )
}
