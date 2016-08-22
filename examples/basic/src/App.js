/**
 * Created by wmzy on 16-8-18.
 */

import React, {Component} from 'react';
import {Form, FormItem, Input} from 'formsy-antd';
import {Button} from 'antd';

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
      <button type="submit">提交</button>
    </Form>)
  }
}

export default APP;
