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

import CardConcorrente from '../CardConcorrente'
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import Carousel from 'react-material-ui-carousel'

import './index.css'



import {connect} from 'react-redux'

import {AtualizarConcorrente} from '../../../store/actions/opinions'
import {AtualizarConcorrenteData} from '../../../store/actions/opinions'



class Sugestoes extends React.Component{

    constructor(props){
        super(props)
    }    


  render(){
        return (
            <div className="card-sugestoes">
                <div className="legenda">
                    <Badge color="secondary">
                        <Typography className="tituloCard">Sugestões</Typography>
                    </Badge>
                </div>
                    <Divider />
                    <Carousel>
                        <div className="row-cards">
                            <div className="item"><CardConcorrente title="Burguer King" text="blablabla" id_concorrente='1234'/></div>
                            <div className="item"><CardConcorrente title="Pizzaria Gabriella" text="blablabla" id_concorrente='123'/></div>
                            <div className="item"><CardConcorrente title="Lanche do Gaucho" text="blablabla" id_concorrente='12345'/></div>
                            <div className="item"><CardConcorrente title="Restaurante Essencia do Sabor" text="blablabla" id_concorrente='123456'/></div>
                            <div className="item"><CardConcorrente title="Churrascaria Carne na Chapa" text="blablabla"id_concorrente='1234567'/></div>
                        </div>
                        <div className="row-cards">
                            <div className="item"><CardConcorrente title="Burguer King" text="blablabla" id_concorrente='1234'/></div>
                            <div className="item"><CardConcorrente title="Pizzaria Gabriella" text="blablabla" id_concorrente='123'/></div>
                            <div className="item"><CardConcorrente title="Lanche do Gaucho" text="blablabla" id_concorrente='12345'/></div>
                            <div className="item"><CardConcorrente title="Restaurante Essencia do Sabor" text="blablabla" id_concorrente='123456'/></div>
                            <div className="item"><CardConcorrente title="Churrascaria Carne na Chapa" text="blablabla"id_concorrente='1234567'/></div>
                        </div>
                    </Carousel>
            </div>
        );
    }
}



export default Sugestoes