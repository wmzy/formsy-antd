import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';
import classNames from 'classnames';

class Form extends Component {
  static defaultProps = {
    ...Formsy.defaultProps,
    prefixCls: 'ant-form'
  };

  static propTypes = {
    className: PropTypes.string,
    layout: PropTypes.string,
    prefixCls: PropTypes.string
  };

  setRef = form => void (this.form = form);

  reset() {
    return this.form.reset();
  }

  submit() {
    return this.form.submit();
  }

  getModel() {
    return this.form.getModel();
  }

  updateInputsWithError(...arg) {
    return this.form.updateInputsWithError(...arg);
  }

  render() {
    const { prefixCls, layout, className, ...props } = this.props;
    const cn = classNames({
      [`${prefixCls}-${layout}`]: !!layout,
      [className]: !!className
    });

    return <Formsy ref={this.setRef} {...props} className={cn} />;
  }
}

export default Form;

