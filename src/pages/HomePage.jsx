import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import { courses } from '../data/courses'
import '../css/HomePage.css'

export default function HomePage() {
  return (
    <main className="home">

      <section className="home-hero">
        <div className="hero-content">
          <span className="eyebrow">Bienvenido a EduFlow</span>
          <h1>Aprende con propósito,<br />crece con confianza.</h1>
          <p>Una plataforma de cursos para que avances a tu ritmo con contenido creado por expertos en cada área.</p>
          <div className="hero-actions">
            <Link className="btn-primary" to="/cursos">Explorar catálogo</Link>
            <Link className="btn-ghost" to="/acerca">Conocer más</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card-float">
            <span className="hero-card-icon">🎓</span>
            <div>
              <strong>+1,200 estudiantes</strong>
              <span>aprendiendo hoy</span>
            </div>
          </div>
          <div className="hero-card-float hero-card-float--2">
            <span className="hero-card-icon">✅</span>
            <div>
              <strong>24 cursos activos</strong>
              <span>nuevos cada semana</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-item">
          <span className="stat-num">24</span>
          <span className="stat-label">Cursos activos</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-num">4</span>
          <span className="stat-label">Categorías</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-num">+1,200</span>
          <span className="stat-label">Estudiantes</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-num">98%</span>
          <span className="stat-label">Satisfacción</span>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-hdr">
          <div>
            <span className="eyebrow">Lo más popular</span>
            <h2>Cursos destacados</h2>
          </div>
          <Link className="link-arrow" to="/cursos">Ver todos los cursos →</Link>
        </div>
        <div className="course-grid">
          {courses.slice(0, 3).map(c => (
            <CourseCard key={c.title} course={c} />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-box">
          <h2>¿Listo para empezar?</h2>
          <p>Explora el catálogo completo y encuentra tu próximo curso.</p>
          <Link className="btn-primary" to="/cursos">Ver todos los cursos</Link>
        </div>
      </section>

    </main>
  )
}