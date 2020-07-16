import React from 'react';
import { Link } from 'react-router-dom';

class DjShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchDj(this.props.match.params.djId);
  }

  render() {
    const { dj } = this.props;

    return (
      <div className="djs-index">
        <div className="djs-nav-container">
          <section className="djs-nav">
            <nav>
              <Link to="/"><img src={window.logoUrl} id="logo" /></Link>
              <ul id="links">
                <li><Link to="/djs">DJs</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li>Music</li>
                <li>Search</li>
              </ul>
            </nav>
            <h1>{dj.name}</h1>
          </section>
        </div>
      </div>
    )
  }
}

export default DjShow;