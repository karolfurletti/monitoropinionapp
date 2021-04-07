import React from 'react'
import './index.css'
import Drawer from '../../../components/Drawer'
import Filter from '../../../components/FilterTecnical'
import moment from 'moment'
import Grid from '@material-ui/core/Grid'
import Fontes from '../../../components/Comparacao/Fontes'
import Comentarios from '../../../components/Inicio/Comentarios'
import FiltroCaracteristica from '../../../components/FiltroCaracteristica'
import { FiltroMaster, AtualizarLoading } from '../../../store/actions/opinions'
import LineChart from '../../../components/Inicio/LineChart'
import { connect } from 'react-redux'
import LoadingComponent from '../../../components/LoadingComponent'
import Fontes2 from '../../../components/Fontes2/SmallVersion'
import DetalhesFontes from '../../../components/DetalhesFontes'

class Analise extends React.Component {
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
      <Drawer NavTitle="Analise" option={1}>
        <LoadingComponent />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Filter titulo="Análise" />
          </Grid>
          <Grid item xs={12}>
            <FiltroCaracteristica />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <LineChart />
              </Grid>

              <Grid item xs={6}>
                <Comentarios />
              </Grid>
              <Grid item xs={6}>
                <Fontes />
              </Grid>
              <Grid item xs={6} sm={12} md={6}>
                <DetalhesFontes />
              </Grid>
              <Grid item xs={6} sm={12} md={6}>
                <Fontes2 />
              </Grid>
            </Grid>
          </Grid>
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

export default connect(mapStateToProps, mapActionCreatorsToProps)(Analise)
