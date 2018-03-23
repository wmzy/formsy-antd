import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { Input, FormItem, Form, Select, Slider } from 'formsy-antd';

const Option = Select.Option;

function BasicForm() {
  return (
    <Form onSubmit={action('submit')}>
      <FormItem required={true} label="name">
        <Input
          name="name"
          value="wmzy"
          validations="minLength:4"
          validationError="minLength:4"
          required={true}
        />
      </FormItem>
      <FormItem required={true} label="sports">
        <Select name="sports" placeholder="select" tags required={true}>
          <Option key="swim" value="swim">
              swim
          </Option>
          <Option key="football" value="football">
              football
          </Option>
        </Select>
      </FormItem>
      <FormItem required={true} label="slider">
        <Slider
          name="slider"
          min={0}
          max={100}
          step={1}
          marks={{ 0: '0', 100: '100' }}
        />
      </FormItem>
      <button type="submit">提交</button>
    </Form>
  );
}


storiesOf('Form', module)
  .add('basic', withInfo(`
  Basic usage
  `)(BasicForm));
