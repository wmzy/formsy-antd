/**
 * Created by wmzy on 16-8-18.
 */

import React, {Component} from 'react';
import {Form, FormItem, Input, Select} from 'formsy-antd';
import {Button} from 'antd';

const Option = Select.Option;

class APP extends Component {
  handleSubmit = (model) => {
    console.log(model)
  };

  render() {
    return (<Form onSubmit={this.handleSubmit}>
      <FormItem
        required
        label="name"
      >
        <Input
          name="name"
          value="wmzy"
          validations="minLength:4"
          validationError="minLength:4"
          required
        />
      </FormItem>
      <FormItem
        required
        label="sports"
      >
        <Select
          name="sports"
          placeholder="select"
          tags
          required
        >
          <Option key="swim" value="swim">swim</Option>
          <Option key="football" value="football">football</Option>
        </Select>
      </FormItem>
      <button type="submit">提交</button>
    </Form>)
  }
}

export default APP;
