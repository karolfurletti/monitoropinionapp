import React, { PureComponent } from "react"
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts"
import "./index.css"
import { connect } from "react-redux"
import Filtros2 from "../../Filtros"

const Filtros = new Filtros2()
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? "start" : "end"

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill="#7954a3"
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill="#13bf33"
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{` ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}

class PieChart2 extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      data: [
        {
          name: "Sites Especializados",
          value: 1
        },
        {
          name: "Redes Sociais",
          value: 0
        },
        {
          name: "Web",
          value: 0
        }
      ]
    }
  }

  componentDidUpdate() {
    let newData = 0
    if (this.state.data[0].value !== Filtros.CountSitesEspecializados(this.props.opinions_by_cronology)) {
      newData = this.state.data.slice() //copy the array
      newData[0].value = Filtros.CountSitesEspecializados(this.props.opinions_by_cronology) //execute the manipulations
      this.setState({ data: newData }) //set the new state
    }

    if (this.state.data[1].value !== Filtros.CountRedesSociais(this.props.opinions_by_cronology)) {
      newData = this.state.data.slice() //copy the array
      newData[1].value = Filtros.CountRedesSociais(this.props.opinions_by_cronology) //execute the manipulations
      this.setState({ data: newData }) //set the new state
    }

    if (this.state.data[2].value !== Filtros.CountWeb(this.props.opinions_by_cronology)) {
      newData = this.state.data.slice() //copy the array
      newData[2].value = Filtros.CountWeb(this.props.opinions_by_cronology) //execute the manipulations
      this.setState({ data: newData }) //set the new state
    }

  }

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    })
  }

  render() {

    return (
      <ResponsiveContainer height={300} width="99%" className="responsiveGraph" strokeWidth={1}>
        <PieChart className="pie">
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={this.state.data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={100}
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
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

export default connect(mapStateToProps)(PieChart2)
