import React from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { addQueryAction } from '../../redux';
import { Form, Input, TextArea } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import './AddQuery.css';

  export class AddQuery extends React.Component {

  state = {
    firstName:'',
    surname: '',
    email: '',
    query: '',
    firstNameError: false,
    surnameError: false,
    emailError: false,
    redirect: false
  }

  ValidationControl = () => {

    let isFormCorrect = true
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if(!this.state.firstName.trim()) {
      this.setState({firstNameError: true})
      isFormCorrect = false;
    }else { 
      this.setState({firstNameError: false})
    }
  
    if(!this.state.surname.trim()) {
      this.setState({surnameError: true})
      isFormCorrect = false;
    }else { 
      this.setState({surnameError: false})
    }
  
    if(this.state.email.trim() && re.test(this.state.email)) {
      this.setState({emailError: false})
    }else { 
      this.setState({emailError: true})
      isFormCorrect = false;
    }
  
    return isFormCorrect
  }

   onSubmit = (event) => {

    if(!this.ValidationControl()) return false;
   
    this.setState({ redirect : true})
    event.preventDefault();
    this.props.addQueryAction({
      id: uuid(),
      firstName: this.state.firstName,
      surname: this.state.surname,
      email: this.state.email,
      query: this.state.query,
      redirect: false
    });

    this.setState({ 
      firstName: '',
      surname:'',
      email: '',
      query: ''
    })
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
};

  render() { 
  console.log()
    const form =   (<Form onSubmit={this.onSubmit} className='form-wrapper'>
    <Form.Group widths='equal' >
        <Form.Field control={Input}
          label='First name' 
          name="firstName"
          placeholder='First name' 
          value={this.state.firstName}
          onChange={(e) => this.setState({ firstName: e.target.value}) }
          error={this.state.firstNameError}
        />
        <Form.Field control={Input}
          label="Surname"
          name="surname"
          placeholder="Surname"
          value={this.state.surname}
          onChange={(e) =>  this.setState({ surname: e.target.value})}
          error={this.state.surnameError}
        />
        <Form.Field control={Input}
          label="Email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={(e) =>  this.setState({ email: e.target.value})}
          error={this.state.emailError}
        />
        </Form.Group>
        <Form.Field control={TextArea}
          label="Query"
          name="query"
          placeholder="Query"
          value={this.state.query}
          onChange={(e) =>  this.setState({ query: e.target.value})}
        />
        <div style={{textAlign: 'center'}}>
          <Form.Button type="submit">Add</Form.Button>
        </div>
    </Form>)

    return (
      <div>
        { this.props.complete && this.state.redirect ? <Redirect to='/'/> : form }
      </div>   
    );
  }
};

const mapStateToProps = (state) => ({
  queries: state.queries,
 complete: state.complete
});

export default connect(
  mapStateToProps,
  { addQueryAction }
)(AddQuery);