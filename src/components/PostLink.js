import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const PostLink = ({
  post: {
    frontmatter: { path, title, type, cover_image },
  },
}) => (
  <div className="post-item">
    <a className="post-link" href={path} target="_blank">
      <Img className="coverImg" fluid={cover_image.childImageSharp.fluid} />
      <span className="post-title">{title}</span>
      <span className="post-type">{type}</span>
    </a>
  </div>
)

export default PostLink
