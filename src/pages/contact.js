import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Project from '../components/PostLink'
import Header from '../components/Header'

const ContactPage = ({ data }) => (
  <Layout>
    <div className="who">
      <h1 className="mainH">Contact</h1>
      <p>
        Ok. I know you are busy so I'll get straight to the point. I am a
        passionate UI/UX designer from Morocco. We help people create friendly
        website and application. That's it really. But if you want to know more
        you can click on some links. Or don't. It's your life.
      </p>
    </div>
  </Layout>
)

export default ContactPage
