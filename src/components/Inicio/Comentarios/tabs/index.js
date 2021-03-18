import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';


import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';


import ComentarioPositivo from '../comentario_positivo'
import ComentarioNegativo from '../comentario_negativo'

import AutoSizer from "react-virtualized-auto-sizer";

import { FixedSizeList as List } from "react-window";

import ListItem from '@material-ui/core/ListItem';

import {connect} from 'react-redux'

import {FiltrarComentarios} from '../../../../store/actions/opinions'
import {OrdenarComentarios} from '../../../../store/actions/opinions'
import {AlternarAba} from '../../../../store/actions/opinions'
import {AlterarPlataforma} from '../../../../store/actions/opinions'




import  CircularProgress from '@material-ui/core/CircularProgress';





import './index.css'
import Filtros2 from '../../../../Filtros'
import { divide } from 'lodash';

const Filtros = new Filtros2

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}











class SimpleTabs extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      CircularProgressValue: true,
      value: 0,
      opinions_by_teor: this.props.opinions_by_teor
    }
  }

 
  
  componentDidUpdate(){
    if(JSON.stringify(this.state.opinions_by_teor) != JSON.stringify(Filtros.opinions_by_teor(this.props.plataforma_value,this.props.aba_value,  this.props.opinions_by_cronology))){
      this.setState({opinions_by_teor: Filtros.opinions_by_teor(this.props.plataforma_value,this.props.aba_value,  this.props.opinions_by_cronology )})
      }
    }



    handleChangeSelect = (event) => {
        
      switch(event.target.value){
          case 'desc':
              this.props.OrdenarComentarios('desc')
          break
          
          case 'asc':
              this.props.OrdenarComentarios('asc')
          break
      }
      this.state.ordenar = event.target.value
  }





  handleChange = (event, newValue) => {
    this.setState({value: newValue});
    switch(newValue){
      case 0:
        this.props.AlternarAba(this.props.plataforma_value, 0)
  
        break
      case 1:
        this.props.AlternarAba(this.props.plataforma_value, 1)  
        
        break
        
    }
  };


  Row = ({ index, style }) => (
    <div style={style}>
      <ComentarioNegativo item={this.state.opinions_by_teor[index]}></ComentarioNegativo>
    </div>
  );

  Row2 = ({ index, style }) => (
    <div style={style}>
      <ComentarioPositivo item={this.state.opinions_by_teor[index]}></ComentarioPositivo>
    </div>
  );



render(){
  return (
    <div>
      <AppBar position="static">
        <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example" className="tab_att">
      
            
              <Tab label="Negativos" {...a11yProps(0)} className="tab-1"/>
              <Tab label="Positivos" {...a11yProps(1)} className="tab-2"/>
            
            <div className="filtro_data">
                    <FormControl className="filtroordemcomentarios">
                     {/* <InputLabel htmlFor="outlined-age-native-simple">Filtro</InputLabel>  */}
                            <Select
                            defaultValue={'asc'}
                            labelId="demo-simple-select-label"
                            value={this.state.ordenar}
                            autoWidth={true}
                            onChange={this.handleChangeSelect}
                            inputProps={{
                                name: 'Recentes Primeiro',
                                id: 'outlined-age-native-simple',
                              }}
                            >
                                <MenuItem value="asc">Antigos</MenuItem>
                                <MenuItem value="desc">Recentes</MenuItem>
                                
                            </Select>
                            {/* <FormHelperText>Ordem Comentários</FormHelperText> */}
                    </FormControl>
            </div>
        </Tabs>
      </AppBar>
      <TabPanel value={this.state.value} index={0}>

      <div className="tab-component">
 
            <AutoSizer>
            {({ height, width }) => (
            <List
              className="List"
            height={height}
            itemCount={this.state.opinions_by_teor.length}
            itemSize={280}
            width={width}
            >
            {this.Row}
            </List>
            )}
            </AutoSizer>

            </div>


      </TabPanel>


      <TabPanel value={this.state.value} index={1}>
      {/* <CircularProgress disableShrink={this.state.CircularProgressValue} variant="indeterminate"/> */}
        <div className="tab-component-page-comentarios">
        <AutoSizer>
            {({ height, width }) => (
            <List
              className="List"
            height={height}
            itemCount={this.state.opinions_by_teor.length}
            itemSize={280}
            width={width}
            >
            {this.Row2}
            </List>
            )}
            </AutoSizer>
        </div>
      </TabPanel>
    </div>
    
  );
}}


function mapActionCreatorsToProps(dispatch){
  return{
      FiltrarComentarios(plataforma, aba_value, opinions_by_cronology){
          //action creator
          const action = FiltrarComentarios(plataforma, aba_value, opinions_by_cronology)
          dispatch(action)
      },

      OrdenarComentarios(tipo_ordenacao){
          //action creator
          const action = OrdenarComentarios(tipo_ordenacao)
          dispatch(action)
      },
      AlternarAba(tipo_plataforma,tipo_aba){
        const action = AlternarAba(tipo_plataforma, tipo_aba)
        dispatch(action)
      },
      AlterarPlataforma(tipo_plataforma, tipo_aba){
        //action creator
        const action = AlterarPlataforma(tipo_plataforma, tipo_aba)
        dispatch(action)
    }
  }
}

function mapStateToProps(state){
  return{
    opinions_by_cronology: state.opinions_by_cronology,
    opinions_by_teor: state.opinions_by_teor,
    aba_value: state.aba_value,
    plataforma_value: state.plataforma_value
  }
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(SimpleTabs)