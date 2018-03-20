import React from 'react';

import { storiesOf } from '@storybook/react';

import { EmojiList } from './index';

storiesOf('EmojiList', module).add('with names', () => (
  <EmojiList names={[{ id: 1, name: 'unicorn' }, { id: 2, name: 'cat' }, { id: 3, name: 'panda_face'}, { id: 4, name: 'koala'}]} />
));
