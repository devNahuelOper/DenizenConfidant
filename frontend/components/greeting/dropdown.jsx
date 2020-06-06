// import React from "react";
// import { Link } from 'react-router-dom';


// class Dropdown extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       drop: false
//     }
//     this.clicker = this.clicker.bind(this);
//     this.leave = this.leave.bind(this);
//   }

//   clicker(e) {
//     this.setState({ "drop": true });
//   }

//   leave(e) {
//     this.setState({ "drop": false });
//   }

//   render() {
//     return (
//      <div>
//        <button onFocus={this.clicker} onBlur={this.leave}>
//          <ul className={this.state.drop ? "reveal" : "hide"}>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/signup">Register</Link></li>
//          </ul>
//        </button> 
//      </div>
//     ) 
//   }
// }

// export default Dropdown;