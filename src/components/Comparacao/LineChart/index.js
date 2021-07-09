import React, { useState } from "react"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"
import "./index.css"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts"
import Badge from "@material-ui/core/Badge"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"

const margin = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}

const LChart = (props) => {

  const [position, setPosition] = useState(0)
  const {
    list,
    listComparation
  } = props

  // console.log({listComparation})
  // console.log({list})

  const newList = list.filter(el => el.uv)

  const handleClick = (value) => {
    if (value === "negative") {
      setPosition(0)
    } else {
      setPosition(1)
    }
  }

  return (
    <div className="card-linechart-comparacao">


      <div>
        <div className="legenda">
          <Badge color="secondary">
            <Typography className="tituloCard">{props.name}</Typography>
          </Badge>
        </div>
        <Divider />
        <ResponsiveContainer width="99%" height={250} className="responsiveGraph" strokeWidth={1}>

          <LineChart
            width={500}
            height={300}
            data={list}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Line
              isAnimationActive={false}
              type="monotone"
              dataKey="pv"
              stroke="#2ca9d2"
              name={"Positivos"}
              strokeWidth={2}
              dot={false}
            />
            <Line isAnimationActive={false} dot={false} strokeWidth={2} type="monotone" name={"Negativos"} dataKey="uv"
                  stroke="#cc1f1f" />
          </LineChart>


        </ResponsiveContainer>
      </div>
      <div>

        <div className="legenda">
          <Badge color="secondary">
            <Typography className="tituloCard">{props.nameComparation}</Typography>
          </Badge>
        </div>
        <Divider />
        <ResponsiveContainer width="99%" height={250} className="responsiveGraph" strokeWidth={1}>

          <LineChart
            width={500}
            height={300}
            data={listComparation}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Line
              isAnimationActive={false}
              type="monotone"
              dataKey="pv"
              stroke="#2ca9d2"
              name={"Positivos"}
              strokeWidth={2}
              dot={false}
            />
            <Line isAnimationActive={false} dot={false} strokeWidth={2} type="monotone" name={"Negativos"} dataKey="uv"
                  stroke="#cc1f1f" />
          </LineChart>



        </ResponsiveContainer>
      </div>

    </div>
  )

}

export default LChart
