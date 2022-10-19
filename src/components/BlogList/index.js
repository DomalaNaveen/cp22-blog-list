import BlogItem from '../BlogItem'
import './index.css'

const BlogList = Props => {
  const {blogsList} = Props

  return (
    <ul className="list-container">
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} blog={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
