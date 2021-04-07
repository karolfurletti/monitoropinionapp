import React from 'react'
import './index.css'
import { connect } from 'react-redux'
import {
  FiltroPrincipalDashboard,
  FiltroMaster
} from '../../../store/actions/opinions'
import MakeInfonografico from '../../../components/MakeInfonografico'
import LoadingComponent from '../../../components/LoadingComponent'
class index extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <LoadingComponent />
        <MakeInfonografico />
      </div>
    )
  }
}

function mapActionCreatorsToProps(dispatch) {
  return {
    FiltroPrincipalDashboard(
      estabelecimentoId,
      intervalInit,
      intervalEnd,
      category
    ) {
      // action creator
      const action = FiltroPrincipalDashboard(
        estabelecimentoId,
        intervalInit,
        intervalEnd,
        category
      )
      dispatch(action)
    },
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
  return {
    opinions_by_cronology: state.opinions_by_cronology
  }
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(index)
