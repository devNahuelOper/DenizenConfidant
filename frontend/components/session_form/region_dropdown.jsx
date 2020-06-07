import React from "react";
// import { Link } from 'react-router-dom';


class RegionDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default_region : 'Select a country:',
      drop: false
    }
    this.clicker = this.clicker.bind(this);
    this.leave = this.leave.bind(this);
  }

  clicker(e) {
    e.preventDefault();
    this.setState({ "drop": true });
  }

  leave(e) {
    e.preventDefault();
    this.setState({ "drop": false });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>Default region/
        <br/>
        <button onChange={this.update('default_region')} onFocus={this.clicker} onBlur={this.leave} className="region-dropdown">
          Select a country:
         <ul className={this.state.drop ? "region-reveal" : "region-hide"}>
            <li>Select a country:</li>
            <li>Argentina</li>
            <li>Brazil</li>
            <li>Canada</li>
            <li>France</li>
            <li>Germany</li>
            <li>Italy</li>
            <li>Netherlands</li>
            <li>Spain</li>
            <li>United Kingdom</li>
            <li>United States</li>
            <li>Vatican City</li>
          </ul>
        </button>
      </div>
    )
  }
}

export default RegionDropdown;