import React from 'react'
import './index.css'
import Drawer from '../../../components/Drawer'
import Filter from '../../../components/Comparacao/FilterTecnical'
import WaveChart from '../../../components/WaveChart'
import DetalhesFontes from '../../../components/Comparacao/DetalhesFontes'
import Grid from '@material-ui/core/Grid';
import OpinionsFontesLineChart from '../../../components/OpinionsFontesLineChart'
import Sugestoes from '../../../components/Comparacao/Sugestoes'
import LineChart from '../../../components/Comparacao/LineChart'

import Fontes from '../../../components/Comparacao/Fontes'

import FiltroCaracteristica from '../../../components/FiltroCaracteristica'
import OpinionsByCategoryPie from '../../../components/OpinionsByCategoryPie'
import {FiltroMaster_Comparacao} from '../../../store/actions/opinions'
import {connect} from 'react-redux'
import LoadingComponent from '../../../components/LoadingComponent'
import moment from 'moment'
import Fontes2 from '../../../components/Comparacao/Fontes2'
import Fontes2Concorrente from '../../../components/Comparacao/Fontes2Concorrente'




class Analise extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.FiltroMaster_Comparacao('1234', this.props.concorrente_id, moment().subtract('weeks', 40), moment(), 'geral')
    }

    render(){
        return (

            

            <Drawer NavTitle = 'Comparacao' option={6}>
                <LoadingComponent></LoadingComponent>
             <Grid container spacing={2}>
            <Grid item xs={12}>
                <Filter titulo="Comparação"></Filter>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2}>
                {/* <Grid item xs={12}>
                    <Sugestoes />
                </Grid> */}
                <Grid item xs={12}>
                    <FiltroCaracteristica page="comparacao"></FiltroCaracteristica>
                </Grid>
                <Grid item xs={12}>
                    <LineChart></LineChart>
                </Grid>
                
                <Grid item xs={6}>
                    <Fontes title="Essencia do Sabor" variante="main"></Fontes>
                  
                </Grid>
                <Grid item xs={6}>
                    <Fontes title={this.props.concorrente_data.title === undefined? 'Burguer King' : this.props.concorrente_data.title} variante="concorrente"></Fontes>
                  
                </Grid>


                <Grid item xs={6}>
                    <DetalhesFontes variante="main"></DetalhesFontes>
                  
                </Grid>
                <Grid item xs={6}>
                    <DetalhesFontes variante="concorrente"></DetalhesFontes>
                  
                </Grid>


                <Grid item xs={6}>
                    <Fontes2 variante="main"></Fontes2>
                  
                </Grid>
               

                <Grid item xs={6}>
                    <Fontes2Concorrente variante="concorrente"></Fontes2Concorrente>
                  
                </Grid>
               
              

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
        FiltroMaster_Comparacao(estabelecimento_id,concorrente_id,interval_init, interval_fim, category){
            //action creator
            const action = FiltroMaster_Comparacao(estabelecimento_id,concorrente_id,interval_init, interval_fim, category)
            dispatch(action)
        }
    }
  }

function mapStateToProps(state){
    return{
        opinions_by_cronology: state.opinions_by_cronology,
        opinions_by_cronology_concorrente: state.opinions_by_cronology_concorrente,
        concorrente_id: state.concorrente_id,
        concorrente_data: state.concorrente_data
    }
  }

export default connect(mapStateToProps, mapActionCreatorsToProps)(Analise)