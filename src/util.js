import React, {Component, PropTypes} from 'react';
import {HOC} from 'formsy-react';

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
      const {getValue, setValue, required, ...props} = this.props;
      return (
        <OriginalComponent
          {...props}
          value={getValue() || noValue}
          onChange={setValue}
        />
      );
    }
  }

  return HOC(FormsyComponent);
}
