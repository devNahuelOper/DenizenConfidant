import React from 'react';
import ImageCarousel from './image_carousel';
// import SplashCalendar from './splash_calendar';
import { Link } from 'react-router-dom';

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
          <img src={window.logoUrl} id="logo"/>
          <ul id="links">
            <li>DJs</li>
            <li><Link to="/events">Events</Link></li>
            <li>Music</li>
            <li>Search</li>
          </ul>
          
          <ImageCarousel /> 
          {/* <section id="splash-caption">
            <h1>Club Greyscale</h1>
            <h1>Rumpin' thumpin' in... <br/> the Warehouse District</h1>
          </section> */}
       </div>
       <div className="splash-content-container">
          <nav className="main-banner">
            <h1 className="denizen-confidant">Denizen Confidant</h1>
        
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

          <section className="content">
            <h2>Pulse</h2>
            <h3 id="space">.</h3>
            <ul className="articles">
              <li>
                <a href="https://www.society19.com/uk/heres-what-its-like-to-go-to-an-underground-rave/">
                  <h1 id="und-capt">Here's what it's like... <br/> to 
                  go to an underground rave.</h1>
                <img src={window.undergroundUrl} id="underground"/></a>
              </li>
              <li>
                <a href="https://www.jonesaroundtheworld.com/festival-accessories-gear-must-haves/">
                <img src={window.raveAccUrl} id="accessories"/>
                <h1 id="acc-capt">Top 44 festival accessories, <br/> gear and must-haves</h1></a>
              </li>
            </ul>
          </section>
       </div>
     </div>
    )
  }
}

export default SplashPage;




