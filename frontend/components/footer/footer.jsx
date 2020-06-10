import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <ul className="footer-links">
          <li>
            <a href="https://github.com/devNahuelOper/DenizenConfidant-.git">
              <img src={window.gitUrl} id="git-logo"/>
            </a>
          </li>
          <br/>
          <li>
            <a href="https://www.linkedin.com/in/nahuel-gorosito-a2a41524/">
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
      </div>
    )
  }
}

export default Footer;