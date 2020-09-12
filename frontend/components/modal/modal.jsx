import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';


class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.modal) {
      return null;
    }

    return (
      <div className="modal-container">
        {/* <button className="modal-close-btn" onClick={this.props.closeModal}>x</button> */}
        <div className="modal">
          <h1>Are you sure you want to cancel this event?</h1>
          <span>
            <button>Yes</button>
            <button onClick={this.props.closeModal}>No</button>
          </span>
        </div>
        {/* <button onClick={this.props.openModal}>Open</button>
        <Modal /> */}
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);