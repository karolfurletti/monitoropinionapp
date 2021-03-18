import React from 'react'
import PieChart from '../PieChart'
import PieChart2 from '../PieChart2'

import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './index.css'

import {connect} from 'react-redux'


import Filtros2 from '../../Filtros'
const Filtros = new Filtros2

const comentarios = 100

class Fontes extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            count_opinions: 0,
            negative_opinions: 0,
            positive_opinions: 0,
            percent_positive: 0,
            percent_negative: 0
           
        }
    }
    

    componentDidUpdate(){
    }

    render(){
        return (
        <div className="comparacao">
            <div className="legenda">
             
                <Badge color="secondary">
                    <Typography className="tituloCard">Fontes</Typography>
                </Badge>
            </div>
            <Divider />

            <div className="row-1">
                <div className="item">
                    <Badge color="secondary">
                        <Typography className="numero">{this.props.QuantidadeOpinions}</Typography>
                    </Badge>
                    <Badge color="secondary">
                        <Typography className="titulo">Opiniões</Typography>
                    </Badge>
                </div>
                <div className="item" >
                    <Badge color="secondary">
                            <Typography className="numero2">{this.props.PositiveOpinions}</Typography>
                    </Badge>
                    <Badge color="secondary">
                        <Typography className="titulo">Positivas</Typography>
                    </Badge>
                </div>
                <div className="item">
                    <Badge color="secondary">
                            <Typography className="numero3">{this.props.NegativeOpinions}</Typography>
                    </Badge>
                    <Badge color="secondary">
                        <Typography className="titulo">Negativas</Typography>
                    </Badge>
                </div>
            </div>
            <Divider />
            <div className="coluna-3-graphs">
                <div className="colunm3">
                    <PieChart></PieChart>
                </div>
            </div>



            <Divider className="divider"/>

            






            
            <div className="coluna-1-graph">
                <div className="colunm2">
                <PieChart2></PieChart2>
                </div>
            </div>


            <div className="row-3">
                <div className="item">
                    <Badge color="secondary">
                        <FiberManualRecordIcon className="icon-color1"></FiberManualRecordIcon>
                    </Badge>
                    <Badge color="secondary">
                        <Typography className="titulo">{this.props.PercentOpinionsPositive}% Positivos</Typography>
                    </Badge>
                </div>
                <div className="item" >
                    <Badge color="secondary">
                    <FiberManualRecordIcon className="icon-color2"></FiberManualRecordIcon>
                    </Badge>
                    <Badge color="secondary">
                        <Typography className="titulo">{this.props.PercentOpinionsNegative}% Negativos</Typography>
                    </Badge>
                </div>
            </div>
        </div>
        
    )
    }
}

function mapStateToProps(state){
    return{
      opinions_by_cronology: state.opinions_by_cronology,
      chart_opinions: state.chart_opinions,
      QuantidadeOpinions: state.QuantidadeOpinions,
      NegativeOpinions: state.NegativeOpinions,
      PositiveOpinions: state.PositiveOpinions,
      PercentOpinionsNegative: state.PercentOpinionsNegative,
      PercentOpinionsPositive: state.PercentOpinionsPositive,
      estado_select_filtro_principal: state.estado_select_filtro_principal,
      estado_button_filter: state.estado_button_filter
    }
  }

  
    export default connect(mapStateToProps)(Fontes)