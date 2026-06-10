import { useState } from 'react'
import CourseCard from '../components/CourseCard'
import { courses } from '../data/courses'

const CATS = ['Todos', 'Frontend', 'Diseño', 'Negocios', 'Productividad']

export default function CursosPage() {
  const [filtro, setFiltro] = useState('Todos')
  const filtered = filtro === 'Todos' ? courses : courses.filter(c => c.category === filtro)

  return (
    <main>
      <section className="catalog-hero">
        <div>
          <span className="eyebrow">Catálogo de cursos</span>
          <h1>Explora rutas de aprendizaje para crecer con confianza.</h1>
          <p>Cursos destacados, niveles y formatos de entrega en un solo lugar.</p>
        </div>
        <div className="badge-box">
          <strong>24 cursos activos</strong>
          <span>Nuevos contenidos cada semana.</span>
        </div>
      </section>

      <div className="catalog-body">
        <nav className="filters" aria-label="Categorías">
          {CATS.map(cat => (
            <button
              key={cat}
              className={`chip${filtro === cat ? ' active' : ''}`}
              onClick={() => setFiltro(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>
        <div className="course-grid">
          {filtered.map(c => <CourseCard key={c.title} course={c} />)}
        </div>
      </div>
    </main>
  )
}