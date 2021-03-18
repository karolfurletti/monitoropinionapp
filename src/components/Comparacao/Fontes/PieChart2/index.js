import React, { PureComponent } from 'react';
import './index.css'
import {
  PieChart, Pie, Cell,
} from 'recharts';



import {connect} from 'react-redux'


import Filtros2 from '../../../../Filtros'
const Filtros = new Filtros2


const COLORS = ['#de3b3bde', '#379a51' ];



class PieChartPercent extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      data: [
        { name: 'Negativos', value: 0 },
        { name: 'Positivos', value: 0 },
      ]
    }
  }


  componentDidUpdate(){
    // let newData = 0
    // if(this.state.data[0].value != Filtros.CountPositiveNegativePercent(this.props.opinions_by_cronology)[0]){
    //    newData = this.state.data.slice() //copy the array
    //   newData[0].value = Filtros.CountPositiveNegativePercent(this.props.opinions_by_cronology)[0] //execute the manipulations
    //   newData[1].value = Filtros.CountPositiveNegativePercent(this.props.opinions_by_cronology)[1] //execute the manipulations
    //   this.setState({data: newData}) //set the new state
    // }
  }


  render() {
    return (
      <PieChart width={300} height={500} onMouseEnter={this.onPieEnter} className="pie2">
        <Pie
          data={this.props.variante === 'concorrente' ? [
            { name: 'Negativos', value: this.props.PercentOpinionsNegativeConcorrente },
            { name: 'Positivos', value: this.props.PercentOpinionsPositiveConcorrente },
          ]:  [
            { name: 'Negativos', value: this.props.PercentOpinionsNegative },
            { name: 'Positivos', value: this.props.PercentOpinionsPositive},
          ]}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {
            this.state.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
  }
}

function mapStateToProps(state){
  return{
    PercentOpinionsPositive: state.PercentOpinionsPositive,
    PercentOpinionsPositiveConcorrente: state.PercentOpinionsPositiveConcorrente,
    PercentOpinionsNegativeConcorrente: state.PercentOpinionsNegativeConcorrente,
    PercentOpinionsNegative: state.PercentOpinionsNegative
  }
}

export default connect(mapStateToProps)(PieChartPercent)