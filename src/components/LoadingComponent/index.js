import React from 'react';
import {connect} from 'react-redux';
import './index.css'
//import { makeStyles, withStyles } from '@material-ui/core/styles';
//import Image from 'material-ui-image';

//import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';





class LinearIndeterminate extends React.Component{
    constructor(props){
        super(props)
    }
render(){
    if(this.props.status_loading === true){
  return (
    <div className="Main-Loading-Component">
      {/* <Image src="/Assets/spinner.gif" ></Image> */}      
      <CircularProgress className="spinner-bar"/>
    </div>
  )}
  else{
      return ''
  }
}
}


function mapStateToProps(state){
    return{
        status_loading: state.status_loading,
      
    }
  }
  
  
  export default connect(mapStateToProps)(LinearIndeterminate)