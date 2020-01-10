import React from 'react'
import Layout from '../components/layout'
import Portrait from '../images/portrait.png'

const AboutPage = ({ data }) => (
  <Layout>
    <div className="who">
      <p className="css-1uembe2-Paragraph">
        <h1 className="big-css">So, You Wanna Know About me!</h1>
        <img src={Portrait} />
      </p>

      <p className="css-1uembe2-Paragraph">
        Ok. I know you are busy so I'll get straight to the point. I am Ismail,
        a UX/UI designer from Morocco. I help people turn ideas into
        great products.  I am also a Figma ambasador, I help others have an easy journey in design.
        since you are here, say Hi! 
      </p>
    </div>
  </Layout>
)

export default AboutPage
