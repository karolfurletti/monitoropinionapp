import React from 'react'
import { ValidatorComponent } from 'react-form-validator-core'
import TextField from '@material-ui/core/TextField'
import styles from './inputValidator.module.css'


class InputValidator extends ValidatorComponent {
  renderValidatorComponent() {
    /* eslint-disable no-unused-vars */
    const {
      errorCustom = '',
      error,
      errorMessages,
      validators,
      requiredError,
      helperText,
      validatorListener,
      withRequiredValidator,
      containerProps,
      ...rest
    } = this.props
    const { isValid } = this.state
    return (
      <TextField
        className={styles.input}
        {...rest}
        error={!isValid || error || !!errorCustom.length}
        helperText={
          (!isValid && this.getErrorMessage()) || helperText || errorCustom
        }
      />
    )
  }
}

export default InputValidator
