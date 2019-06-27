import React from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';
import classNames from 'classnames';

const Form = React.forwardRef(({ prefixCls = 'ant-form', layout, className, ...props }, ref) => {
  return (
    <Formsy
      ref={ref}
      {...props}
      className={classNames({[`${prefixCls}-${layout}`]: layout}, className)}
    />
  );
});

Form.propTypes = {
  ...Formsy.propTypes,
  className: PropTypes.string,
  layout: PropTypes.string,
  prefixCls: PropTypes.string
};

Form.displayName = 'FormsyAntForm';

export default Form;

