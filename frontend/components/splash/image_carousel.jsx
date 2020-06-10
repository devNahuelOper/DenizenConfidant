import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import SimpleImageSlider from 'react-simple-image-slider';
import { Fade } from 'react-slideshow-image';




class ImageCarousel extends React.Component {


  render() {
  // const images = [
  //   {url: "assets/berlin-rave.png"},
  //   {url: "assets/rave.jpg"},
  //   {url: "assets/rave2.png"}
  // ]
    const fadeImages = [
      window.redRaveUrl,
      window.raveNiteUrl,
      window.transmissionUrl,
      window.tbilisiRaveUrl,
      window.etherealUrl,
      window.berghainUrl,
      // window.berlinUrl,
      // window.edcUrl
      // 'assets/berlin-rave.png',
      // 'assets/rave.jpg',
      // 'assets/rave2.png'
    ];

    const fadeProperties = {
      duration: 15000,
      transitionDuration: 500,
      pauseOnHover: true,
      infinite: true,
      indicators: true,
      arrows: true,
      // onChange: (oldIndex, newIndex) => {
      //   console.log(`fade transition from ${oldIndex} to ${newIndex}`);
      // }
    }

    return (
      // <div>
      //   <SimpleImageSlider
      //     width={896}
      //     height={304}
      //     images={images}
      //     navStyle={2}
      //     useGPURender={true}
      //   />
      // </div>
      <div className="slide-container">
        <Fade {...fadeProperties}>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[0]} />
              {/* <section id="splash-caption">
                <h1>Club Greyscale</h1>
                <h1>Rumpin' thumpin' in... <br /> the Warehouse District</h1>
              </section> */}
            </div>
            {/* <h2>First Slide</h2> */}
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} />
              <section id="neon-caption">
                {/* <h1>Inside the Neon Jungle</h1> */}
                {/* <h1>Rumpin' thumpin' in... <br /> the Warehouse District</h1> */}
              </section>
            </div>
            <h2></h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} />
              {/* <section id="splash-caption">
                <h1>Club Greyscale</h1>
                <h1>Rumpin' thumpin' in... <br /> the Warehouse District</h1>
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
              {/* <h2>😍🤩🥳</h2> */}
            </div>
            <h2></h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[5]} />
            </div>
          </div>
        </Fade>
      </div>
     
    );
  }
}




export default ImageCarousel;

