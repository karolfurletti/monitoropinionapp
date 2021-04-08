import React from 'react'
import './index.css'
import Drawer from '../../../components/Drawer'
import Filter from '../../../components/FilterTecnical'
import DetalhesFontes from '../../../components/DetalhesFontes'
import Grid from '@material-ui/core/Grid'
import Fontes2 from '../../../components/Fontes2/SmallVersion'
import Fontes from '../../../components/Comparacao/Fontes'
import PieChartFontsPercent from '../../../components/PieChartFontsPercent'
import moment from 'moment'
import LoadingComponent from '../../../components/LoadingComponent'
import OpinionsByCategoryPie from '../../../components/OpinionsByCategoryPie'
import { FiltroMaster } from '../../../store/actions/opinions'
import { connect } from 'react-redux'

class Analise extends React.Component {
  componentDidMount() {
    this.props.FiltroMaster(
      '1234',
      moment().subtract('weeks', 40),
      moment(),
      'geral'
    )
  }

  render() {



    return (
      <Drawer  history={this.props.history}  NavTitle="Visão Geral" option={2}>
        <LoadingComponent />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Filter />
          </Grid>
          {/* <Grid item xs={12}>
                <WaveChart></WaveChart>
            </Grid> */}
          {/* <Grid item xs={12}>
                <WaveChart></WaveChart>
            </Grid>  */}
          <Grid item md={12} sm={12}>
            <Fontes />
          </Grid>
          <Grid item md={6} sm={12}>
            <OpinionsByCategoryPie />
          </Grid>
          <Grid item md={6} sm={12}>
            <DetalhesFontes />
          </Grid>
          <Grid item md={6} sm={12}>
            <Fontes2 />
          </Grid>

          <Grid item xs={6} sm={12} md={6}>
            <PieChartFontsPercent />
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
    }
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Analise)
