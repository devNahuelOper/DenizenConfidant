import React from "react";

class BirthdayDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: false,
      month: false,
      year: false,
    };
  }

  leave(field) {
    return (e) => {
      this.setState({
        [field]: false,
      });
    };
  }

  render() {
    const { day, month, year, daysInMonth = 31 } = this.props.birthday ?? {};

    const days = Array.from(Array(daysInMonth + 1).keys())
      .slice(1)
      .reverse();

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ].reverse();

    const years = Array.from(Array(new Date().getFullYear() + 1).keys())
      .slice(1910)
      .reverse();
    return (
      <div>
        Birthday /
        <br />
        <button
          onClick={() => {
            this.setState({ day: !this.state.day });
          }}
          onBlur={this.leave("day")}
          className="day-dropdown birthday-dropdown"
          type="button"
        >
          <span className="dropdown-label day-label">
            {day}
          </span>
          <ul className={this.state.day ? "day-reveal" : "day-hide"}>
            {days.map((day) => (
              <li
                key={day}
                onClick={() => {
                  this.props.handleChange("day", day);
                }}
              >
                {day}
              </li>
            ))}
          </ul>
        </button>
        <button
          onClick={() => {
            this.setState({ month: !this.state.month });
          }}
          onBlur={this.leave("month")}
          className="month-dropdown birthday-dropdown"
          type="button"
        >
          <span className="dropdown-label month-label">
            {month}
          </span>
          <ul className={this.state.month ? "month-reveal" : "month-hide"}>
            {months.map((month) => (
              <li
                key={month}
                onClick={() => {
                  this.props.handleChange("month", month);
                }}
              >
                {month}
              </li>
            ))}
          </ul>
        </button>
        <button
          onClick={() => {
            this.setState({ year: !this.state.year });
          }}
          onBlur={this.leave("year")}
          className="year-dropdown birthday-dropdown"
          type="button"
        >
          <span className="dropdown-label year-label">
            {year}
          </span>
          <ul className={this.state.year ? "year-reveal" : "year-hide"}>
            {years.map((year) => (
              <li
                key={year}
                onClick={() => {
                  this.props.handleChange("year", year);
                }}
              >
                {year}
              </li>
            ))}
          </ul>
        </button>
      </div>
    );
  }
}

export default BirthdayDropdown;
