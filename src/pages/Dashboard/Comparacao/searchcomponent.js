import React from 'react'
import './index.css'
import Drawer from '../../../components/Drawer'
import Filter from '../../../components/FilterTecnical'
import WaveChart from '../../../components/WaveChart'
import DetalhesFontes from '../../../components/DetalhesFontes'
import Grid from '@material-ui/core/Grid';
import OpinionsFontesLineChart from '../../../components/OpinionsFontesLineChart'
import Sugestoes from '../../../components/Comparacao/Sugestoes'
import LineChart from '../../../components/Comparacao/LineChart'

import Fontes from '../../../components/Comparacao/Fontes'

import FiltroCaracteristica from '../../../components/FiltroCaracteristica'
import OpinionsByCategoryPie from '../../../components/OpinionsByCategoryPie'
import {FiltroPrincipalDashboard} from '../../../store/actions/opinions'
import {connect} from 'react-redux'
import SearchConcorrentes from '../../../components/Comparacao/SearchConcorrentes'






class Analise extends React.Component {
    



    constructor(props){
        super(props)
    }

 

    render(){

       
        return (

            

            <Drawer NavTitle = 'Comparacao' option={6}>
             <Grid container spacing={2}>
            <Grid item xs={12}>
                <SearchConcorrentes history={this.props.history}></SearchConcorrentes>
            </Grid>
            
            <Grid item xs={12}>
                <Grid container spacing={3}>
                {/* <Grid item xs={12}>
                    <Sugestoes />
                </Grid>
                */}
             
               
              

                <Grid item xs={12}>
                 
                </Grid>
                
                
                    
                </Grid>
            </Grid>
           
        </Grid>            
        </Drawer>




    )
 }
}
function mapActionCreatorsToProps(dispatch){
    return{
        FiltroPrincipalDashboard(filter_time, filter_interval){
            //action creator
            const action = FiltroPrincipalDashboard(filter_time, filter_interval)
            dispatch(action)
        }
    }
  }

function mapStateToProps(state){
    return{
        opinions_by_cronology: state.opinions_by_cronology,
    }
  }

export default connect(mapStateToProps, mapActionCreatorsToProps)(Analise)