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

    const slideRef = useRef();

    const back = () => {
      slideRef.current.goBack();
    }

    const next = () => {
      slideRef.current.goNext();
    }

    return (
      <div className="slide-container">
      
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

