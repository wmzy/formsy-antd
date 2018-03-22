import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { addValidationRule } from 'formsy-react';
import BasicForm from './basic';
import HorizontalLoginForm from './horizontal-login';

addValidationRule('required', (_, v) => !!v);

storiesOf('Form', module)
  .add('horizontal-login', withInfo(`
  description or documentation about my component, supports markdown

  ~~~js
  require('./horizontal-login')
  ~~~

  `)(() => (
    <HorizontalLoginForm />
  )))
  .add('basic', () => (
    <BasicForm />
  ));
