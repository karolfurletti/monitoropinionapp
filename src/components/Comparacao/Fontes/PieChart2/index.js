import React from "react"
import "./index.css"
import { PieChart, Pie, Cell } from "recharts"
import { countComments } from "../../../../helper/analise"
import { TYPE_PLATFORM } from "../../../../utils/const"

const COLORS = ["#de3b3bde", "#379a51"]

const PieChartPercent = (props) => {

  const { list } = props
  const data = [{
    name: "Negativos",
    value: countComments(list, TYPE_PLATFORM.GERAL, "negativo")
  },
    {
      name: "Positivos",
      value: countComments(list, TYPE_PLATFORM.GERAL, "positivo")
    }]

  return (
    <PieChart width={300} height={500} className="pie2">
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={2}
        dataKey="value"
      >
        {
          data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
    </PieChart>
  )
}

export default PieChartPercent

