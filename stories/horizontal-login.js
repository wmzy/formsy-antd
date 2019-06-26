import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';
import { Input, FormItem, Form } from 'formsy-antd';
import { Icon, Button } from 'antd';

function HorizontalLoginForm({store}) {
  const handleSubmit = data => {
    action('submit')(data);
  };

  const handleValid = () => store.set({ valid: true });

  const handleInvalid = () => store.set({ valid: false });

  return (
    <Form
      layout="inline"
      onSubmit={handleSubmit}
      onValid={handleValid}
      onInvalid={handleInvalid}
    >
      <FormItem>
        <Input
          name="username"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
          validations="required"
          validationError="Please input your username!"
        />
      </FormItem>
      <FormItem>
        <Input
          name="password"
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
          validations="required"
          validationError="Please input your Password!"
        />
      </FormItem>
      <FormItem>
        <Button
          type="primary"
          htmlType="submit"
          disabled={!store.state.valid}
        >
            Log in
        </Button>
      </FormItem>
    </Form>
  );
}

storiesOf('Form', module)
  .add('horizontal-login', withState({valid: false})(HorizontalLoginForm), {info: '水平登录栏，常用在顶部导航栏中。'});
