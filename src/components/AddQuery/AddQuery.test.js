import React from 'react';
import { AddQuery } from './AddQuery';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme';
import { Form, FormField } from 'semantic-ui-react';

configure({ adapter: new Adapter() });

describe('AddQuery', () => {

  const wrapper = shallow(<AddQuery/>);

  it('should render a Form', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
   expect(wrapper.find(Form)).toHaveLength(1);
  });
  
});

describe('When name field is changed', () => {
  it('should change state correctly', () => {
    const wrapper = shallow(<AddQuery />)
    
    const firstName = wrapper.find(FormField).first()
    expect(firstName.prop('value')).toBe('')
    const expected = 'Sude'
    firstName.simulate("change", { target: { value: expected } });
    expect(wrapper.state('firstName')).toBe(expected)
  });
});

describe('When email field is changed', () => {
  it('should change state correctly', () => {
    const wrapper = shallow(<AddQuery />)
    
    const input = wrapper.find(FormField).at(2)
    expect(input.prop('value')).toBe('')
    expect(input.prop('name')).toBe('email')
    const expected = 'This is query...'
    input.simulate("change", { target: { value: expected } });
    expect(wrapper.state('email')).toBe(expected)
  });
});

/* describe('when form is submitted', () => {
  it('should invoke onSubmit prop with correct params', () => {

    const onSubmitMock = jest.fn()
    const props = {
      query: { id: 'sxxdf£$sAS1', firstName: 'john', surname: 'mike', email: 'arc@gmail.com', query: 'What is ...' },
      onSubmit: onSubmitMock
    }
    const wrapper = shallow(<AddQuery {...props}/>)

    const expected = {
      id: 122432,
      firstName: 'Atinc',
      surname: 'Erguven',
      email: 'Atinc@gmail.com',
      query: 'Lorem ....'
    }
    
    const nameInput = wrapper.find(FormField).first()
    nameInput.simulate("change", { target: { value: expected.name } });

    const emailInput = wrapper.find(FormField).at(2)
    emailInput.simulate("change", { target: { value: expected.email } });

    wrapper.find(Form).simulate('submit', { preventDefault: jest.fn() })
    expect(onSubmitMock).toHaveBeenCalledWith(expected)
  });
}); */
