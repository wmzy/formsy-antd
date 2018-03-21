import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withFormsy} from 'formsy-react';
import Input from 'antd/lib/input';
import {omitFormsyProps} from '../util';

class FormsyInput extends Component {
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

  handleChange = ({target}) => this.props.setValue(target.value);

  render() {
    const {getValue} = this.props;
    const props = omitFormsyProps(this.props);
    return (
      <Input
        {...props}
        value={getValue() || ''}
        onChange={this.handleChange}
      />
    );
  }
}

export default withFormsy(FormsyInput);
