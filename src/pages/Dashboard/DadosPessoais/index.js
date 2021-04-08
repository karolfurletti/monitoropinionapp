import React from 'react'
import './index.css'
import Drawer from '../../../components/Drawer'

// começa importar os componentes aqui
import Card from '../../../components/Configuracoes/Card'
import FormularioMinhaConta from '../../../components/Configuracoes/FormularioDadosPessoais'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import LoadingComponent from '../../../components/LoadingComponent'
import { AtualizarLoading } from '../../../store/actions/opinions'

class index extends React.Component {
  render() {
    return (
      <Drawer  history={this.props.history}  NavTitle="Visão Geral" option={0}>
        <LoadingComponent />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card pagina="Minha Conta" content={<FormularioMinhaConta />} />
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
