import React from "react";
import { Link } from "react-router-dom";
import { TitleComponent } from "../title_component.jsx";
import SubnavToggle from "../subnav/subnav";
import NavBar from "../navbar/navbar";
import { formatDateShowStyle } from "../../util/date_util";
import { toggleSearch } from "../../util/search_util";

class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    toggleSearch();
  }

  render() {
    if (!this.props.event) {
      return null;
    }
    const { event } = this.props;
    const lineUp = event.headliners.split(",").map((dj) => dj.trim());
    return (
      <React.Fragment>
        <TitleComponent title={`DC: ${event.name}`} />
        <div className="events-index">
          <header>
            <div className="eventshow-nav-container">
              <NavBar
                title={event.name}
                hasLinks={true}
                entity="Event"
                path="/events"
                label="Events"
              />
            </div>
          </header>
          <div className="subnav-container">
            <section id="events-subnav">
              <ul>
                <li>
                  <Link to="/events">All</Link>
                </li>
                <li>
                  <Link className="form" to="#">
                    {event.name}
                  </Link>
                </li>
                <li>
                  <Link to="/events/new">Submit an event</Link>
                </li>
              </ul>
            </section>
            <SubnavToggle
              title={event.name}
              labels={["All", "Submit an event"]}
              paths={["/events", "/events/new"]}
            />
          </div>
          <br />
          <div className="subheader-container">
            <section className="eventshow-subheader">
              <ul className="details">
                <li id="event-date">
                  Date/
                  <h4>{formatDateShowStyle(event.date).split(" ")[0]}</h4>
                  <h3>
                    {formatDateShowStyle(event.date)
                      .split(" ")
                      .slice(1)
                      .join(" ")}
                  </h3>
                </li>
                <li>
                  Venue/
                  <h3>{event.venue}</h3>
                  <h4>{event.location}</h4>
                </li>
                <li>
                  Cost/
                  <h4>{event.cost}</h4>
                </li>
              </ul>
            </section>
          </div>
          <div className="main-container">
            <section className="eventshow-main">
              <span id="headliners">
                <small>Line-up/</small> <br />
                {lineUp.map((dj, i) =>
                  Object.keys(event.get_djs).includes(dj.toLowerCase()) ? (
                    <article key={i}>
                      <Link to={`/djs/${event.get_djs[dj.toLowerCase()]}`}>
                        <strong>{dj}</strong>
                      </Link>
                    </article>
                  ) : (
                    <article key={i}>
                      <b>{dj}</b>
                    </article>
                  )
                )}
              </span>
              <br />
              <p id="description">{event.description}</p>
              <br />
              <img
                id="event-image"
                src={event.photoUrl || window.defaultUrl}
                alt={`${event.name} Photo`}
              />
              {/* <img id="event-image" src={`https://denizen-confidant-dev.s3.amazonaws.com/${event.name.toLowerCase().split(' ').join('')}.png`}/> */}
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EventShow;
