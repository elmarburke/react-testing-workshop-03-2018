import React from 'react';
import { Emoji } from './index';
import { shallow } from 'enzyme';

// components/Emoji/index.test.js

describe('<Emoji />', () => {
  test('render', () => {
    const tree = shallow(<Emoji shortName="unicorn" />);
    expect(tree).toMatchSnapshot();
  });
});
