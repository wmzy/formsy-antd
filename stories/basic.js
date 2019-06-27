import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Radio } from 'antd';
import { Input, TextArea, FormItem, Form, Select, Slider, RadioGroup } from 'formsy-antd';

const Option = Select.Option;

const ref = React.createRef();
function handleSubmit() {
  action('validSubmit')(ref.current.getModel());
}

function BasicForm() {
  const plainOptions = ['Apple', 'Pear', 'Orange'];

  return (
    <Form ref={ref} onSubmit={action('submit')} onValidSubmit={handleSubmit}>
      <FormItem required label="Name">
        <Input
          name="name"
          value="wmzy"
          validations="minLength:4"
          validationError="minLength:4"
          required
        />
      </FormItem>
      <FormItem required label="Sports">
        <Select name="sports" placeholder="select" tags
          required
        >
          <Option key="swim" value="swim">
            swim
          </Option>
          <Option key="football" value="football">
            football
          </Option>
        </Select>
      </FormItem>
      <FormItem required label="Gender">
        <RadioGroup name="gender" value="m">
          <Radio value="m">Man</Radio>
          <Radio value="f">female</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem required label="Fruit">
        <RadioGroup name="fruit" options={plainOptions} value={plainOptions[1]} />
      </FormItem>
      <FormItem required label="About">
        <TextArea
          name="about"
          rows={4}
          value="..."
        />
      </FormItem>
      <FormItem required label="Slider">
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
  .add('basic', BasicForm, {info: 'Basic usage'});
