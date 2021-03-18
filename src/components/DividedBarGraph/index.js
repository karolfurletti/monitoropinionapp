import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';

import {connect} from 'react-redux'
import './index.css'

import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';



class DividedBarGraph extends PureComponent {


    constructor(props){
        super(props)
        this.state = {
         
        }
      }


     
    

  render() {
    console.log(this.props.count_negative_category)
    return (

        <div className="card-DividerBarGraph">
        <div className="legenda">
            <Badge color="secondary">
                <Typography className="tituloCard">Categorias</Typography>
            </Badge>
        </div>
        <Divider />
        <ResponsiveContainer width="99%" height={400} minWidth={350}>
            <BarChart
                data={[
                    {
                      name: 'Comida', Positivos: this.props.count_positive_category.count_comida, Negativos:  this.props.count_negative_category.count_comida, amt: 1,
                    },
                    {
                      name: 'Bebida', Positivos:  this.props.count_positive_category.count_bebida, Negativos:this.props.count_negative_category.count_bebida , amt: 1,
                    },
                    {
                      name: 'Serviço', Positivos:  this.props.count_positive_category.count_servico, Negativos:  this.props.count_negative_category.count_servico, amt: 1,
                    },
                    {
                      name: 'Preço', Positivos:  this.props.count_positive_category.count_preco, Negativos:  this.props.count_negative_category.count_preco, amt: 1,
                    },
                    {
                      name: 'Amb.', Positivos: this.props.count_positive_category.count_ambiente, Negativos:  this.props.count_negative_category.count_ambiente, amt: 1,
                    },
                    {
                      name: 'Loc.', Positivos:  this.props.count_positive_category.count_localizacao, Negativos:  this.props.count_negative_category.count_localizacao, amt: 1,
                    },
                    {
                      name: 'Outros', Positivos:  this.props.count_positive_category.count_outros, Negativos:  this.props.count_negative_category.count_outros, amt: 1,
                }]}
                barGap={1}
                barSize={10}
            >
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="name" padding={{ left: 1, right: 1 }} interval={0}/>
                <YAxis />
                <Tooltip />
                <Legend margin={{ top: 10, right: 0, left: 40, bottom: 0 }}></Legend>/>
                <Bar dataKey="Positivos" fill="#01a561" />
                <Bar dataKey="Negativos" fill="#ff6767" />
            </BarChart>
      </ResponsiveContainer>
      </div>
    );
   
  }

}


function mapStateToProps(state){
    return{
        count_negative_category: state.count_negative_category,
        count_positive_category: state.count_positive_category,
    }
  }
  
  export default connect(mapStateToProps)(DividedBarGraph)
