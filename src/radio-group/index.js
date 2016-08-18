import React, {Component, PropTypes} from 'react';
import {HOC} from 'formsy-react';
import Radio from 'antd/lib/radio';

const RadioGroup = Radio.Group;

class FormsyRadioGroup extends Component {
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

  handleChange = ({target}) => this.props.setValue(target.value);

  render() {
    const {required, getValue, ...props} = this.props;
    return (
      <RadioGroup
        {...props}
        value={getValue() || null}
        onChange={this.handleChange}
      />
    );
  }
}

export default HOC(FormsyRadioGroup);
