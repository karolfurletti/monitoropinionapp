import React, { useState } from "react"
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts"
import "./index.css"
import { countMediaCommunication } from "../../../../helper/analise"

const PieChart2 = (props) => {

  const { list } = props
  const [activeIndex, setActiveIndex] = useState(0)
  const onPieEnter = (data, index) => {
    setActiveIndex(index)
  }

  return (
    <ResponsiveContainer height={300} width="99%" className="responsiveGraph" strokeWidth={1}>
      <PieChart className="pie">
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={[
            {
              name: "Sites Especializados",
              value: countMediaCommunication(list).specializedWebsites
            },
            {
              name: "Redes Sociais",
              value: countMediaCommunication(list).sociaNetworks
            },
            {
              name: "Web",
              value: countMediaCommunication(list).web
            }
          ]}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={100}
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

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

export default PieChart2
