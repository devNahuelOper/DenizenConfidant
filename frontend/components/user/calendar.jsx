import React from 'react';
import { daysInMonth, firstDay, daysInLastMonth } from '../../util/date_util';


const Calendar = () => {
  let numDays = daysInMonth();
  let dayOne = firstDay();
  let week = Array.from(Array(8).keys()).slice(1);
  let month = Array.from(Array(6)).slice(1).fill(week);
  // let $exactMonth = $('td').slice(dayOne, numDays + 2);
  $('td b').slice(dayOne, numDays + 2).each(function(idx) {
    $(this).text(`${idx+1}/`);
  });
  $('td b').slice(numDays + 2).each(function(idx) {
    $(this).text(`${idx + 1}/`);
    $(this).css({color: '#787878'});
    $(this).parent().css({ color: '#787878', background: '#3c3c3c'});
  });
  return (
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
            <hr/>
            </td>
            )}
        </tr>
          )}
      </tbody>
    </table>
  );
}

export default Calendar;