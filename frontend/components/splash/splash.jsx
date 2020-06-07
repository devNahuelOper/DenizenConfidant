import React from 'react';
// import { Route } from 'react-router-dom';

class SplashPage extends React.Component {
  render() {
    return (
     <div>
       <div className="splash-header-container">
         
         {/* <nav id="splash-navbar">
            <img src="assets/logo.png" id="logo"/>
         </nav> */}
          <img src="assets/logo-white.png" id="logo" />
        {/* <img src={window.berlinUrl} id="berlin-rave"/> */}
       </div>
       <div className="splash-content-container">
          <nav className="main-banner">
            <h1>Denizen Confidant</h1>
          </nav> 
       </div>
     </div>
    )
  }
}

export default SplashPage;




