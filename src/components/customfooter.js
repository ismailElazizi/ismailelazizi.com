import React from 'react'
import behance from '../images/behance.svg'
import dribbble from '../images/dribbble.svg'
import facebook from '../images/facebook.svg'
import github from '../images/github.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import medium from '../images/medium.svg'
import twitter from '../images/twitter.svg'
import './layout.css'

const Customfooter = () => (
  <footer>
    <div className="divided-end" />
    <div className="footer-container">
      <div className="w-full sm-w1-2">
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
          <a
            href="https://www.linkedin.com/in/ismail-el-azizi/"
            target="_blank"
          >
            <img src={linkedin} className="css-icons-sttl" />
          </a>
        </div>
      </div>
      <div className="w-full sm-w1-2 css-copyright">
        <span className="sign-12">
          Designed and developed by © Ismail ElAzizi
        </span>
      </div>
    </div>
  </footer>
)

export default Customfooter
