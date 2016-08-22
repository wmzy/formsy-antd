import React, {Component, PropTypes} from 'react';
import {HOC} from 'formsy-react';
import Switch from 'antd/lib/switch';
import {omitFormsyProps} from '../util';

class FormsySwitch extends Component {
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

  render() {
    const {getValue, setValue} = this.props;
    const props = omitFormsyProps(this.props);
    return (
      <Switch
        {...props}
        checked={getValue() || false}
        onChange={setValue}
      />
    );
  }
}

export default HOC(FormsySwitch);
