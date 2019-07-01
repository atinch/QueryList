import React from 'react';
import { QueryList } from './QueryList';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'
import { shallow, mount } from 'enzyme';
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

configure({ adapter: new Adapter() });

const queries = [
  {
    id: 122432,
    firstName: 'Atinc',
    surname: 'Erguven',
    email: 'Atinc@gmail.com',
    query: 'Lorem'
  },
]

describe('QueryList', () => {

  const wrapper = shallow(<QueryList queries={queries} />);

  console.log(wrapper.debug());
  it('should assign correct header', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('should render a Button', () => {
   expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('should render a Table', () => {
    expect(wrapper.find(Table)).toHaveLength(1);
   });

  it('should render Link correctly', () => {
    const link = wrapper.find(Link)
    expect(link).toHaveLength(1);
    expect(link.prop('to')).toBe('/queries/new')
  });
});


