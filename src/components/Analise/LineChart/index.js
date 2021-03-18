import React, {PureComponent} from 'react'
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';

import './index.css'



import {connect} from 'react-redux'

import {AtualizarLineChart} from '../../../store/actions/opinions'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';



import Filtros2 from '../../../Filtros'
const Filtros = new Filtros2 




const margin = { top: 5, right:5, bottom: 5, left: 5 }



class LChart extends PureComponent {
  
  constructor(props){
    super(props)
    this.state = {
      data: this.props.chart_opinions,
      opacity: {
        uv: 1,
        pv: 1,
      },
    };
  }
  AtualizarLineChart(opinions_by_cronology, estado_button_filter ){

  let data = ''
  data = Filtros.FormatToChartFree(opinions_by_cronology, this.props.interval_init, this.props.interval_fim)
    
    this.setState({
      data: data,
    });
  }

  componentDidUpdate(nextProps, nextState){
    if(nextProps.opinions_by_cronology !== this.props.opinions_by_cronology){
      this.AtualizarLineChart(this.props.opinions_by_cronology, this.props.estado_button_filter)
      console.log(this.props.estado_button_filter)
    }
  }
  
    handleMouseEnter = (o) => {
      const { dataKey } = o;
      const { opacity } = this.state;
  
      this.setState({
        opacity: { ...opacity, [dataKey]: 0.5 },
      });
    }
  
    handleMouseLeave = (o) => {
      const { dataKey } = o;
      const { opacity } = this.state;
  
      this.setState({
        opacity: { ...opacity, [dataKey]: 1 },
      });
    }

    

    render() {
        const { opacity } = this.state;


        return (
            <div className="card">
                <div className="legenda">
                    <Badge color="secondary">
                        <Typography className="tituloCard">Gráfico de Opiniões</Typography>
                    </Badge>
                </div>
                <Divider />

            <ResponsiveContainer width="99%" height={250} className="responsiveGraph" strokeWidth={1}>
                <LineChart data={this.state.data} className="LineChart" margin={margin} >
                    <CartesianGrid strokeDasharray="20 20" />
                    <XAxis dataKey="name" strokeWidth={1}/>
                    <YAxis strokeWidth={2}/>
                    <Tooltip />
                    <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
                    <Line name="Negativos" type="monotone" dataKey="pv" strokeOpacity={opacity.uv} strokeWidth={2} stroke="#cc1f1f" activeDot={{ r: 8 }} />
                    <Line name="Positivos" type="monotone" dataKey="uv" strokeOpacity={opacity.pv} strokeWidth={2} stroke="#2ca9d2" />
                    {/* <Line name="Hashtags" type="monotone" dataKey="amt" strokeOpacity={opacity.amt} strokeWidth={2} stroke="#8884d8" /> */}
                </LineChart>
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
    estado_button_filter: state.estado_button_filter,
    interval_init: state.interval_init,
    interval_fim: state.interval_fim
  }
}


export default connect(mapStateToProps, mapActionCreatorsToProps)(LChart)