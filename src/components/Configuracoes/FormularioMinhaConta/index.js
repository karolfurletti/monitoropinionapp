import React, {PureComponent} from 'react'
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import {connect} from 'react-redux'
import SettingsIcon from '@material-ui/icons/Settings';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import CreditCardIcon from '@material-ui/icons/CreditCard';


import './index.css'



class FormularioMinhaConta extends React.Component {
  
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
            <form noValidate autoComplete="off">
                <div className='FormularioMinhaConta'>
                    
                    <div className='row'>
                        <div className='label'>
                            <Typography>Plano de Assinatura Atual</Typography>
                        </div>
                        <div className='input'>
                            <InputBase
                                defaultValue="Bronze"
                                inputProps={{ 'aria-label': 'naked' }}
                                readOnly
                            />
                        </div>
                    </div>
                    





                    <div className='secondary row'>
                        <div className='label'>
                            <Typography>Status da Conta</Typography>
                        </div>
                        <div className='input'>
                            <InputBase
                                defaultValue="Ativa"
                                inputProps={{ 'aria-label': 'naked' }}
                                readOnly
                            />
                        </div>
                    </div>


                    <div className='row'>
                        <div className='label'>
                            <Typography>Data de Validade</Typography>
                        </div>
                        <div className='input'>
                            <InputBase
                                defaultValue="21/08/2021"
                                inputProps={{ 'aria-label': 'naked' }}
                                readOnly
                            />
                        </div>
                    </div>

                    <div className='row secondary'>
                        <div className='label'>
                            <Typography>Plano</Typography>
                        </div>
                        <div className='input'>
                            <InputBase
                                defaultValue="Anual"
                                inputProps={{ 'aria-label': 'naked' }}
                                readOnly
                            />
                        </div>
                    </div>


                    <div className='row'>
                        <div className='label'>
                            <Typography>Forma de Pagamento</Typography>
                        </div>
                        
                        <div className='input'>
                            <div>
                                <CreditCardIcon color="primary" />
                            </div>
                            <InputBase
                                defaultValue={"Mastercard "+ this.props.number}
                                inputProps={{ 'aria-label': 'naked' }}
                                readOnly
                            />
                        </div>
                    </div>




                    
                </div>
                    
            </form>
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


export default connect(mapStateToProps, mapActionCreatorsToProps)(FormularioMinhaConta)