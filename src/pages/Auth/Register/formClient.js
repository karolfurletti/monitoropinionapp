import React, { useRef, useState, useEffect } from "react"
import styles from "./formClient.module.css"
import { ValidatorForm } from "react-form-validator-core"
import InputValidator from "../../../components/InputValidator/inputValidator"
import { rules } from "../../../utils/feedback"
import { phoneMask } from "../../../utils/mask"
import Button from "@material-ui/core/Button"

const FormClient = (props) => {

  const { dados } = props
  const form = useRef(null)
  const [name, setName] = useState(dados.name || "")
  const [email, setEmail] = useState(dados.email || "")
  const [password, setPassword] = useState(dados.password || "")
  const [passwordTwo, setPasswordTwo] = useState(dados.password || "")
  const [phone, setPhone] = useState(dados.phone || "")


  useEffect(() => {
    customRulesInput()
    // eslint-disable-next-line
  }, [password, passwordTwo])

  const customRulesInput = () => {
    ValidatorForm.addValidationRule("isPasswordEquals", (value) => {
      if (!passwordTwo.length) return true
      if (passwordTwo !== value) {
        return false
      }
      form.current.childs[3].makeValid()
      return true
    })

    ValidatorForm.addValidationRule(
      "isConfirmPasswordEquals",
      (value) => {
        if (password !== value) {
          return false
        }
        form.current.childs[2].makeValid()
        return true
      }
    )
  }

  const submit = () => {
    const formClient = {
      name,
      email,
      password,
      phone
    }
    props.nextTab(formClient)
  }

  return (
    <div className={styles.content}>

      <ValidatorForm
        style={{ width: "100%" }}
        ref={form}
        onSubmit={submit}
        onError={(errors) => console.log(errors)}
      >
        <InputValidator
          label={"Nome"}
          onChange={(e) => {
            setName(e.target.value)
          }}
          name="email"
          value={name}
          validators={["required"]}
          errorMessages={[rules.required]}
        />

        <InputValidator
          label={"Email"}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          name="email"
          value={email}
          validators={["required", "isEmail"]}
          errorMessages={[rules.required, rules.email]}
        />

        <InputValidator
          label={"Senha"}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          name="password"
          value={password}
          validators={["required", "isPasswordEquals"]}
          errorMessages={[rules.required, rules.equalPassword]}
        />

        <InputValidator
          label={"Confirmar Senha"}
          onChange={(e) => {
            setPasswordTwo(e.target.value)
          }}
          name="email"
          value={passwordTwo}
          validators={["required", "isConfirmPasswordEquals"]}
          errorMessages={[rules.required, rules.equalPassword]}
        />

        <InputValidator
          label={"Telefone"}
          onChange={(e) => {
            setPhone(phoneMask(e.target.value))
          }}
          name="phone"
          value={phone}
          inputProps={{ maxLength: 14 }}
          validators={["required", "minStringLength:14"]}
          errorMessages={[rules.required, rules.phone]}
        />

        <div className={styles.containerBtn}>
          <Button
            disabled={props.disabled}
            type={"submit"}
            style={{
              backgroundColor: "#744D9C",
              color: "white",
              width: 225,
              borderRadius: 50
            }}
            className={styles.button}
            size="medium"
            variant="contained"
          >
            PRÓXIMA ETAPA
          </Button>
        </div>

      </ValidatorForm>
    </div>
  )
}

export default FormClient
