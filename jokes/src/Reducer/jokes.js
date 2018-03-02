import { ADDINGUSER, USERADDED, ERROR} from '../Actions/index';

const initialState = {
  AddingUser: false,
  UserAdded: false,
  error: null

}


const jokesReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADDINGUSER:
      return {...state, AddingUser: true};
    case USERADDED:
      return {...state, AddingUser: false, USERADDED: true};
    case ERROR:
      return {...state, error: action.payload}
    default:
      return state
  }
};

export default jokesReducer;