import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import  CreateEventForm  from './create_event_form';


const mapStateToProps = state => ({
  event: {
    name: '',
    date: '',
    location: '',
    venue: '',
    description: ''
  },
  formType: 'Submit Event',
  // events: Object.values(state.entities.events)
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventForm);