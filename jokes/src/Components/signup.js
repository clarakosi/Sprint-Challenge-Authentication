import React, { Component } from 'react';
import {connect} from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { addUser } from '../Actions/index';

class SignUp extends Component {

  renderAlert = () => {
    if(!this.props.error) {
      return null;
    } else {
      return <div>{this.props.error}</div>
    }
  }

  handleSignUp = ({ username, password, confirmPassword }) => {
    this.props.addUser(username, password, confirmPassword);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleSignUp)}>
        <div>
          <label>username: </label>
          <Field name="username" component="input" type="text" />
        </div>
        <div>
          <label>password: </label>
          <Field name="password" component="input" type="text" />
        </div>
        <div>
          <label>confirm password: </label>
          <Field name="confirmPassword" component="input" type="text" />
        </div>
        <button action="submit">Sign Up</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.jokes.error
  }
};



SignUp = connect(mapStateToProps, {addUser})(SignUp);

export default reduxForm({
  form: 'signUp',
  fields: ['username', 'password', 'confirmPassword']
})(SignUp);