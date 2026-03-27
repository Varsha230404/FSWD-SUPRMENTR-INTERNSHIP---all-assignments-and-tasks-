import { Link, useParams } from 'react-router-dom'
import { blogs } from '../data/blogs'

const BlogDetails = () => {
  const { id } = useParams()
  const blog = blogs.find((item) => item.id === id)

  if (!blog) {
    return (
      <section>
        <h2>Blog not found</h2>
        <Link to="/blogs">Go back to blogs</Link>
      </section>
    )
  }

  return (
    <section>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <Link to="/blogs">Back to blogs</Link>
    </section>
  )
}

export default BlogDetails
