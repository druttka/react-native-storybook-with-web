import React from 'react';
import {storiesOf} from '@storybook/react-native';

import {Demo} from './Demo';

storiesOf('Demo', module)
  .add('default', () => <Demo />)
  .add('loading', () => <Demo loading />);
