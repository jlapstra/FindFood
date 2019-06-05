import React from 'react';
import { mount } from 'enzyme';
import Restaurant from './Restaurant';

describe('Restaurant component', () => {
  it('matches the snapshot', () => {
    const component = mount(<Restaurant name='CJS' price='2' address='100 topher' />);
    expect(component).toMatchSnapshot;
  });
});


