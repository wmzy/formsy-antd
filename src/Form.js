import React, {Component, PropTypes} from 'react';
import {Form} from 'formsy-react';
import classNames from 'classnames';

class FormEx extends Form {
  static defaultProps = {
    ...Form.defaultProps,
    prefixCls: 'ant-form'
  };

  static propTypes = {
    prefixCls: React.PropTypes.string,
    inline: PropTypes.boolean,
    horizontal: PropTypes.boolean
  };

  render() {
    const form = super.render();
    const {prefixCls, inline, horizontal, className, ...props} = form.props;
    const cn = classNames({
      [`${prefixCls}-horizontal`]: horizontal,
      [`${prefixCls}-inline`]: inline,
      [className]: !!className
    });

    return React.cloneElement(form, {...props, className: cn});
  }
}

export default FormEx;
