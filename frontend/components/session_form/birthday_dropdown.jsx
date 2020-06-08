import React from "react";

class BirthdayDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default_region: 'Select a country:',
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
    const days = Array.from(Array(32).keys()).slice(1).reverse();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
    'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].reverse();
    const years = Array.from(Array(2020).keys()).slice(1910).reverse();
    return (
      <div>Birthday/
        <br />
        <button onClick={() => { this.setState({ drop: !this.state.drop }) }} onBlur={this.leave} className="day-dropdown">
          {this.props.birthday || '1'}
          <ul className={this.state.drop ? "day-reveal" : "day-hide"}>
            {/* <li>Select a country:</li> */}
            {days.map(day => (
              <li key={day}
                onClick={() => {

                  this.props.onChange(day);
                }}
              >
                {day}
              </li>
            ))}

          </ul>
        </button>
        <button onClick={() => { this.setState({ drop: !this.state.drop }) }} onBlur={this.leave} className="month-dropdown">
          {this.props.birthday || 'Jan'}
          <ul className={this.state.drop ? "month-reveal" : "month-hide"}>
            {/* <li>Select a country:</li> */}
            {months.map(month => (
              <li key={month}
                onClick={() => {

                  this.props.onChange(month);
                }}
              >
                {month}
              </li>
            ))}

          </ul>
        </button>
        <button onClick={() => { this.setState({ drop: !this.state.drop }) }} onBlur={this.leave} className="year-dropdown">
          {this.props.birthday || '----'}
          <ul className={this.state.drop ? "year-reveal" : "year-hide"}>
            {/* <li>Select a country:</li> */}
            {years.map(year => (
              <li key={year}
                onClick={() => {

                  this.props.onChange(year);
                }}
              >
                {year}
              </li>
            ))}

          </ul>
        </button>
      </div>
    )
  }
}

export default BirthdayDropdown;