import React, { useRef, useState } from "react"
import styles from "./formClient.module.css"
import { ValidatorForm } from "react-form-validator-core"
import InputValidator from "../../../components/InputValidator/inputValidator"
import { rules } from "../../../utils/feedback"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import Button from "@material-ui/core/Button"

const segments = [
  { name: "Churrascaria" },
  { name: "Doceria" },
  { name: "Hamburgueria" },
  { name: "Pizzaria" },
  { name: "Pastelaria" },
  { name: "Sushi" },
  { name: "Sorveteria" }
]

const cargos = [
  { name: "Diretor" },
  { name: "Gerente" },
  { name: "Comercial" },
  { name: "Administrador" },
  { name: "Proprietario" }
]

const FormCompany = (props) => {

  const form = useRef(null)
  const [company, setCompany] = useState()
  const [cnpj, setCnpj] = useState()
  const [segment, setSegment] = useState()
  const [cargo, setCargo] = useState()

  const submit = () => {
    const objCompany = {
      company,
      cnpj,
      segment,
      cargo
    }
    props.saveRegister(objCompany)
  }

  const changeSegment = (evt) => {
    setSegment(evt.target.value)
  }

  const changeCargo = (evt) => {
    setCargo(evt.target.value)
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
          label={"Nome da empresa"}
          onChange={(e) => {
            setCompany(e.target.value)
          }}
          name="company"
          value={company}
          validators={["required"]}
          errorMessages={[rules.required]}
        />


        <InputValidator
          label={"CNPJ"}
          onChange={(e) => {
            setCnpj(e.target.value)
          }}
          name="cnpj"
          value={cnpj}
          validators={["required"]}
          errorMessages={[rules.required]}
        />


        <InputLabel style={{ marginTop: 45 }} id="demo-simple-select-label">Segmento</InputLabel>
        <Select
          defaultValue={segments[0].name}
          style={{
            width: "100%",
            marginTop: 5
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={segment}
          onChange={changeSegment}
        >
          {segments.map((item, index) => (
            <MenuItem value={item.name}>{item.name}</MenuItem>
          ))}
        </Select>

        <InputLabel style={{ marginTop: 45 }} id="demo-simple-select-label">Cargo</InputLabel>
        <Select
          defaultValue={cargos[0].name}
          style={{
            width: "100%",
            marginTop: 5
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cargo}
          onChange={changeCargo}
        >
          {cargos.map((item, index) => (
            <MenuItem value={item.name}>{item.name}</MenuItem>
          ))}
        </Select>

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
            CRIAR CONTA
          </Button>
        </div>

      </ValidatorForm>

    </div>
  )
}
export default FormCompany
