import React from "react"
import "./index.css"
import Drawer from "../../../components/Drawer"
import Card from "../../../components/Configuracoes/Card"
import FormularioMinhaConta from "../../../components/Configuracoes/FormularioDadosPessoais"
import Grid from "@material-ui/core/Grid"
import LoadingComponent from "../../../components/LoadingComponent"

const DadosPessoais = (props) => {
  return (
    <Drawer history={props.history} NavTitle="Visão Geral" option={0}>
      <LoadingComponent />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card pagina="Minha Conta" content={<FormularioMinhaConta />} />
        </Grid>
      </Grid>
    </Drawer>
  )
}

export default DadosPessoais
