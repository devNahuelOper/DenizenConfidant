import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import searchReducer from './search_reducer';


const uiReducer = combineReducers({
  modal: modalReducer,
  searchBar: searchReducer
});

export default uiReducer;