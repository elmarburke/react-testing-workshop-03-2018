import { configure } from '@storybook/react';

const reqComponents = require.context('../src', true, /.stories.js$/);
function loadStories() {
  reqComponents.keys().forEach(filename => reqComponents(filename));
}

configure(loadStories, module);
