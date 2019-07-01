import React from 'react';
import QueryList from './QueryList';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'
import { shallow, mount } from 'enzyme';

configure({ adapter: new Adapter() });

describe('QueryList', () => {
  const wrapper = shallow(<QueryList/>);

  it('should render without exploding', () => {
    expect(snaphot(wrapper)).toMatchSnapshot();
  });
  
  it('should assign correct header', () => {
    expect(wrapper.find('Table.HeaderCell').first().text()).toBe('Name');
    //expect(component).toMatchSnapshot();
  });
  
});



