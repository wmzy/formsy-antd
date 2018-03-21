import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Input, FormItem, Form, Select, Slider } from 'formsy-antd';

const Option = Select.Option;

class APP extends Component {
  state = {};

  handleSubmit = model => {
    action('submit')();
    this.setState({ model });
  };

  render() {
    const { model } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem required label="name">
            <Input
              name="name"
              value="wmzy"
              validations="minLength:4"
              validationError="minLength:4"
              required
            />
          </FormItem>
          <FormItem required label="sports">
            <Select name="sports" placeholder="select" tags required>
              <Option key="swim" value="swim">
                swim
              </Option>
              <Option key="football" value="football">
                football
              </Option>
            </Select>
          </FormItem>
          <FormItem required label="slider">
            <Slider
              name="slider"
              min={0}
              max={100}
              step={1}
              marks={{ 0: "0", 100: "100" }}
            />
          </FormItem>
          <button type="submit">提交</button>
        </Form>
        <h3>model:</h3>
        <pre>
          <code>{JSON.stringify(model, null, "  ")}</code>
        </pre>
      </div>
    );
  }
}

storiesOf('Form', module)
  .add('basic', () => (
    <APP />
  ));
