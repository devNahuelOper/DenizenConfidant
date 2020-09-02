import React from 'react';
import { daysInMonth, firstDay } from '../../util/date_util';


const Calendar = () => {
  let numDays = daysInMonth();
  let dayOne = firstDay();
  let week = Array.from(Array(8).keys()).slice(1);
  let month = Array.from(Array(6)).slice(1).fill(week);
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
        <tr className="week">
          {week.map(day => 
          <td className="cal-day">
            <b>{day * (i+1)}/</b>
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