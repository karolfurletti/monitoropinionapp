import React from 'react'
import './index.css'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';

import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';


import {connect} from 'react-redux'

import {FiltroPrincipalDashboard} from '../../store/actions/opinions'




class Filter extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      interval_time: '',
      selectedValue: 'a',
      button_color: "secondary",
      button_color2: "primary",
      button_color3: "primary"
    }
  }

 

  handleChange2 = (event) => {
    this.state.interval_time = event.target.value
    switch(event.target.value){
      case '10': 
        this.props.FiltroPrincipalDashboard('hoje', this.props.estado_button_filter)
      break;
      case '20':
        this.props.FiltroPrincipalDashboard('ontem', this.props.estado_button_filter)

      break;
      case '30':
        this.props.FiltroPrincipalDashboard('7dias', this.props.estado_button_filter)
      break;
      case '40':
        this.props.FiltroPrincipalDashboard('30dias', this.props.estado_button_filter)
      break;
      case '50':
        this.props.FiltroPrincipalDashboard('3meses', this.props.estado_button_filter)
      break;
      case '60':
        this.props.FiltroPrincipalDashboard('ano', this.props.estado_button_filter)
      break;
  }};




handleChange = (event) => {
    switch(event.target.value){
        case 'a': 
          this.setState({button_color: "secondary"})
          this.setState({button_color2: "primary"})
          this.setState({button_color3: "primary"})
          
          this.props.FiltroPrincipalDashboard(this.props.estado_select_filtro_principal, 'dias')
        break;
        case 'b':
          this.setState({button_color: "primary"})
          this.setState({button_color2: "secondary"})
          this.setState({button_color3: "primary"})
         
          this.props.FiltroPrincipalDashboard(this.props.estado_select_filtro_principal, 'semanas')
  
        break;
        case 'c':
          this.setState({button_color: "primary"})
          this.setState({button_color2: "primary"})
          this.setState({button_color3: "secondary"})
    
          this.props.FiltroPrincipalDashboard(this.props.estado_select_filtro_principal, 'meses')
        break;
    }
    this.state.selectedValue =  event.target.value
  };

  render(){

   

    return (
        <div className="filter">
            <div className="FilterTitle">
                <Typography>Visão Geral</Typography>
            </div>
            <div>
            <Button variant="outlined" className="Button-Group-Filter" color={this.state.button_color} onClick={this.handleChange} value='a'>
                Dias
            </Button>
            </div>
            <div>
            <Button variant="outlined" className="Button-Group-Filter" color={this.state.button_color2}  onClick={this.handleChange} value='b'>
                Semanas
            </Button>
            </div>
            <div>
            <Button variant="outlined" className="Button-Group-Filter" color={this.state.button_color3}  onClick={this.handleChange} value='c'>
                Meses
            </Button>
            </div>
            <div>
            <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-interval_time-native-simple">Filtrar</InputLabel>
        <Select
          native
          value={this.state.interval_time}
          onChange={this.handleChange2}
          label="7 dias"
          inputProps={{
            name: this.state.interval_time,
            id: 'outlined-interval_time-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Hoje</option>
          <option value={20}>Ontem</option>
          <option value={30}>7 dias</option>
          <option value={40}>30 dias</option>
          <option value={50}>3 meses</option>
          <option value={60}>Ano</option>
        </Select>
      </FormControl>
            </div>
        </div>
    )
  }
}

function mapActionCreatorsToProps(dispatch){
  return{
    FiltroPrincipalDashboard(filter_time, filter_interval){
          //action creator
          const action = FiltroPrincipalDashboard(filter_time, filter_interval)
          dispatch(action)
      }
  }
}

function mapStateToProps(state){
  return{
      opinions_by_teor: state.opinions_by_teor,
      aba_value: state.aba_value,
      plataforma_value: state.plataforma_value,
      estado_button_filter: state.estado_button_filter,
      estado_select_filtro_principal: state.estado_select_filtro_principal
  }
}


export default connect(mapStateToProps, mapActionCreatorsToProps)(Filter)
