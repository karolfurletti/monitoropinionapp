import React, { useState } from "react"
import "./index.css"
import {
  PieChart, Pie, Cell
} from "recharts"

const COLORS = ["#de3b3bde", "#379a51"]

const PieChartPercent = (props) => {

  const { item } = props
  // eslint-disable-next-line
  const [activeIndex, setActiveIndex] = useState()

  const onPieEnter = (data, index) => {
    setActiveIndex(index)
  }

  return (
    <PieChart  width={80} height={80} onMouseEnter={onPieEnter} className="pie2">
      <text x={40} y={40} textAnchor="middle" dominantBaseline="middle" className="LabelInsidePie"
            style={{ fill: "#312020" }}>
        {item.total}
      </text>
      <Pie
        data={
          [
            {
              name: "Negativos",
              value: item.negative
            },
            {
              name: "Positivos",
              value: item.positive
            }
          ]
        }

        cx={35}
        cy={35}
        isAnimationActive={false}
        innerRadius={34}
        outerRadius={40}
        paddingAngle={2}
        dataKey="value"


      >
        {
          [
            {
              name: "Negativos",
              value: item.negative
            },
            {
              name: "Positivos",
              value: item.positive
            }
          ].map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
    </PieChart>
  )

}

export default PieChartPercent
