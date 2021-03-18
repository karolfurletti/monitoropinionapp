import React, {PureComponent} from 'react'
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';

import './index.css'


import {connect} from 'react-redux'

import {AtualizarLineChart} from '../../store/actions/opinions'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';


import Filtros from '../../Filtros'

const FiltrosOBJ = new Filtros



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
    switch(this.props.estado_select_filtro_principal){
      case 'hoje':
        data = FiltrosOBJ.FormatToChart(opinions_by_cronology, estado_button_filter, 'hoje')
      break;
      case 'ontem':
        data = FiltrosOBJ.FormatToChart(opinions_by_cronology, estado_button_filter, 'ontem')
      break;
      case '7dias':
        data = FiltrosOBJ.FormatToChart(opinions_by_cronology, estado_button_filter, '7dias')
      break
      case '30dias':
        data = FiltrosOBJ.FormatToChart(opinions_by_cronology, estado_button_filter, "30dias")
        break
      case '3meses':
        data = FiltrosOBJ.FormatToChart(opinions_by_cronology, estado_button_filter, "3meses")
      break
      case 'ano':
        data = FiltrosOBJ.FormatToChart(opinions_by_cronology, estado_button_filter, "ano")
      break
      case 'free':
        alert('a')
        data = FiltrosOBJ.FormatToChart(opinions_by_cronology, estado_button_filter, "ano")
      break
    }
    
    this.setState({
      data: data,
    });
  }

  componentDidMount(){
    this.AtualizarLineChart(this.props.opinions_by_cronology, this.props.estado_button_filter, "7dias")
  }

  componentDidUpdate(nextProps, nextState){
    if(nextProps.opinions_by_cronology !== this.props.opinions_by_cronology){
      this.AtualizarLineChart(this.props.opinions_by_cronology, this.props.estado_button_filter)
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
                    <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
                    <Line name="Negativos"  dataKey="pv" strokeOpacity={opacity.uv} strokeWidth={1} stroke="#cc1f1f" dot={false} />
                    <Line name="Positivos"  dataKey="uv" strokeOpacity={opacity.pv} strokeWidth={1} stroke="#01a561" dot={false}/>
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
    estado_button_filter: state.estado_button_filter
  }
}


export default connect(mapStateToProps, mapActionCreatorsToProps)(LChart)