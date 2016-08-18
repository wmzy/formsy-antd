import React, {Component, PropTypes} from 'react';
import Form from 'antd/lib/form';

const Item = Form.Item;

class FormItem extends Component {
  static childContextTypes = {
    formsyAntd: PropTypes.object
  };

  state = {};

  getChildContext() {
    return {formsyAntd: {
      emitError: this.handleError
    }};
  }

  handleError = (help, validateStatus) => this.setState({help, validateStatus});

  render() {
    return (
      <Item
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default FormItem;
