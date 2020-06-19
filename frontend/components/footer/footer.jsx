import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <ul className="footer-links">
          <li>
            <a href="https://github.com/devNahuelOper/DenizenConfidant-.git" target="_blank">
              <img src={window.gitUrl} id="git-logo"/>
            </a>
          </li>
          <br/>
          <li>
            <a href="https://www.linkedin.com/in/nahuel-gorosito-a2a41524/" target="_blank">
              <img src={window.linkUrl} id="link-logo"/>
            </a>
          </li>
          <br />
          <li>
            <a href="https://www.facebook.com/nahuel.gorosito.5/">
              <img src={window.fbUrl} id="fb-logo"/>
            </a>
          </li>
        </ul>
        <div>
          DC: Denizen Confidant is a clone of
          <a href="https://www.residentadvisor.net/" target="_blank"> RA: Resident Advisor</a>
        </div>
      </div>
    )
  }
}

export default Footer;