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
import share from '../images/share.svg'
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
        <span className="css-1uembe2-Paragraph" >hello@ismail.com</span>
        <img src={share} className="css-share-mail" />
      </div>
      <div className="w-full sm-w1-2">
        <h4 className="subtoto-depara">Follow Me:</h4>

        <div className="social_links">
          <a href="https://www.dribbble.com/ismailelazizi" target="_blank">
            <img src={dribbble} className="css-icons-sttl" />
          </a>
          <a href="https://www.behance.net/ismailelazizi" target="_blank">
            <img src={behance} className="css-icons-sttl" />
          </a>
          <a href="https://www.instagram.com/ismail_elazizi" target="_blank">
            <img src={instagram} className="css-icons-sttl" />
            </a>
          <a href="https://www.medium.com/@ismailelazizi" target="_blank">
            <img src={medium} className="css-icons-sttl" />
            </a>
          <a href="https://www.github.com/ismailElazizi" target="_blank">
            <img src={github} className="css-icons-sttl" />
            </a>
          <a href="https://www.twitter.com/smailelazizi" target="_blank">
            <img src={twitter} className="css-icons-sttl" />
            </a>
          <a href="https://www.facebook.com/smailElazizi" target="_blank">
            <img src={facebook} className="css-icons-sttl" />
            </a>
          <a href="https://www.linkedin.com/in/ismail-el-azizi/" target="_blank">
            <img src={linkedin} className="css-icons-sttl" />
            </a>
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
