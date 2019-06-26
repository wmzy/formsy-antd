import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FormItem, Form } from 'formsy-antd';
import { formsyComponent } from 'formsy-antd/src/util';
import { Input, Select, Button } from 'antd';
import './styles.css';

const Option = Select.Option;

class PriceInput extends React.Component {
  constructor(props) {
    super(props);

    // eslint-disable-next-line
    const value = props.value || {};
    this.state = {
      number: value.number || 0,
      currency: value.currency || 'rmb'
    };
  }
  componentWillReceiveProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      const value = nextProps.value;
      this.setState(value);
    }
  }
  /* eslint-disable no-undef */
  handleNumberChange = ev => {
    const number = parseInt(ev.target.value || 0, 10);
    if (isNaN(number)) {
      return;
    }
    if (!('value' in this.props)) {
      this.setState({ number });
    }
    this.triggerChange({ number });
  };
  handleCurrencyChange = currency => {
    if (!('value' in this.props)) {
      this.setState({ currency });
    }
    this.triggerChange({ currency });
  };
  triggerChange = changedValue => {
    // Should provide an event to pass value to Form.
    // eslint-disable-next-line
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue));
    }
  };
  /* eslint-enable no-undef */

  render() {
    // eslint-disable-next-line
    const { size } = this.props;
    const state = this.state;
    return (
      <span>
        <Input
          type="text"
          size={size}
          value={state.number}
          onChange={this.handleNumberChange}
          style={{ width: '65%', marginRight: '3%' }}
        />
        <Select
          value={state.currency}
          size={size}
          style={{ width: '32%' }}
          onChange={this.handleCurrencyChange}
        >
          <Option value="rmb">RMB</Option>
          <Option value="dollar">Dollar</Option>
        </Select>
      </span>
    );
  }
}

const FormsyPriceInput = formsyComponent(PriceInput);

function CustomizedFormControlsForm() {
  const handleSubmit = data => {
    action('submit')('Received values of form: ', data);
  };

  const checkPrice = (_, value) => {
    return value.number > 0 || 'Price must greater than zero!';
  };

  return (<div>
    <Form
      onSubmit={handleSubmit}
      layout="inline"
    >
      <FormItem label="Price">
        <FormsyPriceInput
          name="price"
          value={{ number: 0, currency: 'rmb' }}
          validations={{checkPrice: checkPrice}}
        />
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit">Submit</Button>
      </FormItem>
    </Form>
  </div>);
}

storiesOf('Form', module)
  .add('customized-form-controls', CustomizedFormControlsForm, {info: '自定义表单控件'});
