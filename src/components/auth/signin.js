import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    signinUser: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired
  };

  handleFormSubmit = ({ email, password }) => {
    this.props.signinUser({ email, password });
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...email} className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input {...password} className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, null, actions)(Signin);
