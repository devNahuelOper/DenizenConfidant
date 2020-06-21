// import React from "react";
// import { logout } from '../../actions/session_actions';
// import { Link } from 'react-router-dom';

// class WelcomeDropdown extends React.Component {
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
//     const { currentUser, logout } = this.props;
//     return (
//       <div>
//         <button onFocus={this.clicker} onBlur={this.leave} className="login-signup">Welcome
//          <ul className={this.state.drop ? "reveal" : "hide"}>
//             {/* <li onClick={logout}>Log out</li> */}
//             {/* <li><Link to="/login" onClick={logout}>Log Out</Link></li> */}
//             <li><a role="button" onClick={logout}>Log out</a></li>
//           </ul>
//         </button>
      
//       </div>
//     )
//   }
// }

// export default WelcomeDropdown;