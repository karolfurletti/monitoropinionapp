import React, { useState } from "react"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"
import "./index.css"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts"

const margin = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}

const LChart = (props) => {

  const [position, setPosition] = useState(0)

  const { list } = props
  const handleMouseEnter = (o) => {
    const { dataKey } = o
    const { opacity } = this.state

    this.setState({
      opacity: {
        ...opacity,
        [dataKey]: 0.5
      }
    })
  }

  const handleMouseLeave = (o) => {
    const { dataKey } = o
    const { opacity } = this.state

    this.setState({
      opacity: {
        ...opacity,
        [dataKey]: 1
      }
    })
  }

  const handleClick = (value) => {
    if (value === "negative") {
      setPosition(0)
    } else {
      setPosition(1)
    }
  }

  return (
    <div className="card-linechart-comparacao">
      <div className="filtros-line-chart">
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button className="buttonnegative" onClick={() => handleClick("negative")}>Negativos</Button>
          <Button className="buttonpositive" onClick={() => handleClick("positive")}>Positivos</Button>

        </ButtonGroup>
      </div>
      <ResponsiveContainer width="99%" height={250} className="responsiveGraph" strokeWidth={1}>
        <LineChart data={list} className="LineChart" margin={margin}>
          <CartesianGrid strokeDasharray="20 20" />
          <XAxis dataKey="name" strokeWidth={1} />
          <YAxis strokeWidth={2} />
          <Tooltip />
          <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          <Line name="Essencia do Sabor" type="monotone" dataKey="pv" strokeOpacity={1} strokeWidth={1}
                stroke="#2ca9d2" activeDot={{ r: 8 }} />
          <Line name="Burguer King" type="monotone" dataKey="uv" strokeOpacity={1} strokeWidth={1}
                stroke="#f99500" />
          {/* <Line name="Hashtags" type="monotone" dataKey="amt" strokeOpacity={opacity.amt} strokeWidth={2} stroke="#8884d8" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )

}

export default LChart
