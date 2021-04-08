import styles from "./Login/Login.module.css"
import React from "react"

const HeaderAuth = (props) => {

  return (
    <div  style={{alignItems: props.full ? 'flex-start' : 'flex-end' }} className={styles.link}>
      <div className={styles.login} onClick={() => props.history.push("/")}>Login</div>
      <div className={styles.cadastro} onClick={() => props.history.push("/register")}>Cadastro</div>
    </div>
  )
}

export default HeaderAuth
