import React from 'react';
import { formatMonth, monthDrop } from '../../util/calendar_util';

class MonthDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
 
    return (
      <>
        <button onClick={() => { this.setState({ drop: !this.state.drop }) }}  onBlur={this.leave} className="month-dropdown">
          <span>{formatMonth(this.props.month)}</span>
          <ul className={this.state.drop ? "month-reveal" : "month-hide"}>
            {monthDrop.map(month => 
            <li key={month.value}
              onClick={() => {
                this.props.onChange(month);
              }}
              >
              {month.label}
            </li>
              )}
          </ul>
       </button>
      </>
    )
  }
}

export default MonthDropdown;