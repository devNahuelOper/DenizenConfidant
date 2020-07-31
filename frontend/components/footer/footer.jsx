import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <footer>
      <div className="footer">
       <div className="foothold">
          <span id="footer-msg">
            DC: Denizen Confidant is a clone of
          <a href="https://www.residentadvisor.net/" target="_blank"> RA: Resident Advisor</a>
          </span>
        <ul className="footer-links">
          <li>
            <a href="https://devnahueloper.github.io/" target="_blank">
              <img src="https://avatars1.githubusercontent.com/u/16979527?s=400&u=97a69e78167b0215e15d11fd3916af831bc611a0&v=4" alt="Personal Site" id="headshot"/>
            </a>
            <small>Portfolio Site</small>
          </li>
          <li>
            <a href="https://github.com/devNahuelOper/DenizenConfidant-.git" target="_blank">
              <img src={window.gitUrl} id="git-logo"/>
            </a>
            <small>Github</small>
          </li>
          <br/>
          <li>
            <a href="https://www.linkedin.com/in/nahuel-gorosito-a2a41524/" target="_blank">
              <img src={window.linkUrl} id="link-logo"/>
            </a>
              <small>Linkedin</small>
          </li>
          <br />
            <li>
                <a href="https://angel.co/u/nahuel-gorosito" target="_blank">
                <img src={window.angelUrl} id="angel-logo" />
              </a>
                <small>Angellist</small>
            </li>
              <br />
          <li>
            <a href="https://www.facebook.com/nahuel.gorosito.5/" target="_blank">
              <img src={window.fbUrl} id="fb-logo"/>
            </a>
                <small>Facebook</small>
          </li>
        </ul>
        
        </div>
      </div>
      </footer>
    )
  }
}

export default Footer;