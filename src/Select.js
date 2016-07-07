import React, {PropTypes} from 'react';
import {HOC} from 'formsy-react';
import {Select} from 'antd';

function FormsySelect(props) {
  return (
    <Select
      {...props}
      value={props.getValue()}
      onChange={props.setValue}
    />
  );
}

FormsySelect.propTypes = {
  setValue: PropTypes.func.isRequired,
  getValue: PropTypes.func.isRequired
};

const HOCFormsySelect = HOC(FormsySelect);
HOCFormsySelect.Option = Select.Option;

export default HOCFormsySelect;
