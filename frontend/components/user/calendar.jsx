import React from "react";
import { formatAbsDate } from "../../util/date_util";
import { getCalendar } from "../../util/calendar_util";
import { Link } from "react-router-dom";
import MonthDropdown from "./month_dropdown";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      events: this.props.events,
    };
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.getEvents = this.getEvents.bind(this);
  }

  componentDidMount() {
    this.getEvents();
    console.log('calendar props: ',this.props);
  }

  getEvents() {
    this.setState({
      events: this.props.events.filter(
        (event) =>
          formatAbsDate(event.date).year === this.state.year &&
          formatAbsDate(event.date).month === this.state.month
      ),
    });
  }

  nextMonth() {
    this.setState({ month: (this.state.month += 1) % 12 });
    if (this.state.month > 11) {
      this.setState({ year: this.state.year + 1 });
    }
    this.getEvents();
  }

  prevMonth() {
    this.setState({ month: (this.state.month -= 1) });
    if (this.state.month < 0) {
      this.setState({ month: 11, year: this.state.year - 1 });
    }
    this.getEvents();
  }

  render() {
    const { year, month, events } = this.state;
    let fillMonth = getCalendar(year, month);

    return (
      <div className="calendar">
        <ul className="year-month">
          <li>
            <span>{year}</span>
          </li>
          <li>
            <MonthDropdown
              month={this.state.month}
              onChange={(month) => this.setState({ month: month.value })}
            />
          </li>
        </ul>
        <table className="calendar">
          <tbody>
            <tr className="weekdays">
              <th id="sun">Sun</th>
              <th id="mon">Mon</th>
              <th id="tue">Tue</th>
              <th id="wed">Wed</th>
              <th id="thu">Thu</th>
              <th id="fri">Fri</th>
              <th id="sat">Sat</th>
            </tr>
            {fillMonth.map((week, i) => (
              <tr className="week" key={`week-${i}`}>
                {week.map((day) => (
                  <td
                    className="cal-day"
                    id={
                      (i === 0 && day > 7) || (i === 4 && day <= 7)
                        ? "offDay"
                        : "onDay"
                    }
                    key={day}
                  >
                    <b>{day}/</b>
                    <hr />
                    {events.length > 0 ? (
                      <div className="event-space">
                        {events.map((event, i) => (
                          <article key={i}>
                            {formatAbsDate(event.date).month === month &&
                              formatAbsDate(event.date).day === day && (
                                <div>
                                  <img
                                    src={event.photoUrl || window.defaultUrl}
                                    alt={event.name}
                                  />
                                  <Link to={`/events/${event.id}`}>
                                    <h1>{event.name}</h1>
                                  </Link>
                                  <h2>at {event.venue}</h2>
                                </div>
                              )}
                          </article>
                        ))}
                      </div>
                    ) : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="monthToggle-wrap">
          <nav className="monthToggle">
            <button id="prevMonth" onClick={this.prevMonth}>
              Previous
            </button>
            <button id="nextMonth" onClick={this.nextMonth}>
              Next
            </button>
          </nav>
        </div>
      </div>
    );
  }
}

export default Calendar;
