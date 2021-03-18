import React from 'react'
import './index.css'


import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

//import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AutoSizer from "react-virtualized-auto-sizer";

import { FixedSizeList as List } from "react-window";


import ComponentPrincipaisPerfis from './PrincipaisPerfis'
import ComponentPlataformasComentadas from './FontesComentadas'
import Filtros2 from '../../Filtros'



import {connect} from 'react-redux'

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
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  
  
  

class Recomendados extends React.Component  {




  constructor(props){
    super(props)
    this.state = {
      value: 0,
      PrincipaisPerfis:[] ,
      PrincipaisPlataformas: []
    }
  }


 
  componentDidUpdate(){


    // if(JSON.stringify(this.state.PrincipaisPerfis) != JSON.stringify(Filtros.author_filter_count(this.props.opinions_by_cronology)))
    //   this.setState({PrincipaisPerfis: Filtros.author_filter_count(this.props.opinions_by_cronology)})

    // if(JSON.stringify(this.state.PrincipaisPlataformas) != JSON.stringify(Filtros.plataforma_filter_count(this.props.opinions_by_cronology)))
    //   this.setState({PrincipaisPlataformas: Filtros.plataforma_filter_count(this.props.opinions_by_cronology)})



  }
  handleChange = (event, newValue) => {
    this.setState({value: newValue});
  };


 Row = ({ index, style }) => (
    <div style={style}>
      <ComponentPrincipaisPerfis item={this.props.PrincipaisPerfis[index]}></ComponentPrincipaisPerfis>
    </div>
  );


  Row2 = ({ index, style }) => (
    <div style={style}>
      <ComponentPlataformasComentadas item={this.props.PrincipaisPlataformas[index]}></ComponentPlataformasComentadas>
    </div>
  );
  
   

render(){

    return (
        <div className="Recomendados">
            <div>
                <AppBar position="static">
                    <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
                    <Tab label="Principais Perfis" {...a11yProps(0)} />
                    <Tab label="Sites mais Comentados" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={this.state.value} index={0}>
                  
                  <div className="tab-content" >

                <AutoSizer>
                {({ height, width }) => (
                <List
                  className="List"
                 height={height}
                 itemCount={this.props.PrincipaisPerfis.length}
                itemSize={35}
              width={width}
                >
                {this.Row}
              </List>
              )}
              </AutoSizer>

              </div>




                </TabPanel>
                <TabPanel value={this.state.value} index={1}>
                <div className="tab-content" >

                <AutoSizer>
                {({ height, width }) => (
                <List
                  className="List"
                 height={height}
                 itemCount={this.props.PrincipaisPlataformas.length}
                itemSize={35}
              width={width}
                >
                {this.Row2}
              </List>
              )}
              </AutoSizer>

              </div>
                    
                </TabPanel>
                
        </div>
           
        
        </div>
    )}
}


function mapStateToProps(state){
    return{
      PrincipaisPerfis: state.PrincipaisPerfis,
      PrincipaisPlataformas: state.PrincipaisPlataformas,
      opinions_by_cronology: state.opinions_by_cronology
    }
  }

export default connect(mapStateToProps)(Recomendados)