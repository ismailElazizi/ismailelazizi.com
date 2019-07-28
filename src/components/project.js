import Img from 'gatsby-image'
import React from 'react'

const Project = ({
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

export default Project
