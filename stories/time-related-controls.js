import React from 'react';
import _ from 'lodash/fp';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';
import { FormItem, Form, DatePicker, TimePicker } from 'formsy-antd';
import { Button } from 'antd';
import './styles.css';

const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

const withState2 = _.curry(withState);

function TimeRelatedControlsForm() {
  const handleSearch = fieldsValue => {
    const rangeValue = fieldsValue['range-picker'];
    const rangeTimeValue = fieldsValue['range-time-picker'];
    const values = {
      ...fieldsValue,
      'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
      'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
      'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
      'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
      'range-time-picker': [
        rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
        rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
      ],
      'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
    };
    action('submit')('Received values of form: ', values);
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };

  return (<div>
    <Form
      onSubmit={handleSearch}
    >
      <FormItem
        {...formItemLayout}
        label="DatePicker"
      >
        <DatePicker
          name="date-picker"
          validations="required"
          validationError="Please select time!"
        />
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="DatePicker[showTime]"
      >
        <DatePicker
          name="date-time-picker"
          validations="required"
          validationError="Please select time!"
          showTime format="YYYY-MM-DD HH:mm:ss"
        />
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="MonthPicker"
      >
        <MonthPicker
          name="month-picker"
          validations="required"
          validationError="Please select time!"
        />
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="RangePicker"
      >
        <RangePicker
          name="range-picker"
          validations="required"
          validationError="Please select time!"
        />
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="RangePicker[showTime]"
      >
        <RangePicker
          name="range-time-picker"
          validations="required"
          validationError="Please select time!"
          showTime format="YYYY-MM-DD HH:mm:ss"
        />
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="TimePicker"
      >
        <TimePicker
          name="time-picker"
          validations="required"
          validationError="Please select time!"
        />
      </FormItem>
      <FormItem
        wrapperCol={{
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 8 },
        }}
      >
        <Button type="primary" htmlType="submit">Submit</Button>
      </FormItem>
    </Form>
  </div>);
}

storiesOf('Form', module)
  .add('time-related-controls', withInfo('时间类控件')(TimeRelatedControlsForm));
