import React from 'react';
import _ from 'lodash/fp';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';
import { Input, FormItem, Form } from 'formsy-antd';
import { Row, Col, Icon, Button } from 'antd';
import './styles.css';

function AdvancedSearchForm({store}) {
  const handleSearch = data => {
    action('submit')(data);
  };

  const toggle = () => {
    const { expand } = store.state;
    store.set({ expand: !expand });
  };

  function getFields() {
    const count = store.state.expand ? 10 : 6;
    const children = [];
    for (let i = 0; i < 10; i++) {
      children.push(
        <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
          <FormItem label={`Field ${i}`} required>
            <Input
              name={`field-${i}`}
              validations="required"
              validationError="Please input your nickname!"
              placeholder="placeholder"
            />
          </FormItem>
        </Col>
      );
    }
    return children;
  }

  return (<div>
    <Form
      className="ant-advanced-search-form"
      onSubmit={handleSearch}
      style={{
        padding: '24px',
        background: '#fbfbfb',
        border: '1px solid #d9d9d9',
        borderRadius: '6px'
      }}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">Search</Button>
          <Button style={{ marginLeft: 8 }} htmlType="reset">Clear</Button>
          <a style={{ marginLeft: 8, fontSize: 12 }} onClick={toggle}>
            Collapse <Icon type={store.state.expand ? 'up' : 'down'} />
          </a>
        </Col>
      </Row>
    </Form>
    <div className="search-result-list">Search Result List</div>
  </div>);
}

storiesOf('Form', module)
  .add('advanced-search', _.pipe(
    withInfo('三列栅格式的表单排列方式，常用于数据表格的高级搜索。'),
    withState({ expand: false })
  )(AdvancedSearchForm));
