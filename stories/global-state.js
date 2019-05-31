import React from 'react';
import _ from 'lodash/fp';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';
import { Input, FormItem, Form } from 'formsy-antd';
import './styles.css';

function GlobalStateForm({store}) {
  const handleChange = data => {
    action('change')(data);
    store.set({ data });
  };

  return (<div>
    <Form
      layout="inline"
      onChange={handleChange}
    >
      <FormItem label="Username" required>
        <Input
          name="username"
          value="benjycui"
          validations="required"
          validationError="Username is required!"
          placeholder="placeholder"
        />
      </FormItem>
    </Form>
    <pre className="language-bash">
      {JSON.stringify(store.state.data, null, 2)}
    </pre>
  </div>);
}

storiesOf('Form', module)
  .add('global-state', _.pipe(
    withInfo('表单数据存储于上层组件'),
    withState({ data: {username: 'benjycui'} })
  )(GlobalStateForm));
