// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {listOfAll: [], conditionForSpinner: false}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch(`https://apis.ccbp.in/blogs/`)
    const statusCode = await response.json()
    console.log(statusCode)

    const detailsInRightManner = statusCode.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatar: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({listOfAll: detailsInRightManner, conditionForSpinner: true})
  }

  render() {
    const {conditionForSpinner, listOfAll} = this.state

    return (
      <div>
        {conditionForSpinner ? (
          <div>
            {listOfAll.map(each => (
              <BlogItem eachElement={each} key={each.id} />
            ))}
          </div>
        ) : (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        )}
      </div>
    )
  }
}

export default BlogList
