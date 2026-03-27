import { Link } from 'react-router-dom'
import { blogs } from '../data/blogs'

const BlogsList = () => {
  return (
    <section>
      <h2>Blogs List</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <article key={blog.id} className="blog-card">
            <h3>{blog.title}</h3>
            <p>{blog.summary}</p>
            <Link to={`/blog/${blog.id}`}>Read details</Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BlogsList
