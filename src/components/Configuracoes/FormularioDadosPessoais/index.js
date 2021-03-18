import React, {PureComponent} from 'react'
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import {connect} from 'react-redux'
import SettingsIcon from '@material-ui/icons/Settings';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Button from '@material-ui/core/Button';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputMasked from '../InputMasked'




import './index.css'

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        showMask
      />
    );
  }
  
  TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
  };
  
  function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="$"
      />
    );
  }
  
  NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

class FormularioMinhaConta extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
        values:{
            textmask: '(1  )    -    ',
            numberformat: '1320',
        }
    };
  }



  handleChange = (event) => {
    this.setState({
      ...this.values,
      [event.target.name]: event.target.value,
    });
  };



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
            <div className='FormularioDadosPessoais'>
                    <div className='input' id='first'>
                        <TextField required id="standard-required" label="Nome" defaultValue="José Thomaz" />
                    </div>

                    <div className='input'>
                        <TextField required id="standard-required" label="Sobrenome" defaultValue="Matos Aguiar" />
                    </div>

                    <div className='input'>
                        <TextField required id="standard-required" label="Email" defaultValue="Matos Aguiar" />
                    </div>

                    <div className='input-double'>
                        <div className='input'>
                            <TextField
                                id="standard-password-input"
                                label="Senha"
                                type="password"
                                autoComplete="current-password"
                                required
                            />
                        </div>
                        <div className='input'>
                            <TextField
                                id="standard-password-input"
                                label="Confirme a Senha"
                                type="password"
                                autoComplete="current-password"
                                required
                            />
                        </div>    
                    </div>
                    <div className='input'>


                    <InputMasked />

        

                    </div>

                    <div className='footer'>
                        <Button variant="contained" color="primary" className=''>
                            Salvar
                        </Button>
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