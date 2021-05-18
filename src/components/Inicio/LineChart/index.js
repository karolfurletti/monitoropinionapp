import React, { PureComponent } from "react"
import Typography from "@material-ui/core/Typography"
import Badge from "@material-ui/core/Badge"
import Divider from "@material-ui/core/Divider"
import "./index.css"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts"

const margin = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}

class LChart extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      opacity: {
        uv: 1,
        pv: 1
      }
    }
  }

  componentDidMount() {
  }

  handleMouseEnter = (o) => {
    const { dataKey } = o
    const { opacity } = this.state

    this.setState({
      opacity: {
        ...opacity,
        [dataKey]: 0.5
      }
    })
  }

  handleMouseLeave = (o) => {
    const { dataKey } = o
    const { opacity } = this.state

    this.setState({
      opacity: {
        ...opacity,
        [dataKey]: 1
      }
    })
  }

  render() {
    const { opacity } = this.state
    const {list} = this.props


    return (
      <div className="card-linechart-inicio">
        <div className="legenda">
          <Badge color="secondary">
            <Typography className="tituloCard">Gráfico de Opiniões</Typography>
          </Badge>
        </div>
        <Divider />

        <ResponsiveContainer width="99%" height={250} className="responsiveGraph" strokeWidth={1}>
           <LineChart  data={list} className="LineChart" margin={margin}>
            <CartesianGrid strokeDasharray="0 0" />
            <XAxis tick={{fontSize: 40}} dataKey="name" strokeWidth={1} />
            <YAxis tickCount={10} width={50} strokeWidth={1} />
            <Tooltip />

            <Line name="Positivos" type="monotone" dataKey="pv" strokeOpacity={opacity.uv} strokeWidth={2}
                  stroke="#2ca9d2" dot={false} isAnimationActive={true} />
            <Line name="Negativos" type="monotone" dataKey="uv" strokeOpacity={opacity.pv} strokeWidth={2}
                  stroke="#cc1f1f" isAnimationActive={true} dot={false} />
            <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
            {/* <Line name="Hashtags" type="monotone" dataKey="amt" strokeOpacity={opacity.amt} strokeWidth={2} stroke="#8884d8" /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    )

  }
}

export default LChart
