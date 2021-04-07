import React from 'react'
import './index.css'
import Drawer from '../../../components/Drawer'

// começa importar os componentes aqui
import Card from '../../../components/Configuracoes/Card'
import FormularioMinhaConta from '../../../components/Configuracoes/FormularioMinhaConta'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'

import LoadingComponent from '../../../components/LoadingComponent'
import { AtualizarLoading } from '../../../store/actions/opinions'
import SobrePlanos from '../../../components/Configuracoes/SobrePlanos'

class index extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Drawer NavTitle="Visão Geral" option={0}>
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
}

function mapActionCreatorsToProps(dispatch) {
  return {
    AtualizarLoading(state) {
      // action creator
      const action = AtualizarLoading(state)
      dispatch(action)
    }
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(index)
