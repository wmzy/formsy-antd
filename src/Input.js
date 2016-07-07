import React, {Component, PropTypes} from 'react';
import {HOC} from 'formsy-react';
import {Input} from 'antd';

class FormsyInput extends Component {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired
  };

  handleChange = ({target}) => this.props.setValue(target.value);

  render() {
    return (
      <Input
        {...this.props}
        value={this.props.getValue()}
        onChange={this.handleChange}
      />
    );
  }
}

export default HOC(FormsyInput);
