import React, {Component, PropTypes} from 'react';
import {HOC} from 'formsy-react';
import {Input} from 'antd';

class FormsyInput extends Component {
  static propTypes = {
    getErrorMessage: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired
  };

  static contextTypes = {
    formsyAntd: PropTypes.shape({
      emitError: PropTypes.func.isRequired
    })
  };

  componentWillUpdate() {
    if (this.context.formsyAntd) {
      this.context.formsyAntd.emitError(this.props.getErrorMessage());
    }
  }

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
