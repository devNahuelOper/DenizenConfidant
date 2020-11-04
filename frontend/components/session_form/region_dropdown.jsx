import React from "react";

class RegionDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: false,
    };
    this.clicker = this.clicker.bind(this);
    this.leave = this.leave.bind(this);
  }

  clicker(e) {
    // e.stopPropagation();
    e.preventDefault();
    this.setState({ drop: true });
    // console.log(e.target, e.currentTarget);
  }

  leave(e) {
    // e.stopPropagation();
    e.preventDefault();
    this.setState({ drop: false });
  }

  render() {
    const countries = [
      "Argentina",
      "Brazil",
      "Canada",
      "China",
      "France",
      "Germany",
      "Italy",
      "Japan",
      "Netherlands",
      "Spain",
      "United Kingdom",
      "United States",
    ];
    return (
      <div>
        Default region /
        <br />
        <button
          onClick={() => {
            this.setState({ drop: !this.state.drop });
          }}
          onBlur={this.leave}
          className="region-dropdown"
        >
          {this.props.region || "Select a country:"}
          <ul className={this.state.drop ? "region-reveal" : "region-hide"}>
            <li>Select a country:</li>
            {countries.map((country) => (
              <li
                key={country}
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
    );
  }
}

export default RegionDropdown;
