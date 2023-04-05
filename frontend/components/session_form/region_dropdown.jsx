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
    e.preventDefault();
    this.setState({ drop: true });
  }

  leave(e) {
    e.preventDefault();
    this.setState({ drop: false });
  }

  render() {
    const { region, onChange } = this.props ?? {};
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
          onClick={(e) => {
            e.preventDefault();
            this.setState({ drop: !this.state.drop });
          }}
          onBlur={this.leave}
          className="region-dropdown"
          type="button"
        >
          <span className="dropdown-label region-label">
            {region || "Select a country:"}
          </span>
          <ul className={this.state.drop ? "region-reveal" : "region-hide"}>
            <li>Select a country:</li>
            {countries.map((country) => (
              <li
                key={country}
                onClick={() => {
                  onChange(country);
                }}
                className={region === country ? "selected" : ""}
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
