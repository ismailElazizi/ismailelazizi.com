import Img from 'gatsby-image'
import React from 'react'
const mediumCDNUrl = `https://cdn-images-1.medium.com/`
const postUrl = `https://medium.com/@ismailelazizi`

const Article = ({ post: { title, uniqueSlug, virtuals } }) => (
  <div className="post-item">
    <a className="post-link" href={`${postUrl}/${uniqueSlug}`} target="_blank">
      <Img className="coverImg" fluid={virtuals.previewImage.imageId} />
      <img src={`${mediumCDNUrl}/${virtuals.previewImage.imageId}`} />
      <span className="post-title">{title}</span>
    </a>
  </div>
)

export default Article
