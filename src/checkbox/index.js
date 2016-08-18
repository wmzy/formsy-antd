import React, {Component, PropTypes} from 'react';
import {HOC} from 'formsy-react';
import Checkbox from 'antd/lib/checkbox';

class FormsyCheckbox extends Component {
  static propTypes = {
    isPristine: PropTypes.func.isRequired,
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
    if (this.context.formsyAntd && !this.props.isPristine()) {
      const message = this.props.getErrorMessage();
      const status = message === null ? 'success' : 'error';
      this.context.formsyAntd.emitError(message, status);
    }
  }

  handleChange = ({target}) => this.props.setValue(target.checked);

  render() {
    const {required, getValue, ...props} = this.props;
    return (
      <Checkbox
        {...props}
        checked={getValue() || false}
        onChange={this.handleChange}
      />
    );
  }
}

export default HOC(FormsyCheckbox);
