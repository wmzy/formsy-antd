import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';
import classNames from 'classnames';

class Form extends Component {
  static defaultProps = {
    ...Formsy.defaultProps,
    prefixCls: "ant-form"
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    inline: PropTypes.bool,
    horizontal: PropTypes.bool
  };

  setRef = form => void (this.form = form);

  reset() {
    return this.form.reset();
  }

  getModel() {
    return this.form.getModel();
  }

  validationErrors(...arg) {
    return this.form.validationErrors(...arg);
  }

  updateInputsWithError(...arg) {
    return this.form.updateInputsWithError(...arg);
  }

  render() {
    const { prefixCls, inline, layout, className, ...props } = this.props;
    const cn = classNames({
      [`${prefixCls}-${layout}`]: !!layout,
      [className]: !!className
    });

    return <Formsy ref={this.setRef} {...props} className={cn} />;
  }
}

export default Form;

