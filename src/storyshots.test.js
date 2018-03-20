import initStoryshots, { multiSnapshotWithOptions  } from '@storybook/addon-storyshots';
import { mount } from 'enzyme';

initStoryshots({ 
  renderer: mount,
  test: multiSnapshotWithOptions({})
 });
