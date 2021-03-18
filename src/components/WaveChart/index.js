import React, {PureComponent} from 'react'
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';

import './index.css'


import {connect} from 'react-redux'

import {AtualizarLineChart} from '../../store/actions/opinions'

import {
  AreaChart, Area, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';



import Filtros from '../../Filtros'








class LChart extends PureComponent {
  
  constructor(props){
    super(props)
    this.state = {
      data: [{
        name: 'Page A', RedesSociais: 4000, SitesEspecializados: 2400, Web: 2400,
      },
      {
        name: 'Page B', RedesSociais: 3000, SitesEspecializados: 1398, Web: 2210,
      },
      {
        name: 'Page C', RedesSociais: 2000, SitesEspecializados: 9800, Web: 2290,
      },
      {
        name: 'Page D', RedesSociais: 2780, SitesEspecializados: 3908, Web: 2000,
      },
      {
        name: 'Page E', RedesSociais: 1890, SitesEspecializados: 4800, Web: 2181,
      },
      {
        name: 'Page F', RedesSociais: 2390, SitesEspecializados: 3800, Web: 2500,
      },
      {
        name: 'Page G', RedesSociais: 3490, SitesEspecializados: 4300, Web: 2100,
      },]
    };
  }


 

  componentDidUpdate(nextProps, nextState){
 
  }
  
  

    

    render() {
        


        return (
            <div className="card">
                <div className="legenda">
                    <Badge color="secondary">
                        <Typography className="tituloCard">Estatistica</Typography>
                    </Badge>
                </div>
                <Divider />
                <ResponsiveContainer width="99%" height={250} className="responsiveGraph" strokeWidth={1}>
                <AreaChart
                  data={this.state.data}
                  
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  
                  <YAxis />
                  
                  <Area type="monotone" dataKey="RedesSociais" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Area type="monotone" dataKey="SitesEspecializados" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                  <Area type="monotone" dataKey="Web" stackId="1" stroke="#ffc658" fill="#ffc658" />
                  <Tooltip />
                  <Legend />
                </AreaChart>      
                </ResponsiveContainer>
      

            </div>
        )

    }
}


function mapActionCreatorsToProps(dispatch){
  return{
    AtualizarLineChart(opinions_by_cronology, estado_botao_filtro_principal){
          //action creator
          const action = AtualizarLineChart(opinions_by_cronology, estado_botao_filtro_principal)
          dispatch(action)
      }
  }
}

function mapStateToProps(state){
  return{
    opinions_by_cronology: state.opinions_by_cronology,
    chart_opinions: state.chart_opinions,
    estado_select_filtro_principal: state.estado_select_filtro_principal,
    estado_button_filter: state.estado_button_filter
  }
}


export default connect(mapStateToProps, mapActionCreatorsToProps)(LChart)