import React, {Component, PropTypes} from 'react';
import {Form} from 'antd';

const Item = Form.Item;

class FormItem extends Component {
  state = {};
  
  getChildContext() {
    return {formsyAntd: {
      emitError: this.handleError
    }};
  }

  handleError = (message) => this.setState({message});

  render() {
    return (
      <Item
        help={this.state.message}
        {...this.props}
      />
    );
  }
}

export default FormItem;
