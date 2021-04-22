import React from "react"
import "./index.css"
import Drawer from "../../../components/Drawer"
// começa importar os componentes aqui
import Card from "../../../components/Configuracoes/Card"
import FormularioMinhaConta from "../../../components/Configuracoes/FormularioMinhaConta"
import Grid from "@material-ui/core/Grid"
import LoadingComponent from "../../../components/LoadingComponent"
import SobrePlanos from "../../../components/Configuracoes/SobrePlanos"

const MinhaConta = () => {
  return (
    <Drawer history={this.props.history} NavTitle="Visão Geral" option={0}>
      <LoadingComponent />
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Card pagina="Minha Conta" content={<FormularioMinhaConta />} />
        </Grid>

        <Grid item xs={2}>
          <SobrePlanos
            plano="GOLD"
            text="permite 3 usuários, visualização de comentários e entrega de relatórios personalizados"
          />
        </Grid>
      </Grid>
    </Drawer>
  )
}

export default MinhaConta
