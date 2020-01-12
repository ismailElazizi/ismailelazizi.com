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
          <a href="https://www.dribbble.com/ismailelazizi" target="_blank" rel="noopener noreferrer">
            <img src={dribbble} className="css-icons-sttl" alt="dribbble"/>
          </a>
          <a href="https://www.behance.net/ismailelazizi" target="_blank" rel="noopener noreferrer">
            <img src={behance} className="css-icons-sttl" alt="behance"/>
          </a>
          <a href="https://www.instagram.com/ismail_elazizi" target="_blank" rel="noopener noreferrer">
            <img src={instagram} className="css-icons-sttl" alt="instagram" />
          </a>
          <a href="https://www.medium.com/@ismailelazizi" target="_blank" rel="noopener noreferrer">
            <img src={medium} className="css-icons-sttl" alt="medium" />
          </a>
          <a href="https://www.github.com/ismailElazizi" target="_blank"  rel="noopener noreferrer">
            <img src={github} className="css-icons-sttl" alt="github"/>
          </a>
          <a href="https://www.twitter.com/smailelazizi" target="_blank" rel="noopener noreferrer">
            <img src={twitter} className="css-icons-sttl" alt="twitter"/>
          </a>
          <a href="https://www.facebook.com/smailElazizi" target="_blank" rel="noopener noreferrer">
            <img src={facebook} className="css-icons-sttl" alt="facebook"/>
          </a>
          <a
            href="https://www.linkedin.com/in/ismail-el-azizi/"
            target="_blank"  rel="noopener noreferrer"
          >
            <img src={linkedin} className="css-icons-sttl" alt="linkedin"/>
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
