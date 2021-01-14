import React from "react";
import { formatMonth, monthDrop } from "../../util/calendar_util";
import { ClickAwayListener } from "@material-ui/core";

class MonthDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: false,
    };
    this.leave = this.leave.bind(this);
  }

  leave(e) {
    e.preventDefault();
    this.setState({ drop: false });
  }

  render() {

    return (
      <>
        <ClickAwayListener onClickAway={this.leave}>
          <button
            onClick={() => {
              this.setState({ drop: !this.state.drop });
            }}
            className="month-dropdown"
          >
            <span>{formatMonth(this.props.month)}</span>
            <ul className={this.state.drop ? "month-reveal" : "month-hide"}>
              {monthDrop.map((month) => (
                <li
                  key={month.value}
                  id={month.value}
                  onClick={() => this.props.onChange(month.value)}
                >
                  {month.label}
                </li>
              ))}
            </ul>
          </button>
        </ClickAwayListener>
      </>
    );
  }
}

export default MonthDropdown;
