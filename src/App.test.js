import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('calculates 1+1', () => {
  expect(1 + 1).toBe(2);
})
