import React from 'react'
import './index.css'
import Drawer from '../../../components/Drawer'
import Fontes from '../../../components/Fontes'
import Fontes2 from '../../../components/Fontes2'
import Comentarios from '../../../components/Inicio/Comentarios'
import Filter from '../../../components/FilterTecnical'
import Recomendados from '../../../components/Recomendados'
import moment from 'moment'
import {connect} from 'react-redux'

import Grid from '@material-ui/core/Grid';

import {FiltroPrincipalDashboard} from '../../../store/actions/opinions'

import {FiltroMaster} from '../../../store/actions/opinions'

import LineChart from '../../../components/Inicio/LineChart'

import MakeInfonografico from '../../../components/MakeInfonografico'


import LoadingComponent from '../../../components/LoadingComponent'


class index  extends React.Component { 
    constructor(props){
        super(props)
    }

    

    componentDidMount(){
    
     

    }
    render(){
        
        return (    
    <div>
        <LoadingComponent></LoadingComponent>
        <MakeInfonografico></MakeInfonografico>           
    </div>
        )
    }
}

function mapActionCreatorsToProps(dispatch){
    return{
        FiltroPrincipalDashboard(estabelecimento_id,interval_init, interval_fim, category){
            //action creator
            const action = FiltroPrincipalDashboard(estabelecimento_id,interval_init, interval_fim, category)
            dispatch(action)
        },
        FiltroMaster(estabelecimento_id,interval_init, interval_fim, category){
            //action creator
            const action = FiltroMaster(estabelecimento_id,interval_init, interval_fim, category)
            dispatch(action)
        }
    }
  }

function mapStateToProps(state){
    return{
        opinions_by_cronology: state.opinions_by_cronology,
    }
  }
  
  

  export default connect(mapStateToProps, mapActionCreatorsToProps)(index)
