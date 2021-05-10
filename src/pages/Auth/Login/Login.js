import React, { useEffect, useRef, useState } from "react"
import styles from "./Login.module.css"
import InputAdornment from "@material-ui/core/InputAdornment"
import EmailIcon from "@material-ui/icons/Email"
import LockIcon from "@material-ui/icons/Lock"
import Snackbar from "@material-ui/core/Snackbar"
import { ValidatorForm } from "react-form-validator-core"
import { rules } from "../../../utils/feedback"
import InputValidator from "../../../components/InputValidator/inputValidator"
import Button from "@material-ui/core/Button"
import { serviceApi } from "../../../Services/api"
import { useCookies } from "react-cookie"
import CircularProgress from "@material-ui/core/CircularProgress"
import Backdrop from "@material-ui/core/Backdrop"
import {  useDispatch } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}))

const Login = (props) => {
  const classes = useStyles()
  const form = useRef(null)
  const [toast, setToast] = useState(false)
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(["email"])
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (props.history.location.toast) {
      setMessage("Conta criada com sucesso! Faça o login para acessar o sistema.")
      setToast(true)
    }
    // eslint-disable-next-line
  }, [])

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setToast(false)
  }

  const submit = () => {
    setLoading(true)
    const formData = {
      email,
      password
    }
    serviceApi.post("/login", formData).then(response => {
      const {
        type,
        message,
        user
      } = response.data
      dispatch.loginModel.setDadosUser(user[0])
      if (type === "success") {
        setCookie("email", email, { path: "/" })
        return props.history.push("/dashboard")
      }
      setLoading(false)
      setMessage(message)
      setToast(true)
    }).catch(err => {
      console.log(err)
    })
  }

  const closeLoading = () => {
    setLoading(false)
  }

  return (
    <div className={styles.container}>

      <Backdrop className={classes.backdrop} open={loading} onClick={closeLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={toast}
        onClose={handleClose}
        message={message}
      />


      <div className={styles.link}>
        <div className={styles.login} onClick={() => props.history.push("/")}>Login</div>
        <div className={styles.cadastro} onClick={() => props.history.push("/register")}>Cadastro</div>
      </div>

      <div className={styles.containerLogin}>
        <div className={styles.title}>Digite seu e-mail e sua senha</div>
        <div className={styles.card}>
          <ValidatorForm
            className={styles.form}
            ref={form}
            onSubmit={submit}
            onError={(errors) => console.log(errors)}
          >

            <div className={styles.divInput}>
              <InputValidator
                label={"Email"}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <EmailIcon style={{
                        color: "#744D9C",
                        paddingRight: 10
                      }} />
                    </InputAdornment>
                  )

                }}
                name="email"
                value={email}
                validators={["required", "isEmail"]}
                errorMessages={[rules.required, rules.email]}
              />
            </div>

            <div className={styles.divInput}>
              <InputValidator
                label={"Senha"}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type={"password"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <LockIcon style={{
                        color: "#744D9C",
                        paddingRight: 10
                      }} />
                    </InputAdornment>
                  )
                }}
                name="password"
                value={password}
                validators={["required"]}
                errorMessages={[rules.required]}
              />
            </div>

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
                ENTRAR
              </Button>
            </div>

          </ValidatorForm>

        </div>
      </div>
    </div>
  )
}
export default Login
