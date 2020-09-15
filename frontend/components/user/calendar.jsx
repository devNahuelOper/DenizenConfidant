import React from 'react';
import { daysInMonth, firstDay, daysInLastMonth, formatMonthYear, formatAbsDate } from '../../util/date_util';


// const Calendar = () => {
//   let now = new Date();
//   let dispYear = formatMonthYear(now).split(' ')[1];
//   let dispMonth = formatMonthYear(now).split(' ')[0];

//   const week = Array.from(Array(8).keys()).slice(1);
//   const month = Array.from(Array(6)).slice(1).fill(week);

//   let numDays = daysInMonth();
//   let dayOne = firstDay();
//   let lastMonth = daysInLastMonth();
//   $('td b').slice(dayOne, numDays + 2).each(function(idx) {
//     $(this).text(`${idx+1}/`);
//   });
//   $('td b').slice(numDays + 2).each(function(idx) {
//     $(this).text(`${idx + 1}/`);
//     $(this).css({color: '#787878'});
//     $(this).parent().css({ color: '#787878', background: '#3c3c3c'});
//   });
//   let daysLeft = $('td').slice(0, dayOne).length - 1;
//   $('td b').slice(0, dayOne).each(function(idx) {
//     $(this).text(`${(lastMonth - daysLeft)+idx}/`);
//     $(this).css({ color: '#787878' });
//     $(this).parent().css({ color: '#787878', background: '#3c3c3c' });
//   });

  
//   return (
//     <div className="calendar">
//       {/* <h1>{currentUser}</h1> */}
//       <ul className="year-month">
//         <li>
//           <span>{dispYear}</span>
//         </li>
//         <li>
//           <span>{dispMonth}</span>
//         </li>
//       </ul>
//       <table className="calendar">
//         <tbody>
//           <tr className="weekdays">
//             <th id="sun">Sun</th>
//             <th id="mon">Mon</th>
//             <th id="tue">Tue</th>
//             <th id="wed">Wed</th>
//             <th id="thu">Thu</th>
//             <th id="fri">Fri</th>
//             <th id="sat">Sat</th>
//           </tr>
//           {month.map((week, i) =>
//           <tr className="week" key={`week-${i}`}>
//             {week.map(day => 
//             <td className="cal-day" key={day}>
//               <b></b>
//               <hr/>
//               </td>
//               )}
//           </tr>
//             )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Calendar;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      monthEvents: []
    }
    this.hasEvent = this.hasEvent.bind(this);
  }

  componentDidMount() {
    // const events = this.props.events;
    // const filtered = events.filter(event => 
    //   formatAbsDate(event.date).year === this.state.year && formatAbsDate(event.date).month === this.state.month
    // );
    // this.setState({monthEvents: filtered});
  }

  componentDidUpdate() {
    const monthEvents = this.props.events;
    $('.event-space').each(function(idx) {
      monthEvents.forEach(event => {
        if (formatAbsDate(event.date).day === idx + 1) {
          // let link = $('<a></a>').attr('href', `#/events/${event.id}`);
          // $(this).html(event.name).wrap(link);
          $(this).children().first().text(event.name).next().text(`at ${event.venue}`);
        }
      });
    });
    console.log(monthEvents);
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
    let now = new Date();
    let dispYear = formatMonthYear(now).split(' ')[1];
    let dispMonth = formatMonthYear(now).split(' ')[0];

    const week = Array.from(Array(8).keys()).slice(1);
    const month = Array.from(Array(6)).slice(1).fill(week);

    let numDays = daysInMonth();
    let dayOne = firstDay();
    let lastMonth = daysInLastMonth();
    $('td b').slice(dayOne, numDays + 2).each(function (idx) {
      $(this).text(`${idx + 1}/`)
      .next().next()
      .attr({
        class: 'event-space',
        id: `${idx + 1}`
      });
      // $(this).append('<span>span</span>');
      // .text(this.hasEvent(idx+1).length > 0 ? this.hasEvent(idx+1)[0].name : '');  
    });
    $('td b').slice(numDays + 2).each(function (idx) {
      $(this).text(`${idx + 1}/`);
      $(this).css({ color: '#787878' });
      $(this).parent().css({ color: '#787878', background: '#3c3c3c' });
    });
    let daysLeft = $('td').slice(0, dayOne).length - 1;
    $('td b').slice(0, dayOne).each(function (idx) {
      $(this).text(`${(lastMonth - daysLeft) + idx}/`);
      $(this).css({ color: '#787878' });
      $(this).parent().css({ color: '#787878', background: '#3c3c3c' });
    });
    // $('.event-space').slice(dayOne, numDays + 2).each(function (idx) {
      
    // })
    const { currentUser } = this.props;
    return (
      <div className="calendar">
        <ul className="year-month">
          <li>
            <span>{dispYear}</span>
          </li>
          <li>
            <span>{dispMonth}</span>
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
            {month.map((week, i) =>
              <tr className="week" key={`week-${i}`}>
                {week.map(day =>
                  <td className="cal-day" key={day}>
                    <b></b>
                    <hr />
                    <div>
                      <h1></h1>
                      <h2></h2>
                    </div>
                  </td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;