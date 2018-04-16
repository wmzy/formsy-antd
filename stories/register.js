import React from 'react';
import _ from 'lodash/fp';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';
import { Input, FormItem, Form, Checkbox, Select, AutoComplete, Cascader } from 'formsy-antd';
import { Row, Col, Icon, Button, Tooltip } from 'antd';

const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const withState2 = _.curry(withState);

function RegistrationForm(store) {
  const residences = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
          value: 'xihu',
          label: 'West Lake'
        }]
      }]
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
          value: 'zhonghuamen',
          label: 'Zhong Hua Men'
        }]
      }]
    }
  ];

  const handleSubmit = data => {
    action('submit')(data);
  };

  const handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    store.set({ autoCompleteResult });
  };

  const { autoCompleteResult } = store.state;
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
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 8
      }
    }
  };
  const prefixSelector = (
    <Select name="prefix" value="86" style={{ width: 70 }}>
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  );

  const websiteOptions = autoCompleteResult.map(website => (
    <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
  ));

  return (
    <Form onSubmit={handleSubmit} style={{maxWidth: '600px'}}>
      <FormItem
        {...formItemLayout}
        label="E-mail"
      >
        <Input name="email"
          validations="isEmail,required"
          validationErrors={{
            isEmail: 'The input is not valid E-mail!',
            required: 'Please input your E-mail!'
          }}
        />
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Password"
      >
        <Input type="password" name="password"
          validations="required"
          validationError="Please input your password!"
        />
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Confirm Password"
      >
        <Input type="password" name="confirm"
          validations="required,equalsField:password"
          validationErrors={{
            required: 'Please confirm your password!',
            equalsField: 'Two passwords that you enter is inconsistent!!'
          }}
        />
      </FormItem>
      <FormItem
        {...formItemLayout}
        label={(
          <span>
            Nickname&nbsp;
            <Tooltip title="What do you want others to call you?">
              <Icon type="question-circle-o" />
            </Tooltip>
          </span>
        )}
      >
        <Input name="nickname"
          validations="required"
          validationError="Please input your nickname!"
        />
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Habitual Residence"
      >
        <Cascader name="residence"
          value={['zhejiang', 'hangzhou', 'xihu']}
          options={residences}
        />
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Phone Number"
      >
        <Input name="phone"
          addonBefore={prefixSelector} style={{ width: '100%' }}
          validations="minLength:1"
          validationError="Please input your phone number!"
        />
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Website"
      >
        <AutoComplete
          name="website"
          validations="required"
          validationError="Please input website!"
          dataSource={websiteOptions}
          onChange={handleWebsiteChange}
          placeholder="website"
        />
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Captcha"
        extra="We must make sure that your are a human."
      >
        <Row gutter={8}>
          <Col span={12}>
            <Input name="captcha"
              validations="required"
              validationError="Please input the captcha you got!"
            />
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </FormItem>
      <FormItem {...tailFormItemLayout}>
        <Checkbox name="agreement">I have read the <a href="">agreement</a></Checkbox>
      </FormItem>
      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">Register</Button>
      </FormItem>
    </Form>
  );
}

storiesOf('Form', module)
  .add('register', _.pipe(
    withInfo('用户填写必须的信息以注册新用户。'),
    withState2({ confirmDirty: false, autoCompleteResult: [] })
  )(RegistrationForm));
