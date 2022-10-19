const BlogItem = props => {
  const {blog} = props
  const {title, description, publishedDate} = blog

  return (
    <li className="blog-item-list">
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
