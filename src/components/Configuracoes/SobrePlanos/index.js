import React, {PureComponent} from 'react'
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import {connect} from 'react-redux'
import SettingsIcon from '@material-ui/icons/Settings';
import StarIcon from '@material-ui/icons/Star';
import CommentIcon from '@material-ui/icons/Comment';
import PersonIcon from '@material-ui/icons/Person';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

import './index.css'



class SobrePlanos extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
    
    };
  }



  componentDidMount(){
    //this.AtualizarLineChart(this.props.opinions_by_cronology, this.props.estado_button_filter, "7dias")
  }

  componentDidUpdate(nextProps, nextState){
   // if(nextProps.opinions_by_cronology !== this.props.opinions_by_cronology){
  //    this.AtualizarLineChart(this.props.opinions_by_cronology, this.props.estado_button_filter)
   // }
  }
  



    render() {
        return (
            <div className="card-sobre-planos">
                <div className='titulo'>
                    <div><Typography className='titulo-pagina'>Sobre</Typography></div>
                    
                </div>
                <Divider></Divider>
                <div className='content'>
                    <div className='icon'>
                        <StarIcon className='iconicon'></StarIcon>
                    </div>
                    <div className='texto-container'>
                    <Typography className='texto'>Conta <span className='plano'>{this.props.plano}</span> {this.props.text}</Typography>
                    </div>




                    <div className='info-container'>
                        <div className='icon-menor'><CommentIcon></CommentIcon></div>
                        <div className='info'>{this.props.numberofcomentsplan} 10 mil comentários por mês</div>
                    </div>


                    <div className='info-container'>
                        <div className='icon-menor'><PersonIcon></PersonIcon></div>
                        <div className='info'>{this.props.numberofusers} 2 usuários</div>
                    </div>


                    <div className='info-container'>
                        <div className='icon-menor'><RotateLeftIcon></RotateLeftIcon></div>
                        <div className='info'>Atualizações Diárias</div>
                    </div>

                    <div className='info-container'>
                        <div className='icon-menor'><PictureAsPdfIcon></PictureAsPdfIcon></div>
                        <div className='info'>Relatórios em PDF</div>
                    </div>

         

                </div>
            </div>
        )

    }
}


function mapActionCreatorsToProps(dispatch){
  return{

  }
}

function mapStateToProps(state){
  return{

  }
}


export default connect(mapStateToProps, mapActionCreatorsToProps)(SobrePlanos)