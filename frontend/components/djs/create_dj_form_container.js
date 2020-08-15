import { connect } from 'react-redux';
import { createDj, receiveDjErrors, clearDjErrors } from '../../actions/dj_actions';
import CreateDjForm from './create_dj_form';

const mapStateToProps = state => ({
  dj: {
    name: '',
    genre: '',
    nationality: '',
    bio: ''
  },
  errors: state.errors.djs,
});

const mapDispatchToProps = dispatch => ({
  createDj: dj => dispatch(createDj(dj)),
  receiveDjErrors: errors => dispatch(receiveDjErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDjForm);