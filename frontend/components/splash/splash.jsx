import React from 'react';
// import SplashCalendar from './splash_calendar';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }



  render() {
    let yesterday = new Date(this.state.date);
    yesterday.setDate(yesterday.getDate() - 1);

    let yesterdayMinus = new Date(yesterday);
    yesterdayMinus.setDate(yesterdayMinus.getDate() - 1);

    let tomorrow = new Date(this.state.date);
    tomorrow.setDate(tomorrow.getDate() + 1);

    let tomorrowPlus = new Date(tomorrow);
    tomorrowPlus.setDate(tomorrowPlus.getDate() + 1);


    let weekday = this.state.date.toDateString().split(' ')[0];
    let today = this.state.date.getDate();
    return (
     <div>
       <div className="splash-header-container">
         
         {/* <nav id="splash-navbar">
            <img src="assets/logo.png" id="logo"/>
         </nav> */}
         
          {/* <img src="assets/logo-white.png" id="logo" /> */}
          <img src={window.logoUrl} id="logo"/>
        {/* <img src={window.berlinUrl} id="berlin-rave"/> */}
       </div>
       <div className="splash-content-container">
          <nav className="main-banner">
            <h1 className="denizen-confidant">Denizen Confidant</h1>
            {/* <SplashCalendar /> */}
            <ul className="days">
              <li className="day">{yesterdayMinus.toDateString().split(' ')[0]}
                <h1>{yesterdayMinus.getDate()}</h1>
              </li>
              <li className="day">{yesterday.toDateString().split(' ')[0]}
                <h1>{yesterday.getDate()}</h1>
              </li>
              <li className="day">{weekday}  
                <h1>{today}</h1>
              </li>
              <li className="day">{tomorrow.toDateString().split(' ')[0]}
                <h1>{tomorrow.getDate()}</h1>
              </li>
              <li className="day">{tomorrowPlus.toDateString().split(' ')[0]}
                <h1>{tomorrowPlus.getDate()}</h1>
              </li>
            </ul>
          </nav> 
       </div>
     </div>
    )
  }
}

export default SplashPage;




