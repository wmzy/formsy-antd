import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';

export function omitFormsyProps(props) {
  const {
    /* eslint-disable no-unused-vars */
    setValidations,
    setValue,
    resetValue,
    getValue,
    hasValue,
    getErrorMessage,
    getErrorMessages,
    isFormDisabled,
    isValid,
    isPristine,
    isFormSubmitted,
    isRequired,
    showRequired,
    showError,
    isValidValue,
    validations,
    // required,
    validationError,
    validationErrors,
    formNoValidate,
    innerRef,
    /* eslint-enable no-unused-vars */
    ...rest
  } = props;
  return rest;
}

export function pickSubComponent(OriginalComponent) {
  const subComponents = {};
  for (const k in OriginalComponent) {
    if (k >= 'A' && k <= 'Z') {
      const fn = OriginalComponent[k];
      if (typeof fn === 'function') subComponents[k] = fn;
    }
  }
  return subComponents;
}

export function mappingChangeEvent(OriginalComponent, mapper, eventName = 'onChange') {
  return function FormsyableComponent(props) {
    const fn = props[eventName];
    const p = {
      [eventName]: fn && ((...params) => fn(mapper(...params)))
    };
    return (<OriginalComponent {...props} {...p} />);
  };
}

export function formsyComponent(OriginalComponent, noValue) {
  class FormsyComponent extends Component {
    static propTypes = {
      getErrorMessage: PropTypes.func.isRequired,
      getValue: PropTypes.func.isRequired,
      isPristine: PropTypes.func.isRequired,
      isValidValue: PropTypes.func.isRequired,
      onChange: PropTypes.func,
      setValue: PropTypes.func.isRequired
    };

    static contextTypes = {
      formsyAntd: PropTypes.shape({
        emitError: PropTypes.func.isRequired
      })
    };

    componentDidUpdate() {
      if (!this.context.formsyAntd) return;

      const {isPristine, isValidValue} = this.props;
      const message = isPristine() || isValidValue() ? null : this.props.getErrorMessage();
      if (this.message === message) return;
      this.message = message;
      const status = message === null ? 'success' : 'error';
      this.context.formsyAntd.emitError(message, status);
    }

    handleChange = (value, ...rest) => {
      const { onChange, setValue } = this.props;
      setValue(value);
      if (onChange) onChange(value, ...rest);
    }

    render() {
      const { getValue } = this.props;
      const props = omitFormsyProps(this.props);
      return (
        <OriginalComponent
          {...props}
          value={getValue() || noValue}
          onChange={this.handleChange}
        />
      );
    }
  }

  return Object.assign(withFormsy(FormsyComponent), pickSubComponent(OriginalComponent));
}
