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
            <div className="news-banner">
              <h1>Pulse</h1>
              <h2>more pulse</h2>
            </div>
            {/* <h3 id="space">.</h3> */}

            <ul className="articles">
              <li>
                <div className="main-article">
                <article>
                  
                <a href="https://www.society19.com/uk/heres-what-its-like-to-go-to-an-underground-rave/">
                  <div>
                    <div id="main-image">
                      <img src={window.undergroundUrl} id="underground"/>
                    </div>
                    <div id="caption">
                        <h1 id="und-capt">Here's what it's like to go to an underground rave...</h1>
                        {/* <h6>Our man Peemo shares his experience</h6> */}
                    </div>
                  </div>
                </a>
                </article>
                </div>
              </li>

              <li>
                <div className="main-article">
                  <article>
                    <a href="https://www.jonesaroundtheworld.com/festival-accessories-gear-must-haves/">
                      <div id="main-image">
                        <img src={window.raveAccUrl} id="accessories"/>
                      </div>
                      <div id="caption2">
                          <h1 id="acc-capt">Top 44 festival accessories</h1>
                      </div>
                    </a>
                  </article>
                </div>
              </li>
            </ul>
          </section>
          <section className="beats">
            <div className="beats-banner">
              <h1>Beats</h1>
              <h2>more beats</h2>
            </div>
            <div className="beatwrap">
              <ul className="beatlist">
                <li className="song">
                  <article>
                    <img src={window.gesaffelsteinUrl} id="gesaffelstein"/>
                    <a href="">
                      Gesaffelstein - Depravity
                    </a>

                  </article>
                </li>

                <li className="song">
                  <article>
                    <img src={window.deadmau5Url} id="deadmau5"/>
                    <a href="">
                      Deadmau5 - Stereo Fidelity
                    </a>
                  </article>
                </li>

                <li className="song">
                  <article>
                    <img src={window.noisufUrl} id="noisuf"/>
                    <a href="">
                      Noisuf X - Count to Seven
                    </a>
                  </article>
                </li>

                <li className="song">
                  <article>
                    <img src={window.nomanaUrl} id="nomana"/>
                    <a href="">
                      No Mana - VVVR
                    </a>

                  </article>
                </li>

                <li className="song">
                  <article>
                    <img src={window.kayzoUrl} id="kayzo"/>
                    <a href="">
                      Kayzo - The Fire
                    </a>

                  </article>
                </li>
                <li className="song">
                  <article>
                    <img src={window.prydzUrl} id="prydz" />
                    <a href="">
                      Eric Prydz - The Matrix
                    </a>

                  </article>
                </li>
              </ul>
            </div>
          </section>
       </div>
     </div>
    )
  }
}

export default SplashPage;




