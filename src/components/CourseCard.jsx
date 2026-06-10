export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-top">
        <span className={`course-category cat-${course.category}`}>{course.category}</span>
        <span className="course-level">{course.level}</span>
      </div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <div className="course-meta">
        <span>{course.duration}</span>
        <span>{course.format}</span>
      </div>
      <a className="course-action" href="#">Ver curso</a>
    </article>
  )
}