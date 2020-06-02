import React from 'react';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <h1>Your account</h1>
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <br />
          {this.renderErrors()}
          <div className="signup-form">
            <br />
            <label>Username
              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input" />
            </label>
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <label>First Name
              <input
                type="text"
                value={this.state.firstName}
                onChange={this.update('firstName')}
                className="signup-input" />
            </label>
            <br/>
            <label>Last Name
              <input
                type="text"
                value={this.state.lastName}
                onChange={this.update('lastName')}
                className="signup-input" />
            </label>
            <label>Default region/
            <select id="default-region" name="countries" defaultValue="Select a country">
                <option value="Select a country" disabled>Select a country:</option>
                <option value="argentina">Argentina</option>
                <option value="australia">Australia</option>
                <option value="brazil">Brazil</option>
                <option value="canada">Canada</option>
                <option value="france">France</option>
                <option value="germany">Germany</option>
                <option value="italy">Italy</option>
                <option value="netherlands">Netherlands</option>
                <option value="spain">Spain</option>
                <option value="uk">UK</option>
                <option value="usa">USA</option>
                <option value="vatican city">Vatican City</option>
              </select>
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    )
  }
}

export default SignupForm;