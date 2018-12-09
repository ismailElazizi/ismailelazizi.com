import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image";

const PostLink = ({ post }) => (
  <div className= 'project-item'>
    <a href={post.frontmatter.path}>
      <Img fluid={post.frontmatter.cover_image.childImageSharp.fluid}/>
      <br/>
      <p>{post.frontmatter.type}</p> 
      <p>{post.frontmatter.title}</p>
    </a>
  </div>
)

export default PostLink
