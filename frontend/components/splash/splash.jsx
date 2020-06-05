import React from 'react';
// import { Route } from 'react-router-dom';

class SplashPage extends React.Component {
  render() {
    return (
     <div>
       <div className="splash-header-container">
        <img src={window.berlinUrl} id="berlin-rave"/>
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

{/* <nav className="denizen-confidant">
        <h1>Denizen C👽nfidant</h1>
    </nav> */}
