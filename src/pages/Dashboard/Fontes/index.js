import React from 'react'
import './index.css'
import Drawer from '../../../components/Drawer'
import Filter from '../../../components/FilterTecnical'
import WaveChart from '../../../components/WaveChart'
import DetalhesFontes from '../../../components/DetalhesFontes'
import Grid from '@material-ui/core/Grid';
import OpinionsFontesLineChart from '../../../components/OpinionsFontesLineChart'
import Fontes2 from '../../../components/Fontes2/SmallVersion'
import Fontes from '../../../components/Comparacao/Fontes'
import PieChartFontsPercent from '../../../components/PieChartFontsPercent'


import moment from 'moment'
import LoadingComponent from '../../../components/LoadingComponent'



import OpinionsByCategoryPie from '../../../components/OpinionsByCategoryPie'
import {FiltroMaster} from '../../../store/actions/opinions'
import {connect} from 'react-redux'

class Analise extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.FiltroMaster( '1234', moment().subtract('weeks', 40), moment(), 'geral')
    }

    render(){
        return (
        <Drawer NavTitle = 'Visão Geral' option={2}>
            <LoadingComponent></LoadingComponent>
             <Grid container spacing={2}>
            <Grid item xs={12}>
                <Filter></Filter>
            </Grid>
            {/* <Grid item xs={12}>
                <WaveChart></WaveChart>
            </Grid> */}
            {/* <Grid item xs={12}>
                <WaveChart></WaveChart>
            </Grid>  */}
            <Grid item md={12} sm={12}>

            <Fontes></Fontes>

            </Grid>
            <Grid item md={6} sm={12}>
                <OpinionsByCategoryPie></OpinionsByCategoryPie>
            </Grid>
            <Grid item md={6} sm={12}>
                <DetalhesFontes></DetalhesFontes>
            </Grid>
            <Grid item md={6} sm={12}>
                <Fontes2></Fontes2>
            </Grid>
    
            <Grid item xs={6} sm={12} md={6}>
                <PieChartFontsPercent></PieChartFontsPercent>
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
        }
    }
  }

function mapStateToProps(state){
    return{
    }
  }

export default connect(mapStateToProps, mapActionCreatorsToProps)(Analise)