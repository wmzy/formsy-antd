import React, {Component, PropTypes} from 'react';
import {Form} from 'formsy-react';
import classNames from 'classnames';

class FormEx extends Form {
  static defaultProps = {
    prefixCls: 'ant-form'
  };

  static propTypes = {
    prefixCls: React.PropTypes.string,
    inline: PropTypes.boolean,
    horizontal: PropTypes.boolean
  };

  constructor({prefixCls, inline, horizontal, className, ...props}, context) {
    const cn = classNames({
      [`${prefixCls}-horizontal`]: horizontal,
      [`${prefixCls}-inline`]: inline,
      [className]: !!className
    });
    super({...props, className: cn}, context);
  }

  render() {
    return super.render();
  }
}

export default FormEx;
