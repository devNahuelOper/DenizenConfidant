import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <section className="upper-foot">
            <span className="disclaimer-wrap">
              <p id="disclaimer">
                Event dates should not be used for actual planning. Though some
                may match the real event dates, most do not and they are there
                for styling purposes. <br />
                In fact, it's safe to assume that all of these events have been
                cancelled/postponed due to our current circumstances. <br />
                For up to date information, swing on over to{" "}
                <a href="https://www.residentadvisor.net/" target="_blank">
                  Resident Advisor
                </a>
                .
              </p>
            </span>
            <span className="submit-wrap">
              <Link id="submit-btn" to="/events/new">
                Submit event
              </Link>
            </span>
          </section>
          <section className="foothold">
            <span id="footer-msg">
              DC: Denizen Confidant is a clone of
              <a href="https://www.residentadvisor.net/" target="_blank">
                {" "}
                RA: Resident Advisor
              </a>
            </span>
            <ul className="footer-links">
              <li>
                <a
                  href="https://devnahueloper.github.io/"
                  target="_blank"
                  title="Portfolio Site"
                >
                  <img
                    // src="https://avatars1.githubusercontent.com/u/16979527?s=400&u=97a69e78167b0215e15d11fd3916af831bc611a0&v=4"
                    src={window.portfolioUrl}
                    alt="Portfolio Site"
                    id="headshot"
                  />
                  {/* <img src={window.headshotUrl} alt="Personal Site" id="headshot"/> */}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/devNahuelOper/DenizenConfidant-.git"
                  target="_blank"
                  title="Github"
                >
                  <img src={window.gitUrl} id="git-logo" />
                </a>
              </li>
              <br />
              <li>
                <a
                  href="https://www.linkedin.com/in/nahuel-gorosito-a2a41524/"
                  target="_blank"
                  title="Linkedin"
                >
                  <img src={window.linkUrl} id="linkedin-logo" />
                </a>
              </li>
              <br />
              <li>
                <a
                  href="https://angel.co/u/nahuel-gorosito"
                  target="_blank"
                  title="AngelList"
                >
                  <img src={window.angelUrl} id="angel-logo" />
                </a>
              </li>
              <br />
              <li>
                <a
                  href="https://www.facebook.com/nahuel.gorosito.5/"
                  target="_blank"
                  title="The Facebook"
                >
                  <img src={window.fbUrl} id="fb-logo" />
                </a>
                {/* <small>Facebook</small> */}
              </li>
            </ul>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;
