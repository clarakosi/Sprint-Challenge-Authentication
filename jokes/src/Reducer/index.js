import { combineReducers } from 'redux';
import jokesReducer from './jokes';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  jokes: jokesReducer,
  form: formReducer
});

export default rootReducer;