import React from 'react';

class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  render() {
    return (
      <div>
        <div id="nav-container">
          <section id="navbar">
            <nav>
              <Link to="/"><img src={window.logoUrl} id="logo" /></Link>
              <ul id="links">
                <li><Link to="/djs">DJs</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/genres">Music</Link></li>
                <li><button id="search">Search</button></li>
              </ul>
            </nav>
            <h1>Submit an event</h1>
          </section>
        </div>
        <div className="event-form-container">
          <div className="form-wrap">
            <form onSubmit={this.handleSubmit}>
              <label>Event title/ <br/>
                <input 
                  type="text"
                  value={this.state.name}
                  onChange={this.update('name')}/>
              </label>
            </form>
          </div>
        </div>

      </div>
    )
  }
}

export default CreateEventForm;
