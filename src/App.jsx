import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CursosPage from './pages/CursosPage'
import AcercaPage from './pages/AcercaPage'
import './css/Navigation.css'

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink className="brand" to="/">EduFlow</NavLink>
        <nav className="nav-links" aria-label="Navegación principal">
          <NavLink className={({isActive}) => `nav-link${isActive ? ' active' : ''}`} to="/" end>Inicio</NavLink>
          <NavLink className={({isActive}) => `nav-link${isActive ? ' active' : ''}`} to="/cursos">Cursos</NavLink>
          <NavLink className={({isActive}) => `nav-link${isActive ? ' active' : ''}`} to="/acerca">Acerca de</NavLink>
        </nav>
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cursos" element={<CursosPage />} />
          <Route path="/acerca" element={<AcercaPage />} />
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </main>
    </div>
  )
}
export default App