import React, {Component, PropTypes} from 'react';
import {HOC} from 'formsy-react';
import {Select} from 'antd';

class FormsySelect extends Component {
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

  render() {
    const {getValue, setValue, required, ...props} = this.props;
    return (
      <Select
        {...props}
        value={getValue()}
        onChange={setValue}
      />
    );
  }
}


const HOCFormsySelect = HOC(FormsySelect);
HOCFormsySelect.Option = Select.Option;

export default HOCFormsySelect;
