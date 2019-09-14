import React from 'react'
import Layout from '../components/layout'

const AboutPage = ({ data }) => (
  <Layout>
    <div className="who">
      <h1 className="css-1uembe2-title">Welcome</h1>
      <p className="css-1uembe2-Paragraph">
        Ok. I know you are busy so I'll get straight to the point. I am a
        passionate UI/UX designer from Morocco. We help people create friendly
        website and application. That's it really. But if you want to know more
        you can click on some links. Or don't. It's your life.
      </p>
      <br />
      <h1 className="css-1uembe2-title">How I do what I do?</h1>
      <p className="css-1uembe2-Paragraph">
        I start by getting to know you. Once I've figured out where you want to
        go we start to draft a map and create a route for how to get there. And
        I call it strategy and we send you a bill.
      </p>
    </div>
  </Layout>
)

export default AboutPage
