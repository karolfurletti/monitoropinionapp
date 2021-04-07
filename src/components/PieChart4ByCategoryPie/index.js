import React, { PureComponent } from "react"
import "./index.css"
import {
  PieChart, Pie, Cell
} from "recharts"
import { connect } from "react-redux"

const COLORS = ["#de3b3bde", "#379a51"]

// const data = [
//   {
//     name: "Negativos",
//     value: Math.floor(Math.random() * 100)
//   },
//   {
//     name: "Positivos",
//     value: Math.floor(Math.random() * 100)
//   }
// ]

class PieChartPercent extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    })
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <PieChart width={80} height={80} onMouseEnter={this.onPieEnter} className="pie2">
        <text x={40} y={40} textAnchor="middle" dominantBaseline="middle" className="LabelInsidePie"
              style={{ fill: "#312020" }}>
          {this.props.item.opinions_total}
        </text>
        <Pie
          data={
            [
              {
                name: "Negativos",
                value: this.props.item.negative_opinions
              },
              {
                name: "Positivos",
                value: this.props.item.positive_opinions
              }
            ]
          }
          cx={35}
          cy={35}
          innerRadius={34}
          outerRadius={40}
          paddingAngle={2}
          dataKey="value"


        >
          {
            [
              {
                name: "Negativos",
                value: this.props.item.negative_opinions
              },
              {
                name: "Positivos",
                value: this.props.item.positive_opinions
              }
            ].map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    )
  }
}

function mapStateToProps(state) {
  return {
    opinions_by_cronology: state.opinions_by_cronology,
    chart_opinions: state.chart_opinions,
    estado_select_filtro_principal: state.estado_select_filtro_principal,
    estado_button_filter: state.estado_button_filter
  }
}

export default connect(mapStateToProps)(PieChartPercent)
