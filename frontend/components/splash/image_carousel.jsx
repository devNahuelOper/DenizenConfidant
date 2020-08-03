import React from 'react';
import { Fade } from 'react-slideshow-image';
import { Link } from 'react-router-dom';

class ImageCarousel extends React.Component {
  render() {
    const fadeImages = [
      window.redRaveUrl,
      window.etherealUrl,
      window.raveNiteUrl,
      window.tbilisiRaveUrl,
      window.transmissionUrl,
      window.berghainUrl,
    ];
    const fadeProperties = {
      duration: 5000,
      transitionDuration: 1500,
      pauseOnHover: true,
      infinite: true,
      indicators: true,
      arrows: true,
    }

    return (
      <div className="slide-container">
        {/* <section id="navbar">
          <nav>
            <img src={window.logoUrl} id="logo" />
            <ul id="links">
              <li><Link to="/djs">DJs</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/genres">Music</Link></li>
              <li><button id="search">Search</button></li>
            </ul>
          </nav>
        </section> */}
        <Fade {...fadeProperties}>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} />
              {/* <section id="splash-caption">
              </section> */}
            </div>
            <h2></h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} />
              {/* <section id="splash-caption">
              </section> */}
            </div>
            <h2></h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[3]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[4]} />
              <section id="splash-caption">
              <h1>3 days in the Neon Jungle</h1>
              </section>
            </div>
            <h2></h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[5]} />
              <section id="splash-caption">
                <h1>Think you're getting in to Berghain?</h1>
                <h1>...think again.</h1>
              </section>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ImageCarousel;

