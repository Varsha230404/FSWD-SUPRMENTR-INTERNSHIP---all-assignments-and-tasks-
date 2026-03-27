import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section>
      <h2>404 - Page Not Found</h2>
      <Link to="/">Go Home</Link>
    </section>
  )
}

export default NotFound
