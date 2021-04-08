import React from 'react'
import './index.css'
import Drawer from '../../../components/Drawer'
import Filter from '../../../components/Comparacao/FilterTecnical'
import DetalhesFontes from '../../../components/Comparacao/DetalhesFontes'
import Grid from '@material-ui/core/Grid'
import LineChart from '../../../components/Comparacao/LineChart'
import Fontes from '../../../components/Comparacao/Fontes'
import FiltroCaracteristica from '../../../components/FiltroCaracteristica'
import { filterMasterComparation } from '../../../store/actions/opinions'
import { connect } from 'react-redux'
import LoadingComponent from '../../../components/LoadingComponent'
import moment from 'moment'
import Fontes2 from '../../../components/Comparacao/Fontes2'
import Fontes2Concorrente from '../../../components/Comparacao/Fontes2Concorrente'

class Analise extends React.Component {
  componentDidMount() {
    this.props.filterMasterComparation(
      '1234',
      this.props.concorrente_id,
      moment().subtract('weeks', 40),
      moment(),
      'geral'
    )
  }

  render() {
    return (
      <Drawer  history={this.props.history}  NavTitle="Comparacao" option={6}>
        <LoadingComponent />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Filter titulo="Comparação" />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {/* <Grid item xs={12}>
                    <Sugestoes />
                </Grid> */}
              <Grid item xs={12}>
                <FiltroCaracteristica page="comparacao" />
              </Grid>
              <Grid item xs={12}>
                <LineChart />
              </Grid>

              <Grid item xs={6}>
                <Fontes title="Essencia do Sabor" variante="main" />
              </Grid>
              <Grid item xs={6}>
                <Fontes
                  title={
                    this.props.concorrente_data.title === undefined
                      ? 'Burguer King'
                      : this.props.concorrente_data.title
                  }
                  variante="concorrente"
                />
              </Grid>

              <Grid item xs={6}>
                <DetalhesFontes variante="main" />
              </Grid>
              <Grid item xs={6}>
                <DetalhesFontes variante="concorrente" />
              </Grid>

              <Grid item xs={6}>
                <Fontes2 variante="main" />
              </Grid>

              <Grid item xs={6}>
                <Fontes2Concorrente variante="concorrente" />
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
    filterMasterComparation(
      estabelecimentoId,
      competitorId,
      intervalInit,
      intervalEnd,
      category
    ) {
      // action creator
      const action = filterMasterComparation(
        estabelecimentoId,
        competitorId,
        intervalInit,
        intervalEnd,
        category
      )
      dispatch(action)
    }
  }
}

function mapStateToProps(state) {
  return {
    opinions_by_cronology: state.opinions_by_cronology,
    opinions_by_cronology_concorrente: state.opinions_by_cronology_concorrente,
    concorrente_id: state.concorrente_id,
    concorrente_data: state.concorrente_data
  }
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Analise)
