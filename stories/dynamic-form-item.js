import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';
import { Input, FormItem, Form } from 'formsy-antd';
import { Button, Icon } from 'antd';
import './styles.css';

let uuid = 0;

function DynamicFieldSet({store}) {
  const remove = k => {
    const {keys} = store.state;
    // We need at least one passenger
    if (keys.length === 1) return;

    store.set({
      keys: keys.filter(key => key !== k)
    });
  };

  const add = () => {
    const {keys} = store.state;
    store.set({
      keys: keys.concat(uuid++)
    });
  };

  const handleSubmit = data => {
    action('submit')(data);
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 }
    }
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 }
    }
  };
  const {keys} = store.state;
  const formItems = keys.map((k, index) => {
    return (
      <FormItem
        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
        label={index === 0 ? 'Passengers' : ''}
        required={false}
        key={k}
      >
        <Input
          name={`names[${k}]`}
          validations="required"
          validationError="Please input passenger's name or delete this field."
          placeholder="passenger name" style={{ width: '60%', marginRight: 8 }}
        />
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            disabled={keys.length === 1}
            onClick={() => remove(k)}
          />
        ) : null}
      </FormItem>
    );
  });

  return (<div>
    <Form layout="vertical" onValidSubmit={handleSubmit}>
      <Input name="keys" value={keys} type="hidden" />
      {formItems}
      <FormItem {...formItemLayoutWithOutLabel}>
        <Button type="dashed" onClick={add} style={{ width: '60%' }}>
          <Icon type="plus" /> Add field
        </Button>
      </FormItem>
      <FormItem {...formItemLayoutWithOutLabel}>
        <Button type="primary" htmlType="submit">Submit</Button>
      </FormItem>
    </Form>
  </div>);
}

storiesOf('Form', module)
  .add(
    'dynamic-form-item',
    withState({ keys: [] })(DynamicFieldSet),
    {info: '动态增加、减少表单项。'}
  );
