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
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
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