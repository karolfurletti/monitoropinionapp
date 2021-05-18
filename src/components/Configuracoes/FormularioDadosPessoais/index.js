import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import MaskedInput from "react-text-mask"
import NumberFormat from "react-number-format"
import PropTypes from "prop-types"
import InputMasked from "../InputMasked"
import "./index.css"
import { useSelector } from "react-redux"

function TextMaskCustom(props) {
  const {
    inputRef,
    ...other
  } = props

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={["(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={"\u2000"}
      showMask
    />
  )
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
}

function NumberFormatCustom(props) {
  const {
    inputRef,
    onChange,
    ...other
  } = props

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        })
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  )
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

const FormularioMinhaConta = () => {

  const { loginModel } = useSelector((state) => state)
  const user = loginModel.user

  return (
    <form noValidate autoComplete="off">
      <div className="FormularioDadosPessoais">
        <div className="input" id="first">
          <TextField required id="standard-required" label="Nome" defaultValue={user.name} />
        </div>

        <div className="input">
          <TextField required id="standard-required" label="Sobrenome" defaultValue={user.name} />
        </div>

        <div className="input">
          <TextField required id="standard-required" label="Email" defaultValue={user.email} />
        </div>

        <div className="input-double">
          <div className="input">
            <TextField
              id="standard-password-input"
              label="Senha"
              type="password"
              autoComplete="current-password"
              required
            />
          </div>
          <div className="input">
            <TextField
              id="standard-password-input"
              label="Confirme a Senha"
              type="password"
              autoComplete="current-password"
              required
            />
          </div>
        </div>
        <div className="input">


          <InputMasked />


        </div>

        <div className="footer">
          <Button variant="contained" color="primary" className="">
            Salvar
          </Button>
        </div>


      </div>

    </form>
  )
}

export default FormularioMinhaConta
