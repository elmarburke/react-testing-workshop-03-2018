import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Toggle } from './index';

storiesOf('Toggle', module).add('default', () => <Toggle onChange={action('onChange')} />);
