import React from "react";
import ImageCarousel from "./image_carousel";
import { fiveDaySpan } from "../../util/date_util";
import NewsIndex from "../news/news_index";
import NavBar from "../navbar/navbar";
import { secretHover } from "../../util/splash_util";
import Playlist from "./playlist";
import FixedDjs from "./fixed_djs";

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    const { djs, news, randDjs } = this.props;
    let dates = fiveDaySpan(this.state.date);

    secretHover();
    return (
      <>
        <header>
          <div className="splash-header-container">
            <NavBar title="" entity="splash" />
            <ImageCarousel />
          </div>
        </header>
        <div className="splash-content-container">
          <nav className="main-banner">
            <div className="banner-hold">
              <h1 className="denizen-confidant">Denizen Confidant</h1>
              <ul className="days">
                {dates.map((date, i) => (
                  <li className="day" key={i}>
                    {date[0]}
                    <h1>{date[1]}</h1>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <section className="content">
            <div className="news-banner">
              <h1>Pulse</h1>
              <h2></h2>
            </div>
            <NewsIndex news={news} />
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
            <FixedDjs djs={djs} />
            <Playlist djs={randDjs} />
          </section>
        </div>
      </>
    );
  }
}

export default SplashPage;
