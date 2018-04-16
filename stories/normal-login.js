import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Input, FormItem, Form, Checkbox } from 'formsy-antd';
import { Icon, Button } from 'antd';


function NormalLoginForm() {
  const handleSubmit = data => {
    action('submit')(data);
  };

  return (
    <Form
      style={{ maxWidth: '300px' }}
      onSubmit={handleSubmit}
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
        <Checkbox name="remember" value>Remember me</Checkbox>
        <a style={{ float: 'right' }} href="">Forgot password</a>
        <Button
          style={{ width: '100%' }}
          type="primary"
          htmlType="submit"
        >
            Log in
        </Button>
        Or <a href="">register now!</a>
      </FormItem>
    </Form>
  );
}

storiesOf('Form', module)
  .add('normal-login', withInfo('普通的登录框，可以容纳更多的元素。')(NormalLoginForm));
