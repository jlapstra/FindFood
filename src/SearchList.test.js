import React from 'react';
import ReactDOM from 'react-dom';
import SearchList from './SearchList';
import Search from './Search';

import { mount, shallow } from 'enzyme';

const rList = [
  {
    name: 'Jenna',
    price: 2,
    address: '1 Queen',
    img: undefined,
    info: undefined
  },
  {
    name: 'Troy',
    price: 2,
    address: '3 Front',
    img: undefined,
    info: undefined
  }
];

const jsontest = {"total_entries":2,"per_page":25,"current_page":1,"restaurants":[{"id":21307,"name":"Jenna","address":"1 Queen","city":"Toronto","state":"ON","area":"Toronto / SW Ontario","postal_code":"M4V 2L1","country":"CA","phone":"4169618011","lat":43.68207,"lng":-79.40041,"price":2},{"id":82957,"name":"Troy","address":"3 Front","city":"Toronto","state":"ON","area":"Toronto / SW Ontario","postal_code":"M5E 1B3","country":"CA","phone":"4169610601x","lat":43.648033,"lng":-79.374377,"price": 2}]};


describe('SearchList Component', () => {
  it('renders appropriately with restaurantList given', () => {
    const component = mount(<SearchList />);

    component.setState({restaurantList: rList});

    expect(component).toMatchSnapshot();

    component.unmount();
  });
});

describe('Search Component', () => {
  it('should populate data once city selected', () => {
    const component = mount(<SearchList/>);
    const $ = require('jquery');

    jest.unmock('jquery');

    $.ajax = jest.fn().mockImplementation(function(x) {
      console.log(x.success);
      x.success(jsontest); 
    });

    component.find('FormControl#input').simulate('change', {
        target: { value: 'Chicago' }
      });

    component
      .find('Button#search')
      .simulate('click');

    expect(component.state('restaurantList')).toEqual(rList);

    component.unmount();

    jest.resetModules();
  });
});
