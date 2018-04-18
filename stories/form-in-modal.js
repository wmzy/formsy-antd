import React from 'react';
import _ from 'lodash/fp';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';
import { Input, RadioGroup, FormItem, Form } from 'formsy-antd';
import { Modal, Button, Radio } from 'antd';
import './styles.css';

const withState2 = _.curry(withState);

function CollectionCreateForm(store) {
  let form;
  const showModal = () => {
    store.set({ visible: true });
  };
  const handleCancel = () => {
    store.set({ visible: false });
  };
  const handleCreate = () => {
    form.submit();
  };
  const handleSubmit = (data, reset) => {
    action('Received values of form: ')(form.getModel());
    reset();
    store.set({ visible: false });
  };
  const saveFormRef = formRef => {
    form = formRef;
  };

  return (<div>
    <Button type="primary" onClick={showModal}>New Collection</Button>
    <Modal
      visible={store.state.visible}
      title="Create a new collection"
      okText="Create"
      onCancel={handleCancel}
      onOk={handleCreate}
    >
      <Form layout="vertical" ref={saveFormRef} onValidSubmit={handleSubmit}>
        <FormItem label="Title">
          <Input
            name="title"
            validations="required"
            validationError="Please input the title of collection!"
          />
        </FormItem>
        <FormItem label="Description">
          <Input name="description" type="textarea" />
        </FormItem>
        <FormItem className="collection-create-form_last-form-item">
          <RadioGroup name="modifier" value="public">
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </RadioGroup>
        </FormItem>
      </Form>
    </Modal>
  </div>);
}

storiesOf('Form', module)
  .add('form-in-modal', _.pipe(
    withInfo('当用户访问一个展示了某个列表的页面，想新建一项但又不想跳转页面时，可以用 Modal 弹出一个表单，用户填写必要信息后创建新的项。'),
    withState2({ visible: false })
  )(CollectionCreateForm));
