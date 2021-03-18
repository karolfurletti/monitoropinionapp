import React from 'react'
import './index.css'
import Drawer from '../../../components/Drawer'
import Filter from '../../../components/FilterTecnical'


import Grid from '@material-ui/core/Grid';


import Comentarios from '../../../components/PageComentarios/Comentarios'
import FiltroCaracteristica from '../../../components/FiltroCaracteristica'
import LoadingComponent from '../../../components/LoadingComponent'

import moment from 'moment'




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
            <Drawer NavTitle = 'Analise' option={3}>
            <LoadingComponent></LoadingComponent>
            <Grid container spacing={2}>
           <Grid item xs={12}>
               <Filter titulo="Comentários"></Filter>
           </Grid>
           <Grid item xs={12}>
               <FiltroCaracteristica></FiltroCaracteristica>
           </Grid>
           <Grid item xs={12}>

    
               
                   <Comentarios></Comentarios>
               
               
               
                   
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
        opinions_by_cronology: state.opinions_by_cronology,
    }
  }

export default connect(mapStateToProps, mapActionCreatorsToProps)(Analise)