import React from 'react'
import '../Styles/Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faMicrosoft } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const openInNewTab = (url) => window.open(url, '_blank')
  return (
    <div className="contact-container" id="contact">
      <div className="contact-me">
        <h1>Contact Me</h1>
        {/* <p>Get in touch.</p> */}
      </div>

      <div className="contact-icons">
        <div>
          <FontAwesomeIcon className="icon" icon={faMicrosoft} size="3x" onClick={e => window.location.href = "mailto:razaqfatiu@gmail.com"} />
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faGithub} size="3x" onClick={e => openInNewTab('https://github.com/razaqfatiu')} />
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faTwitter} size="3x" onClick={e => openInNewTab('https://twitter.com/MuhammadFatiu')} />
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faFacebook} size="3x" onClick={e => openInNewTab('https://web.facebook.com/MdFatiu')} />
        </div>
      </div>
    </div>
  )
}
export default Contact