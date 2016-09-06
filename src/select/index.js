import React, {Component, PropTypes} from 'react';
import {HOC} from 'formsy-react';
import Select from 'antd/lib/select';
import {omitFormsyProps} from '../util';

class FormsySelect extends Component {
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
    const defaultValue = (props.tags || props.multiple) ? [] : '';
    return (
      <Select
        {...props}
        value={getValue() || defaultValue}
        onChange={setValue}
      />
    );
  }
}


const HOCFormsySelect = HOC(FormsySelect);
HOCFormsySelect.Option = Select.Option;

export default HOCFormsySelect;
