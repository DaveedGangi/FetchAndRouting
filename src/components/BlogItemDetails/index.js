// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogsData: {}, basedOnCondition: false}

  componentDidMount = () => {
    this.getDataOfAll()
  }

  getDataOfAll = async () => {
    const {match} = this.props
    console.log(this.props)
    const {params} = match
    const {id} = params
    console.log(id)
    const fetchingData = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const responses = await fetchingData.json()
    console.log(responses)
    const addingData = {
      id: responses.id,
      title: responses.title,
      author: responses.author,
      avatar: responses.avatar_url,
      image: responses.image_url,
      topic: responses.content,
    }
    this.setState({blogsData: addingData, basedOnCondition: true})
  }

  render() {
    const {blogsData, basedOnCondition} = this.state
    const {title, author, topic, image, avatar} = blogsData
    console.log(title)
    return (
      <div>
        {basedOnCondition ? (
          <div className="cardClicking">
            <div className="cards">
              <h1>{title}</h1>
              <div className="flexingData">
                <div>
                  <img className="Ava" src={avatar} alt={avatar} />
                </div>
                <p>{author}</p>
              </div>
              <img className="ImageT" src={image} alt={title} />
              <p>{topic}</p>
            </div>
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

export default BlogItemDetails
