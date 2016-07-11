import React, {PropTypes} from 'react';
import {HOC} from 'formsy-react';
import {InputNumber} from 'antd';

function FormsyInputNumber(props, context) {
  if (context.formsyAntd) {
    context.formsyAntd.emitError(props.getErrorMessage());
  }

  return (
    <InputNumber
      {...props}
      value={props.getValue()}
      onChange={props.setValue}
    />
  );
}

FormsyInputNumber.propTypes = {
  getErrorMessage: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  getValue: PropTypes.func.isRequired
};

FormsyInputNumber.contextTypes = {
  formsyAntd: PropTypes.shape({
    emitError: PropTypes.func.isRequired
  })
};

export default HOC(FormsyInputNumber);
