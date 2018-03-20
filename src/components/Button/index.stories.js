import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from './index';

storiesOf('Button', module).add('with valid shortName', () => (
  <Button color="palevioletred" onClick={action('click')}>
    Hallo{' '}
    <span role="img" aria-label="">
      👋
    </span>
  </Button>
));
