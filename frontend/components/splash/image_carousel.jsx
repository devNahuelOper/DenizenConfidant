import React, { useRef } from 'react';
import { Fade } from 'react-slideshow-image';
import { Link } from 'react-router-dom';

const ImageCarousel = () => {
  
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

    const holdStyle = {
      color: 'yellow',
      width: '960px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      position: 'absolute',
      top: '50%',
      left: '0',
      right: '0',
      zIndex: '1000'
    }

    const slideRef = useRef();

    const back = () => {
      slideRef.current.goBack();
    }

    const next = () => {
      slideRef.current.goNext();
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
        <div className="arrow-hold">
          <span id="left-arrow" onClick={back}>

          </span>
          <span id="right-arrow" onClick={next}>

          </span>
        </div>
      
        <Fade ref={slideRef} {...fadeProperties}>
          <div className="each-fade">
            <div className="image-container" id="redrave">
              <img src={fadeImages[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container" id="ethereal">
              <img src={fadeImages[1]} />
              {/* <section id="splash-caption">
              </section> */}
            </div>
            <h2></h2>
          </div>
          <div className="each-fade">
            <div className="image-container" id="ravenite">
              <img src={fadeImages[2]} />
              {/* <section id="splash-caption">
              </section> */}
            </div>
            <h2></h2>
          </div>
          <div className="each-fade">
            <div className="image-container" id="tbilisi">
              <img src={fadeImages[3]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container" id="neon">
              <img src={fadeImages[4]} />
              <section id="splash-caption">
              <h1>3 days in the Neon Jungle</h1>
              </section>
            </div>
            <h2></h2>
          </div>
          <div className="each-fade">
            <div className="image-container" id="berghain">
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

export default ImageCarousel;

