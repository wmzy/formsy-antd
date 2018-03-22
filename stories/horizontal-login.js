import React from 'react';
import { action } from '@storybook/addon-actions';
import { Input, FormItem, Form } from 'formsy-antd';
import { Icon, Button } from 'antd';

class HorizontalLoginForm extends React.Component {
  state = {};

  handleSubmit = (data) => {
    action('submit')(data);
  };

  handleValid = () => this.setState({ valid: true });

  handleInvalid = () => this.setState({ valid: false });

  render() {
    const { valid } = this.state;

    return (
      <Form
        layout="inline"
        onSubmit={this.handleSubmit}
        onValid={this.handleValid}
        onInvalid={this.handleInvalid}
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
            disabled={!valid}
          >
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default HorizontalLoginForm;
