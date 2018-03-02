import axios from 'axios';

export const ADDINGUSER = 'ADDINGUSER';
export const USERADDED = 'USERADDED';
export const ERROR = 'ERROR';

const URL = 'http://localhost:3000/api'


export const addUser = (username, password, confirmPassword) => {
  return dispatch => {
    if (password !== confirmPassword) {
      dispatch({
        type: Error,
        payload: "passwords do not match"
      })
    } else {
      dispatch({type: ADDINGUSER});
      axios.post(`${URL}/users`, {username, password})
        .then(response => {
          dispatch({
            type: USERADDED,
            payload: response.data
          });
          console.log(response);
        })
        .catch(error => {
          dispatch({
            type: ERROR,
            payload: error
          })
        });
    };
  } 
}
