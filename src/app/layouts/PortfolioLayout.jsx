import { Outlet } from 'react-router-dom'
import { Navbar } from '../../shared/components/layout/Navbar.jsx'
import { Footer } from '../../shared/components/layout/Footer.jsx'
import './PortfolioLayout.css'

export const PortfolioLayout = () => {
  return (
    <div className="portfolio-layout">
      <Navbar />
      <main className="portfolio-layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
