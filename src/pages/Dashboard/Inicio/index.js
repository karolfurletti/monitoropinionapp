import React from 'react'
import './index.css'
import Drawer from '../../../components/Drawer'
import Fontes from '../../../components/Comparacao/Fontes'
import Fontes2 from '../../../components/Fontes2'
import Comentarios from '../../../components/Inicio/Comentarios'
import Filter from '../../../components/FilterTecnical'
import Recomendados from '../../../components/Recomendados'
import moment from 'moment'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import { FiltroMaster, AtualizarLoading } from '../../../store/actions/opinions'
import LineChart from '../../../components/Inicio/LineChart'
import LoadingComponent from '../../../components/LoadingComponent'

class index extends React.Component {
  componentDidMount() {
    this.props.FiltroMaster(
      '1234',
      moment().subtract('weeks', 40),
      moment(),
      'geral'
    )
    this.props.AtualizarLoading(false)
  }

  render() {
    return (
      <Drawer NavTitle="Visão Geral" option={0}>
        <LoadingComponent />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Filter titulo="Visão Geral" />
          </Grid>
          <Grid item xs={12}>
            <LineChart />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Comentarios />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Fontes />
          </Grid>
          <Grid item xs={6} sm={12} md={6}>
            <Recomendados />
          </Grid>
          <Grid item xs={6} sm={12} md={6}>
            <Fontes2 />
          </Grid>
          <Grid item xs={6} sm={3} />
          <Grid item xs={6} sm={3} />
        </Grid>
      </Drawer>
    )
  }
}

function mapActionCreatorsToProps(dispatch) {
  return {
    FiltroMaster(estabelecimentoId, intervalInit, intervalEnd, category) {
      // action creator
      const action = FiltroMaster(
        estabelecimentoId,
        intervalInit,
        intervalEnd,
        category
      )
      dispatch(action)
    },
    AtualizarLoading(state) {
      // action creator
      const action = AtualizarLoading(state)
      dispatch(action)
    }
  }
}

function mapStateToProps(state) {
  return {
    opinions_by_cronology: state.opinions_by_cronology
  }
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(index)
