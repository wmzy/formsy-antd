/**
 * Created by wmzy on 16-8-18.
 */

import React, {Component} from 'react';
import {Form, FormItem, Input, Select} from 'formsy-antd';
import {Button} from 'antd';

class APP extends Component {
  handleSubmit = (model) => {
    console.log(model)
  };

  render() {
    return (<Form onSubmit={this.handleSubmit}>
      <FormItem
        label="name"
      >
        <Input
          name="name"
          value="wmzy"
          validations="minLength:4"
          validationsError="minLength:4"
          required
        />
      </FormItem>
      <Button type="primary">tt</Button>
      <button type="submit">提交</button>
    </Form>)
  }
}

export default APP;
