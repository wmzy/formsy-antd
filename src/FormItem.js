import React, {Component, PropTypes} from 'react';
import {Form} from 'antd';

const Item = Form.Item;

class FormItem extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  state = {};

  handleError = (message) => this.setState({message});

  render() {
    const {children, ...props} = this.props;
    return (
      <Item
        help={this.state.message}
        {...props}
        onError={this.handleError}
      >
        {
          React.Children.map(children, (child) => {
            return React.cloneElement(child, {onError: this.handleError});
          })
        }
      </Item>
    );
  }
}

export default FormItem;
