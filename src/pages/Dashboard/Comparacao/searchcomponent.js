import React from 'react'
import './index.css'
import Drawer from '../../../components/Drawer'
import Grid from '@material-ui/core/Grid'

import { FiltroPrincipalDashboard } from '../../../store/actions/opinions'
import { connect } from 'react-redux'
import SearchConcorrentes from '../../../components/Comparacao/SearchConcorrentes'

class Analise extends React.Component {
  render() {
    return (
      <Drawer NavTitle="Comparacao" option={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchConcorrentes history={this.props.history} />
          </Grid>
        </Grid>
      </Drawer>
    )
  }
}

function mapActionCreatorsToProps(dispatch) {
  return {
    FiltroPrincipalDashboard(filterTime, filterInterval) {
      // action creator
      const action = FiltroPrincipalDashboard(filterTime, filterInterval)
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
