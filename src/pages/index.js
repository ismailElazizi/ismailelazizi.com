import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Project from '../components/project'
import Header from '../components/header'
import typography from '../utils/typography'
import facebook from '../images/facebook.svg'
import behance from '../images/behance.svg'
import instagram from '../images/instagram.svg'
import medium from '../images/medium.svg'
import dribbble from '../images/dribbble.svg'

const IndexPage = ({ data }) => (
  <Layout>
    <div className="who">
      <h1 className="mainH">
        <span role="img">{data.site.siteMetadata.hello}</span>
        <br />
        {data.site.siteMetadata.who}
      </h1>
    </div>

    <div className="projects-wrapper">
      {data.allMarkdownRemark.edges.map(elment => (
        <Project key={elment.node.id} post={elment.node} />
      ))}
    </div>

    <div class="divided-23" />
    <div className="callAction">
      <h1 className="mainH contactH">Got A Project To Discuss?</h1>
      <div>Got a project in mind? Tell us more about it in this form:</div>
      <Link to="/" className="btn-get-start">
        Get started now
      </Link>
    </div>

    <div class="divided-23" />
    <div className="footer-container">
      <div className="w-full sm-w1-2">
        <h1 className="">Or email us at:</h1>
        <div>hello@ismail.com</div>
      </div>
      <div className="w-full sm-w1-2">
        <h1 className="">Follow Me:</h1>

        <div>
          <Link to="/">
            <img src={dribbble} className="logo" />
          </Link>
          <Link to="/">
            <img src={behance} className="logo" />
          </Link>
          <Link to="/">
            <img src={instagram} className="logo" />
          </Link>
          <Link to="/">
            <img src={medium} className="logo" />
          </Link>
          <Link to="/">
            <img src={facebook} className="logo" />
          </Link>
        </div>
      </div>
    </div>
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
