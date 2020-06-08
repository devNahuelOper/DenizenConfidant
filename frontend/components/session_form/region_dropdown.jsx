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
    const countries = ['Argentina', 'Brazil', 'Canada', 'China', 'France', 'Germany',
    'Italy', 'Japan', 'Netherlands', 'North Korea', 'Spain', 'United Kingdom', 'United States'];
    return (
      <div>Default region/
        <br/>
        <button onClick={() => { this.setState({ drop: !this.state.drop }) }} onBlur={this.leave} className="region-dropdown">
          {this.props.defaultRegion || 'Select a country:'}  
         <ul className={this.state.drop ? "region-reveal" : "region-hide"}>
            <li>Select a country:</li>
            {countries.map(country => ( 
              <li key={country} 
                  onClick={() => {
                 
                  this.props.onChange(country);
                }}
                >
                {country}
              </li>
            ))}
            
          </ul>
        </button>
      </div>
    )
  }
}

export default RegionDropdown;

// onFocus = { this.clicker } onBlur = { this.leave }
{/* <li onClick={this.props.setDefaultRegion()}>Argentina</li>
<li onClick={this.props.setDefaultRegion()}>Brazil</li>
<li onClick={this.props.setDefaultRegion()}>Canada</li>
<li onClick={this.props.setDefaultRegion()}>France</li>
<li onClick={this.props.setDefaultRegion()}>Germany</li>
<li onClick={this.props.setDefaultRegion()}>Italy</li>
<li onClick={this.props.setDefaultRegion()}>Netherlands</li>
<li onClick={this.props.setDefaultRegion()}>Spain</li>
<li onClick={this.props.setDefaultRegion()}>United Kingdom</li>
<li onClick={this.props.setDefaultRegion()}>United States</li>
<li onClick={this.props.setDefaultRegion()}>Vatican City</li> */}