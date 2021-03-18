import React, {PureComponent} from 'react'
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import {connect} from 'react-redux'
import SettingsIcon from '@material-ui/icons/Settings';

import './index.css'



class Card extends React.Component {
  
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
            <div className="card-configuracoes">
                <div className='titulo'>
                    <div><SettingsIcon color="primary" className='icon' /></div>
                    <div><Typography className='titulo-pagina'>{this.props.pagina}</Typography></div>
                    
                </div>
                <Divider></Divider>
                <div className='content'>
                    {this.props.content}
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


export default connect(mapStateToProps, mapActionCreatorsToProps)(Card)