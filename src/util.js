import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withFormsy} from 'formsy-react';

export function omitFormsyProps(props) {
  const {
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
    ...rest
  } = props;
  return rest;
}

export function formsyComponent(OriginalComponent, noValue) {
  class FormsyComponent extends Component {
    static propTypes = {
      isPristine: PropTypes.func.isRequired,
      getErrorMessage: PropTypes.func.isRequired,
      setValue: PropTypes.func.isRequired,
      getValue: PropTypes.func.isRequired
    };

    static contextTypes = {
      formsyAntd: PropTypes.shape({
        emitError: PropTypes.func.isRequired
      })
    };

    componentWillUpdate() {
      if (this.context.formsyAntd && !this.props.isPristine()) {
        const message = this.props.getErrorMessage();
        const status = message === null ? 'success' : 'error';
        this.context.formsyAntd.emitError(message, status);
      }
    }

    render() {
      const {getValue, setValue} = this.props;
      const props = omitFormsyProps(this.props);
      return (
        <OriginalComponent
          {...props}
          value={getValue() || noValue}
          onChange={setValue}
        />
      );
    }
  }

  return withFormsy(FormsyComponent);
}
