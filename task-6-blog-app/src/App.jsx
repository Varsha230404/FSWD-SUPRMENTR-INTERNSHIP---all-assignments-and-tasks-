import { Link, Route, Routes } from 'react-router-dom'
import BlogDetails from './pages/BlogDetails'
import BlogsList from './pages/BlogsList'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <main className="layout">
      <header className="header">
        <h1>Blog App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs List</Link>
        </nav>
      </header>

      <section className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogsList />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </main>
  )
}

export default App
