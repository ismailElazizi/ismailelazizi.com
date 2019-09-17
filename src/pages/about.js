import React from 'react'
import Layout from '../components/layout'
import Portrait from '../images/portrait.png'


const AboutPage = ({ data }) => (
  <Layout>
    <div className="who">

      
      <p className="css-1uembe2-Paragraph">
      <h1 className="big-css">So, You Wanna Know About me!</h1>
        <img src={Portrait} /></p>
      
      <p className="css-1uembe2-Paragraph">
        Ok. I know you are busy so I'll get straight to the point. I am a
        passionate UI/UX designer from Morocco. I help people turn ideas into great product. 
      </p>
      <br />
      <h1 className="css-1uembe2-title">How I do what I do?</h1>
      <p className="css-1uembe2-Paragraph">
        I start by getting to know you. Once I've figured out where you want to
        go we start to draft a map and create a route for how to get there. And
        I call it strategy.
      </p>
    </div>
  </Layout>
)

export default AboutPage
