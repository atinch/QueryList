import React, { useState } from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { addQueryAction } from '../../redux';
import { Form, Input, TextArea } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import './AddQuery.css';

const AddQuery = (props) => {

  const { complete } = props;

  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const onSubmit = (event) => {

    if(!isFormCorrect()) return false;
    setRedirect(true);
    console.log('complete1',complete);
    event.preventDefault();
    props.addQueryAction({
      id: uuid(),
      name: firstName,
      surname: surname,
      email: email,
      query: query,
      redirect: false
    });

    setFirstName('');
    setSurname('');
    setEmail('');
    setQuery('');
  };

  function isFormCorrect() {

    let isFormCorrect = true
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!firstName.trim()) {
      setFirstNameError(true);
      isFormCorrect = false;
    }else { 
      setFirstNameError(false)
    }

    if(!surname.trim()) {
      setSurnameError(true);
      isFormCorrect = false;
    }else { 
      setSurnameError(false)
    }

    if(email.trim() && re.test(email)) {
      setEmailError(false);
    }else { 
      setEmailError(true);
      isFormCorrect = false;
    }

    return isFormCorrect
  }

  const form =   (<Form onSubmit={onSubmit} className='form-wrapper'>
  <Form.Group widths='equal' >
      <Form.Field control={Input}
        label='First name' 
        name="firstName"
        placeholder='First name' 
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        error={firstNameError}
      />
       <Form.Field control={Input}
        label="Surname"
        name="surname"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        error={surnameError}
      />
      <Form.Field control={Input}
        label="Email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailError}
      />
      </Form.Group>
      <Form.Field control={TextArea}
        label="Query"
        name="query"
        placeholder="Query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div style={{textAlign: 'center'}}>
        <Form.Button type="submit">Add</Form.Button>
      </div>
  </Form>)

  return (
    <div>
      { complete && redirect ? <Redirect to='/'/> : form }
    </div>
    
   
  );
};

const mapStateToProps = (state) => ({
  queries: state.queries,
 complete: state.complete
});

export default connect(
  mapStateToProps,
  { addQueryAction }
)(AddQuery);