import React, {PropTypes} from 'react';
import {HOC} from 'formsy-react';
import {Select} from 'antd';

function FormsySelect(props) {
  if (context.formsyAntd) {
    context.formsyAntd.emitError(props.getErrorMessage());
  }

  return (
    <Select
      {...props}
      value={props.getValue()}
      onChange={props.setValue}
    />
  );
}

FormsySelect.propTypes = {
  getErrorMessage: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  getValue: PropTypes.func.isRequired
};

FormsySelect.contenxtTypes = {
  formsyAntd: PropTypes.shape({
    emitError: PropTypes.func.isRequired
  })
};

const HOCFormsySelect = HOC(FormsySelect);
HOCFormsySelect.Option = Select.Option;

export default HOCFormsySelect;
