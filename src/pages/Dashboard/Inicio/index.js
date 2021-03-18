import React from 'react'
import './index.css'
import Drawer from '../../../components/Drawer'
import Fontes from '../../../components/Comparacao/Fontes'
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

import LoadingComponent from '../../../components/LoadingComponent'
import {AtualizarLoading} from '../../../store/actions/opinions'



class index  extends React.Component { 
    constructor(props){
        super(props)
    }

    componentDidMount(){
    
        this.props.FiltroMaster( '1234', moment().subtract('weeks', 40), moment(), 'geral')
        this.props.AtualizarLoading(false)

    }
    render(){
        
        return (
            
    <Drawer NavTitle = 'Visão Geral' option={0}>
    <LoadingComponent></LoadingComponent>
        <Grid container spacing={2}>
        <Grid item xs={12}>
                <Filter titulo="Visão Geral" ></Filter>
            </Grid>
            <Grid item xs={12}>
                <LineChart></LineChart>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Comentarios></Comentarios>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Fontes></Fontes>
            </Grid>
            <Grid item xs={6} sm={12} md={6}>
              <Recomendados></Recomendados>
            </Grid>
            <Grid item xs={6} sm={12} md={6}>
            <Fontes2></Fontes2>
            </Grid>
            <Grid item xs={6} sm={3}>
              
            </Grid>
            <Grid item xs={6} sm={3}>
              
            </Grid>
        </Grid>            
        </Drawer>
    )
    
    }
}

function mapActionCreatorsToProps(dispatch){
    return{
        FiltroMaster(estabelecimento_id,interval_init, interval_fim, category){
            //action creator
            const action = FiltroMaster(estabelecimento_id,interval_init, interval_fim, category)
            dispatch(action)
        },
        AtualizarLoading(state){
            //action creator
            const action = AtualizarLoading(state)
            dispatch(action)
        },
    }
  }

function mapStateToProps(state){
    return{
        opinions_by_cronology: state.opinions_by_cronology,
    }
  }
  
  

  export default connect(mapStateToProps, mapActionCreatorsToProps)(index)
