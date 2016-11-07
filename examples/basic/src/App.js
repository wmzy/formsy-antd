/**
 * Created by wmzy on 16-8-18.
 */

import React, {Component} from 'react';
import {Form, FormItem, Input, Select, Slider} from 'formsy-antd';
import {Button} from 'antd';

const Option = Select.Option;

class APP extends Component {
  state = {};

  handleSubmit = (model) => {
    this.setState({model})
  };

  render() {
    const {model} = this.state;
    return (<div>
      <Form onSubmit={this.handleSubmit}>
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
        <FormItem
          required
          label="slider"
        >
          <Slider
            name="slider"
            min={0}
            max={100}
            step={1}
            marks={{0: '0', 100: '100'}}
          />
        </FormItem>
        <button type="submit">提交</button>
      </Form>
      <h3>model:</h3>
      <p>
        <pre><code>
          {JSON.stringify(model, null, '  ')}
        </code></pre>
      </p>
    </div>)
  }
}

export default APP;
