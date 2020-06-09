import React from 'react';


class SplashCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  tick() {
    this.setState({ date: new Date()});
  }
  
 
  render() {
    let weekday = this.state.date.toDateString().split(' ')[0];
    let today = this.state.date.getDate();
    return (
      <div>
        <ul className="date-group">
          
        </ul>
      </div>
    );
  }
}

export default SplashCalendar;

// 'Tue Jun 02 2020'
//   > day.toDateString()
// 'Tue Jun 02 2020'
//   > day.toDateString().split()
//   ['Tue Jun 02 2020']
//   > day.toDateString().split(' ')
//   ['Tue', 'Jun', '02', '2020']
//   > day.toDateString().split(' ')[0]
// 'Tue'