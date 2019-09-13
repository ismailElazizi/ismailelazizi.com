import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Project from '../components/project'
import behance from '../images/behance.svg'
import dribbble from '../images/dribbble.svg'
import facebook from '../images/facebook.svg'
import github from '../images/github.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import medium from '../images/medium.svg'
import twitter from '../images/twitter.svg'

const IndexPage = ({ data }) => (
  <Layout>
    <div className="who">
      <h1 className="hero-css">
        <span role="img">{data.site.siteMetadata.hello}</span>
        <br />
        {data.site.siteMetadata.who}
      </h1>
    </div>

    <div className="posts-wrapper">
      {data.allMarkdownRemark.edges.map(elment => (
        <Project key={elment.node.id} post={elment.node} />
      ))}
    </div>

    <div class="divided-23" />
    <div className="callAction">
      <h3 className="hero-css contactH">Got a project? Let’s talk</h3>
      <Link to="/" className="btn-get-start">
        Tell Me Everything
      </Link>
    </div>

    <div class="divided-23" />
    <div className="footer-container">
      <div className="w-full sm-w1-2">
        <h4 className="subtoto-depara">Email me at:</h4>
        <h5 className="css-1uembe2-Paragraph" >hello@ismail.com</h5>
      </div>
      <div className="w-full sm-w1-2">
        <h4 className="subtoto-depara">Follow Me:</h4>

        <div className="social_links">
          <Link to="/" target="_blank">
            <img src={dribbble} className="logo" />
          </Link>
          <Link to="/" target="_blank">
            <img src={behance} className="logo" />
          </Link>
          <Link to="/" target="_blank">
            <img src={instagram} className="logo" />
          </Link>
          <Link to="/" target="_blank">
            <img src={medium} className="logo" />
          </Link>
          <Link to="/" target="_blank">
            <img src={github} className="logo" />
          </Link>
          <Link to="/" target="_blank">
            <img src={twitter} className="logo" />
          </Link>
          <Link to="/" target="_blank">
            <img src={facebook} className="logo" />
          </Link>
          <Link to="/" target="_blank">
            <img src={linkedin} className="logo" />
          </Link>
        </div>
      </div>
    </div>
    <div className="divided-end" />
    <span className="sign-12">Designed and developed by © Ismail ElAzizi</span>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            type
            cover_image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1136, maxHeight: 796) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        hello
        who
      }
    }
  }
`
