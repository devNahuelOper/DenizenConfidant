import React from 'react';
import ImageCarousel from './image_carousel';
import { Link } from 'react-router-dom';
import { toggleSearch } from '../../util/search_util';
import { fiveDaySpan } from '../../util/date_util';
import NewsIndex from '../news/news_index';


class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    this.props.fetchDjs();
    toggleSearch();
  }

  render() {
    const { djs, news } = this.props;
    let dates = fiveDaySpan(this.state.date);

    $('.denizen-confidant').on('mouseover', () => {
      $('.denizen-confidant').attr('id', `bg${Math.floor(Math.random() * 10)}`);
    }).on('mouseout', () => {
      $('.denizen-confidant').attr('id', 'bgnone');
    });
    return (
     <> 
      <header>
       <div className="splash-header-container">
        <section className="navbar" id="navbar">
          <nav>
          <img src={window.logoUrl} id="logo" />
          <ul id="links">
            <li><Link to="/djs">DJs</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/genres">Music</Link></li>
            <li><button id="search">Search</button></li>
          </ul>
          </nav>
        </section>
          <ImageCarousel /> 
       </div>
      </header>
       <div className="splash-content-container">
          <nav className="main-banner">
            <div className="banner-hold">
            <h1 className="denizen-confidant">Denizen Confidant</h1>
            <ul className="days">
              {dates.map((date, i) => 
                <li className="day" key={i}>{date[0]}
                  <h1>{date[1]}</h1>
                </li>
              )}
            </ul>
            </div>
          </nav>
          <section className="content">
            <div className="news-banner">
              <h1>Pulse</h1>
              <h2></h2>
            </div>
            <NewsIndex news={news}/>
          </section>
          <section className="beats">
            <nav className="main-banner yellow-banner">
              <div className="banner-hold">
                <h1 id="splash-djs">DJs</h1>
              </div>
            </nav>
            <div className="beats-banner">
              <h1>Beats</h1>
              <h2></h2>
            </div>
            <div className="beatwrap">
              <ul className="beatlist">
                <li className="song">
                  <article>
                    <img src={window.gesaffelsteinUrl} id="gesaffelstein"/>
                    <Link id="gesaffelstein-link" to={`/djs/${djs["Gesaffelstein"]}`} title="Gesaffelstein">Gesaffelstein - Depravity</Link>
                    <audio id="depravity" src="depravity.mp3" controls></audio>
                  </article>
                </li>
                <li className="song">
                  <article>
                    <img src={window.deadmau5Url} id="deadmau5"/>               
                    <Link id="deadmau5-link" to={`/djs/${djs["Deadmau5"]}`} title="Deadmau5">Deadmau5 - S<small>peed</small>V<small>iolence</small>M<small>omentum</small></Link>
                    <audio id="speed" src="speed.mp3" controls></audio>
                  </article>
                </li>
                <li className="song">
                  <article>
                    <img src={window.noisufUrl} id="noisuf"/>    
                    <Link id="noisuf-link" to={`/djs/${djs["Noisuf-X"]}`} title="Noisuf-X">Noisuf-X - Count to Seven</Link>
                    <audio id="cseven" src="cseven.mp3" controls></audio>
                  </article>
                </li>
                <li className="song">
                  <article>
                    <img src={window.nomanaUrl} id="nomana"/>
                    <Link id="nomana-link" to={`/djs/${djs["No Mana"]}`} title="No Mana">No Mana - Other Side</Link>
                    <audio id="otherside" src="otherside.mp3" controls></audio>
                  </article>
                </li>
                <li className="song">
                  <article>
                    <img src={window.kayzoUrl} id="kayzo"/>                  
                    <Link id="kayzo-link" to={`/djs/${djs["Kayzo"]}`} title="Kayzo">Kayzo - The Fire</Link>
                    <audio id="fire" src="fire.mp3" controls></audio>
                  </article>
                </li>
                <li className="song">
                  <article>
                    <img src={window.prydzUrl} id="prydz" />
                    <Link id="prydz-link" to={`/djs/${djs["Eric Prydz"]}`} title="Eric Prydz">Eric Prydz - The Matrix</Link>
                    <audio id="matrix" src="matrix.mp3" controls></audio>
                  </article>
                </li>
              </ul>
            </div>
          </section>
       </div>
     </>
    )
  }
}

export default SplashPage;




