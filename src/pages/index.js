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
      <h1 className="mainH">
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
      <h1 className="mainH contactH">Got a project? Let’s talk</h1>
      <Link to="/" className="btn-get-start">
        Tell me everything
      </Link>
    </div>

    <div class="divided-23" />
    <div className="footer-container">
      <div className="w-full sm-w1-2">
        <h1 className="mainH">Email me at:</h1>
        <div>hello@ismail.com</div>
      </div>
      <div className="w-full sm-w1-2">
        <h1 className="mainH">Follow Me:</h1>

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
  query FirstQuery {
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
