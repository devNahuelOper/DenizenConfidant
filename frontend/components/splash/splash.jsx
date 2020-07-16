import React from 'react';
import ImageCarousel from './image_carousel';
import { Link } from 'react-router-dom';


class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  // play() {
  //   let audio = new Audio('x-beats-hck-demo.mp3');
  //   audio.play();
  // }
  



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
        <nav id="navbar">
          <img src={window.logoUrl} id="logo" />
          <ul id="links">
              <li><Link to="/djs">DJs</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li>Music</li>
            <li>Search</li>
          </ul>
        </nav>
          <ImageCarousel /> 
         
       </div>
       <div className="splash-content-container">
          <nav className="main-banner">
            <div className="banner-hold">
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
            </div>
          </nav>

          <section className="content">
            <div className="news-banner">
              <h1>Pulse</h1>
              <h2>more pulse</h2>
            </div>
           

            <ul className="articles">
              <li>
                <div className="main-article">
                <article>
                  
                    <a href="https://www.society19.com/uk/heres-what-its-like-to-go-to-an-underground-rave/" target="_blank">
                  <div>
                    <div id="main-image">
                      <img src={window.undergroundUrl} id="underground"/>
                    </div>
                    <div id="caption">
                        <h1 id="und-capt">Here's what it's like to go to an underground rave...</h1>
                        
                    </div>
                  </div>
                </a>
                </article>
                </div>
              </li>

              <li>
                <div className="main-article">
                  <article>
                    <a href="https://www.jonesaroundtheworld.com/festival-accessories-gear-must-haves/" target="_blank">
                      <div id="main-image">
                        <img src={window.raveAccUrl} id="accessories"/>
                      </div>
                      </a>
                      <div id="caption2">
                      <a href="https://www.jonesaroundtheworld.com/festival-accessories-gear-must-haves/" target="_blank">
                          <h1 id="acc-capt">Top 44 festival accessories</h1>
                          </a>
                      </div>
                    
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
                    <a href="https://www.youtube.com/watch?v=3boEAV4uUUU" target="_blank">
                      Gesaffelstein - Depravity
                    </a>
                    <audio id="depravity" src="depravity.mp3" controls></audio>
                      
                  </article>
                </li>

                <li className="song">
                  <article>
                    <img src={window.deadmau5Url} id="deadmau5"/>
                    <a href="https://www.youtube.com/watch?v=jQhkNqELyLc" target="_blank">
                      Deadmau5 - S<small>peed</small>V<small>iolence</small>M<small>omentum</small> 
                    </a>
                    <audio id="speed" src="speed.mp3" controls></audio>
                  </article>
                </li>

                <li className="song">
                  <article>
                    <img src={window.noisufUrl} id="noisuf"/>
                    <a href="https://www.youtube.com/watch?v=lmxH1L7uubQ" target="_blank">
                      Noisuf X - Count to Seven
                    </a>
                    <audio id="cseven" src="cseven.mp3" controls></audio>
                  </article>
                </li>

                <li className="song">
                  <article>
                    <img src={window.nomanaUrl} id="nomana"/>
                    <a href="https://www.youtube.com/watch?v=nCJ8WJGStl4" target="_blank">
                      No Mana - Other Side
                    </a>
                    <audio id="otherside" src="otherside.mp3" controls></audio>
                  </article>
                </li>

                <li className="song">
                  <article>
                    <img src={window.kayzoUrl} id="kayzo"/>
                    <a href="https://www.youtube.com/watch?v=-M8xBwVpET8" target="_blank">
                      Kayzo - The Fire
                    </a>
                    <audio id="fire" src="fire.mp3" controls></audio>
                  </article>
                </li>
                <li className="song">
                  <article>
                    <img src={window.prydzUrl} id="prydz" />
                    <a href="https://www.youtube.com/watch?v=jMro9nsr1OI" target="_blank">
                      Eric Prydz - The Matrix
                    </a>
                    <audio id="matrix" src="matrix.mp3" controls></audio>
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




