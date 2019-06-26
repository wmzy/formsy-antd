import React from 'react';
import { storiesOf } from '@storybook/react';
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
  .add('global-state', withState({ data: {username: 'benjycui'} })(GlobalStateForm), {info: '表单数据存储于上层组件'});
