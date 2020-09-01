import React from 'react';
import ImageCarousel from './image_carousel';
import { Link } from 'react-router-dom';
import {
  toggleSearch
} from '../../util/search_util';
import NewsIndex from '../news/news_index';

// let gesaffId, deamauId, noisufId, nomanaId, kayzoId, eprydzId;

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      djs: []
    }
  }

  componentDidMount() {
    this.props.fetchDjs().then(djs => this.setState({djs: Object.values(djs.djs)}));
    // this.props.fetchAllNews();
    toggleSearch();
  }

  // componentDidUpdate() {
  //   gesaffId = this.props.djs.find(dj => dj.name === 'Gesaffelstein').id;
  //   deamauId = this.props.djs.find(dj => dj.name === 'Deadmau5').id;
  //   noisufId = this.props.djs.find(dj => dj.name === 'Noisuf X').id;
  //   nomanaId = this.props.djs.find(dj => dj.name === 'No Mana').id;
  //   kayzoId = this.props.djs.find(dj => dj.name === 'Kayzo').id;
  //   eprydzId = this.props.djs.find(dj => dj.name === 'Eric Prydz').id;
  // }



  // useQuery() {
  //   return new URLSearchParams(useLocation().search);
  // }

  render() {
    const { djs, news } = this.props;

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
        <section id="navbar">
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
              <h2></h2>
            </div>
          
            <NewsIndex news={news}/>
          </section>
          {/* {console.log(gesaffId, deamauId, noisufId, nomanaId, kayzoId, eprydzId)} */}
     
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
                    <Link id="gesaffelstein-link" to="/djs/739">Gesaffelstein - Depravity</Link>
                    {/* <Link id="gesaffelstein-link" to={`/djs/${gesaffId}`}>Gesaffelstein - Depravity</Link> */}
                    {/* <Link to={`/djs/${djs.find(dj => dj.name === 'Gesaffelstein')}`}>Gesaffelstein - Depravity</Link> */}
                    <audio id="depravity" src="depravity.mp3" controls></audio>
                      
                  </article>
                </li>

                <li className="song">
                  <article>
                    <img src={window.deadmau5Url} id="deadmau5"/>
                   
                    {/* <Link id="deadmau5-link" to={`/djs/${deamauId}`}>Deadmau5 - S<small>peed</small>V<small>iolence</small>M<small>omentum</small></Link> */}
                    <Link id="deadmau5-link" to="/djs/725">Deadmau5 - S<small>peed</small>V<small>iolence</small>M<small>omentum</small></Link>
                    <audio id="speed" src="speed.mp3" controls></audio>
                  </article>
                </li>

                <li className="song">
                  <article>
                    <img src={window.noisufUrl} id="noisuf"/>    
                    {/* <Link id="noisuf-link" to={`/djs/${noisufId}`}>Noisuf-X - Count to Seven</Link> */}
                    <Link id="noisuf-link" to="/djs/768">Noisuf-X - Count to Seven</Link>
                    <audio id="cseven" src="cseven.mp3" controls></audio>
                  </article>
                </li>

                <li className="song">
                  <article>
                    <img src={window.nomanaUrl} id="nomana"/>
                    {/* <Link id="nomana-link" to={`/djs/${nomanaId}`}>No Mana - Other Side</Link> */}
                    <Link id="nomana-link" to="/djs/769">No Mana - Other Side</Link>
                    <audio id="otherside" src="otherside.mp3" controls></audio>
                  </article>
                </li>

                <li className="song">
                  <article>
                    <img src={window.kayzoUrl} id="kayzo"/>
                    {/* <Link id="kayzo-link" to={`/djs/${kayzoId}`}>Kayzo - The Fire</Link> */}
                    <Link id="kayzo-link" to="/djs/752">Kayzo - The Fire</Link>
                    <audio id="fire" src="fire.mp3" controls></audio>
                  </article>
                </li>
                <li className="song">
                  <article>
                    <img src={window.prydzUrl} id="prydz" />
                    {/* <Link id="prydz-link" to={`/djs/${eprydzId}`}>Eric Prydz - The Matrix</Link> */}
                    <Link id="prydz-link" to="/djs/730">Eric Prydz - The Matrix</Link>
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




