import React from 'react'
import Email from '../components/email'
import Layout from '../components/layout'

const ContactPage = ({ data }) => (
  <Layout>
    <div className="who">
      <h1 className="hero-css"> I really like to talk to people! <br/> Say Hi!</h1>
      <p className="css-1uembe2-Paragraph">
      Thanks for stopping by! If you’re interested in getting in touch about work, consulting, speaking, or just to chat, please reach out by e-mail or <a href="https://twitter.com/smailelazizi" target="_blank">Twitter</a>.
      <Email />


      </p>
    </div>
  </Layout>
)

export default ContactPage
