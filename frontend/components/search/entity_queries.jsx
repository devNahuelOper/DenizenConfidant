import React from "react";
import { Link } from "react-router-dom";

export class DjQueryContainer extends React.Component {
  render() {
    return (
      <div id="dj-query-container">
        {this.props.djs.map((dj) => (
          <DjQuery dj={dj} key={dj.id + 1} />
        ))}
      </div>
    );
  }
}

export class GenreQueryContainer extends React.Component {
  render() {
    return (
      <div id="genre-query-container">
        {this.props.genres.map((genre) => (
          <GenreQuery genre={genre} key={genre.id} />
        ))}
      </div>
    );
  }
}

export class EventQueryContainer extends React.Component {
  render() {
    return (
      <div id="event-query-container">
        {this.props.events.map((event) => (
          <EventQuery event={event} key={event.id} />
        ))}
      </div>
    );
  }
}

class DjQuery extends React.Component {
  render() {
    return (
      <Link to={`/djs/${this.props.dj.id}`}>
        <div className="query-item" id="dj-query-item">
          <strong>{this.props.dj.name}</strong> <small>DJ</small>
        </div>
      </Link>
    );
  }
}

class GenreQuery extends React.Component {
  render() {
    return (
      <Link to={`/genres/${this.props.genre.id}`}>
        <div className="query-item" id="genre-query-item">
          <strong>{this.props.genre.name}</strong> <small>Genre</small>
        </div>
      </Link>
    );
  }
}

class EventQuery extends React.Component {
  render() {
    return (
      <Link to={`/events/${this.props.event.id}`}>
        <div className="query-item" id="event-query-item">
          <strong>{this.props.event.name}</strong> <small>Event</small>
        </div>
      </Link>
    );
  }
}
