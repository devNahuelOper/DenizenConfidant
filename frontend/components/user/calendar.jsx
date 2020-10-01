import React from 'react';
import { formatAbsDate } from '../../util/date_util';
import { getCalendar, formatMonth } from '../../util/calendar_util';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    }
    this.hasEvent = this.hasEvent.bind(this);
  }


  componentDidUpdate() {
    const monthEvents = this.props.events;
    $('.event-space').each(function(idx) {
      monthEvents.forEach(event => {
        if (formatAbsDate(event.date).day === idx + 1) {
          $(this).parent().addClass('hasEvent').parent().addClass('eventWeek');
          $(this).children().first().show().attr({src: event.photoUrl || window.defaultUrl, alt: event.name})
          .next().attr({class: 'eventName', id: `${event.id}`}).text(event.name).next().text(`at ${event.venue}`);
        }
      });
    });
    $('.eventName').each(function() {
      const id = $(this).attr('id');
      const link = $('<a></a>').attr('href', `#/events/${id}`);
      $(this).wrap(link)
      .on('click', () => {
        window.setTimeout(() => {
          window.location.reload(true);
        }, 500);
      })
    })
    // console.log(monthEvents);
  }

  hasEvent(day) {
    const events = this.props.events;
    const dayEvents = [];
    events.forEach(event => {
      if (formatAbsDate(event.date).day === day) {
        dayEvents.push(event);
      }
    });
    return dayEvents;
  }
  
  render() {
    const { year, month } = this.state;
    let fillMonth = getCalendar(year, month);
  
    $('#onDay b').each(function(idx) {
      $(this).next().next()
      .attr({
        class: 'event-space',
        id: `${idx + 1}`
      });
    });
  
    return (
      <div className="calendar">
        <ul className="year-month">
          <li>
            <span>{year}</span>
          </li>
          <li>
            <span>{formatMonth(month)}</span>
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
            {fillMonth.map((week, i) =>
              <tr className="week" key={`week-${i}`}>
                {week.map(day =>
                  <td className="cal-day" 
                    id={((i === 0 && day > 7) || (i === 4 && day <= 7)) ? "offDay" : "onDay"}
                    key={day}>
                    <b>{day}/</b>
                    <hr />
                    <div>
                      <img src="" alt="" />
                      <h1></h1>
                      <h2></h2>
                    </div>
                  </td>
                )}
              </tr>
            )}
          </tbody>
        </table>
        <div className="monthToggle-wrap">
          <nav className="monthToggle">
            <button id="prevMonth">Previous</button>
            <button id="nextMonth">Next</button>
          </nav>
        </div>
      </div>
    );
  }
}

export default Calendar;