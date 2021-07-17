import React, { useState } from "react"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"
import "./index.css"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts"

const LChart = (props) => {

  const { list, listComparation } = props
  const [type, setType] = useState('uv')


  const newList = listFinal(type)

  function listMain(field) {
    return list.map(item => {
      return {
        name: item.name,
        negativeMain: item[field]
      }
    })
  }

  function listComp(field) {
    return listComparation.map(item => {
      return {
        name: item.name,
        negativeComparation: item[field]
      }
    })
  }

  function listFinal(field){
    const juncao = listMain(field).concat(listComp(field))
    const newList = collateArray(juncao)
    return newList.map(item => {
      return {
        name: item.name,
        negativeMain: item.negativeMain >= 0 ? item.negativeMain : 0,
        negativeComparation: item.negativeComparation >= 0 ? item.negativeComparation : 0
      }
    })
  }


  const changeNegative = () => {
    setType('uv')
  }

  const changePositive = () => {
    setType('pv')
  }

  function mergeArray(arr) {
    const outputObj = {}
    for (let counter = 0; counter < arr.length; counter++) {
      const obj = arr[counter]
      for (let key in obj) {
        if (!outputObj[key]) {
          outputObj[key] = obj[key]
        }
      }
    }
    return outputObj
  }

  function collateArray(arr) {
    const outputObj = {}
    const result = []
    for (let counter = 0; counter < arr.length; counter++) {
      const obj = arr[counter]
      const id_0value = obj["name"]
      if (!outputObj[id_0value]) {
        outputObj[id_0value] = []
      }
      outputObj[id_0value].push(obj)
    }
    for (let key in outputObj) {
      result.push(mergeArray(outputObj[key]))
    }
    return result

  }

  //UV = NEGATIVE
  //PV = POSITIVO

  return (
    <div className="card-linechart-comparacao">
      <div className="filtros-line-chart">
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button className="buttonnegative" onClick={() => changeNegative("negative")}>Negativos</Button>
          <Button className="buttonpositive" onClick={() => changePositive("positive")}>Positivos</Button>

        </ButtonGroup>
      </div>
      <ResponsiveContainer width="99%" height={250} className="responsiveGraph" strokeWidth={1}>


        <LineChart
          width={500}
          height={300}
          data={newList}
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
          <Tooltip itemStyle={{fontSize: 18}} />
          <Legend />
          <Line
            type="monotone"
            dataKey="negativeMain"
            stroke="#2ca9d2"
            name={props.name}
            strokeWidth={2}
            dot={true}
          />
          <Line dot={true} strokeWidth={2} type="monotone" name={props.nameComparation} dataKey="negativeComparation"
                stroke="#f99500" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )

}

export default LChart
