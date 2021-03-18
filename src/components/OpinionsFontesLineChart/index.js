import React, {PureComponent} from 'react'
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';

import './index.css'

import CommentIcon from '@material-ui/icons/Comment';

import {connect} from 'react-redux'

import {AtualizarLineChart} from '../../store/actions/opinions'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { SettingsSystemDaydreamTwoTone } from '@material-ui/icons';

import FacebookIcon from '@material-ui/icons/Facebook';

import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import HttpIcon from '@material-ui/icons/Http';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYelp } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faTripadvisor } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


import Radio from '@material-ui/core/Radio';



import Filtros2 from '../../Filtros'
const Filtros = new Filtros2





const margin = { top: 5, right:5, bottom: 5, left: 5 }



class LChart extends PureComponent {
  
  constructor(props){
    super(props)
    this.state = {
      selectedValue: 'a',
      ordenar: '',
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
        data = Filtros.FormatToChart(opinions_by_cronology, estado_button_filter, 'hoje')
      break;
      case 'ontem':
        data = Filtros.FormatToChart(opinions_by_cronology, estado_button_filter, 'ontem')
      break;
      case '7dias':
        data = Filtros.FormatToChart(opinions_by_cronology, estado_button_filter, '7dias')
      break
      case '30dias':
        data = Filtros.FormatToChart(opinions_by_cronology, estado_button_filter, "30dias")
        break
      case '3meses':
        data = Filtros.FormatToChart(opinions_by_cronology, estado_button_filter, "3meses")
      break
      case 'ano':
        data = Filtros.FormatToChart(opinions_by_cronology, estado_button_filter, "ano")
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


  handleChange = (event) => {
    switch(event.target.value){
        case 'a': 
            console.log('a')
            
        break;
        case 'b':
            console.log('b')
           
        break;
        case 'c':
            console.log('c')
           
        break;
        case 'd':
            console.log('d')
        break;
    }
    this.setState({selectedValue: event.target.value})
  };
  
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
            <div className="OpinionsFontesLineChart">
                <div className="legenda">
                    <Badge color="secondary">
                        <Typography className="tituloCard">Gráfico de Opiniões</Typography>
                    </Badge>
                </div>
                <Divider />

                <div className="item-classificador">
                <div className="item">
                    <AllInclusiveIcon></AllInclusiveIcon>
                    <Typography>Todos</Typography>
                    
                    <Radio
                        checked={this.state.selectedValue === 'a'}
                        onChange={this.handleChange}
                        value="a"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>

                <div className="item">
                    <TwitterIcon></TwitterIcon>
                    <Typography>Twitter</Typography>
                    
                    <Radio
                        checked={this.state.selectedValue === 'b'}
                        onChange={this.handleChange}
                        value="b"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>

                <div className="item">
                    <InstagramIcon></InstagramIcon>
                    <Typography>Instagram</Typography>
                    
                    <Radio
                        checked={this.state.selectedValue === 'c'}
                        onChange={this.handleChange}
                        value="c"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>

                <div className="item">
                    <FacebookIcon></FacebookIcon>
                    <Typography>Facebook</Typography>
                    
                    <Radio
                        checked={this.state.selectedValue === 'd'}
                        onChange={this.handleChange}
                        value="d"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>

                <div className="item">
                    <FontAwesomeIcon icon={faTripadvisor} size="2x"/>
                    <Typography>Tripadvisor</Typography>
                   
                    <Radio
                        checked={this.state.selectedValue === 'e'}
                        onChange={this.handleChange}
                        value="e"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>

                <div className="item">
                <FontAwesomeIcon icon={faYelp} size="2x"/>
                    <Typography>Yelp</Typography>
                    
                    <Radio
                        checked={this.state.selectedValue === 'f'}
                        onChange={this.handleChange}
                        value="f"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>

                <div className="item">
                <FontAwesomeIcon icon={faGoogle} size="2x"/>
                    <Typography>Google Reviews</Typography>
                    
                    <Radio
                        checked={this.state.selectedValue === 'g'}
                        onChange={this.handleChange}
                        value="g"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'g' }}
                    />
                </div>

                <div className="item">
                <FontAwesomeIcon icon={faGlobe} size="2x"/>
                    <Typography>Web</Typography>
                    
                    <Radio
                        checked={this.state.selectedValue === 'h'}
                        onChange={this.handleChange}
                        value="h"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>

                

            </div>


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
    estado_button_filter: state.estado_button_filter
  }
}


export default connect(mapStateToProps, mapActionCreatorsToProps)(LChart)