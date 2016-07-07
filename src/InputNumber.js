import React, {PropTypes} from 'react';
import {HOC} from 'formsy-react';
import {InputNumber} from 'antd';

function FormsyInputNumber(props) {
  return (
    <InputNumber
      {...props}
      value={props.getValue()}
      onChange={props.setValue}
    />
  );
}

FormsyInputNumber.propTypes = {
  setValue: PropTypes.func.isRequired,
  getValue: PropTypes.func.isRequired
};

export default HOC(FormsyInputNumber);
