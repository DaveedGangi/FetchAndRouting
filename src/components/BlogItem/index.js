// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachElement} = props
  const {title, imageUrl, author, topic, avatar, id} = eachElement

  return (
    <Link to={`/blogs/${id}`} key={id}>
      <div className="flexingItems">
        <div>
          <img className="ImageUrl" src={imageUrl} alt={title} />
        </div>
        <div>
          <p>{topic}</p>
          <h1>{title}</h1>
          <img className="Avatar" src={avatar} alt={avatar} />
          <p>{author}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
