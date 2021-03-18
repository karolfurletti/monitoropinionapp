import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { render } from '@testing-library/react';


import {connect} from 'react-redux'

import {AtualizarConcorrente} from '../../../store/actions/opinions'
import {AtualizarConcorrenteData} from '../../../store/actions/opinions'


import './index.css'



class CardConcorrente extends React.Component{

    constructor(props){
        super(props)
    }    

    redirect = (event) => { 
      
  
    }
  render(){
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onChange={this.redirect(this.props.id_concorrente)}>
          Comparar
        </Button>

      </CardActions>
    </Card>
  );
}}

function mapActionCreatorsToProps(dispatch){
  return{
    AtualizarConcorrente(concorrente_id){
          //action creator
          const action = AtualizarConcorrente(concorrente_id)
          dispatch(action)
      },
      AtualizarConcorrenteData(concorrente_data){
        //action creator
        const action = AtualizarConcorrenteData(concorrente_data)
        dispatch(action)
    }
  }
}



export default connect( null, mapActionCreatorsToProps)(CardConcorrente)