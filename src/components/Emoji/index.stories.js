import React from 'react';

import { storiesOf } from '@storybook/react';

import { Emoji } from './index';

storiesOf('Emoji', module)
  .add('with valid shortName', () => <Emoji shortName="unicorn" />)
  .add('with invalid shortName', () => <Emoji shortName="munich" />);
