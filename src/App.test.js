import React from 'react';
import { shallow } from 'enzyme';
import  App  from './App';


describe('App', () => {
  it('should match snapshot in default state', () => {
    const component = <App/>;
    const wrapper = shallow(component).dive();
    expect(wrapper).toMatchSnapshot();
  });
});