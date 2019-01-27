import React from 'react'
import Layout from '../components/Layout'

const AboutPage = ({ data }) => (
  <Layout>
    <div className="who">
      <h1 className="mainH">Welcome</h1>
      <p>
        Ok. I know you are busy so I'll get straight to the point. I am a
        passionate UI/UX designer from Morocco. We help people create friendly
        website and application. That's it really. But if you want to know more
        you can click on some links. Or don't. It's your life.
      </p>
      <br />
      <br />
      <h1 className="mainH">How I do what I do?</h1>
      <h3>Understand the problem</h3>
      <p>
        I start by getting to know you. Once I've figured out where you want to
        go we start to draft a map and create a route for how to get there. And
        I call it strategy and we send you a bill.
      </p>
    </div>
  </Layout>
)

export default AboutPage
