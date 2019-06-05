import React from 'react';
import ReactDOM from 'react-dom';
import Restaurant from './Restaurant';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Restaurant name="testing" price="2" address="who knows ave" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
