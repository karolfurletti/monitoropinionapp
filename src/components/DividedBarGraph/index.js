import React from "react"
import Typography from "@material-ui/core/Typography"
import Badge from "@material-ui/core/Badge"
import Divider from "@material-ui/core/Divider"
import "./index.css"
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts"
import { countCategoryOpinion } from "../../helper/analise"
import { TYPE_CARACTERISTICA } from "../../utils/const"

const DividedBarGraph = (props) => {

  const { list } = props

  return (
    <div className="card-DividerBarGraph">
      <div className="legenda">
        <Badge color="secondary">
          <Typography className="tituloCard">Categorias</Typography>
        </Badge>
      </div>
      <Divider />
      <ResponsiveContainer width="99%" height={400} minWidth={350}>
        <BarChart
          data={[
            {
              name: "Comida",
              Positivos: countCategoryOpinion(list, TYPE_CARACTERISTICA.COMIDA, 'positive'),
              Negativos: countCategoryOpinion(list, TYPE_CARACTERISTICA.COMIDA, 'negative'),
              amt: 1
            },
            {
              name: "Bebida",
              Positivos: countCategoryOpinion(list, TYPE_CARACTERISTICA.BEBIDA, 'positive'),
              Negativos: countCategoryOpinion(list, TYPE_CARACTERISTICA.BEBIDA, 'negative'),
              amt: 1
            },
            {
              name: "Serviço",
              Positivos: countCategoryOpinion(list, TYPE_CARACTERISTICA.SERVICO, 'positive'),
              Negativos: countCategoryOpinion(list, TYPE_CARACTERISTICA.SERVICO, 'negative'),
              amt: 1
            },
            {
              name: "Preço",
              Positivos: countCategoryOpinion(list, TYPE_CARACTERISTICA.PRECO, 'positive'),
              Negativos: countCategoryOpinion(list, TYPE_CARACTERISTICA.PRECO, 'negative'),
              amt: 1
            },
            {
              name: "Amb.",
              Positivos: countCategoryOpinion(list, TYPE_CARACTERISTICA.AMBIENTE, 'positive'),
              Negativos: countCategoryOpinion(list, TYPE_CARACTERISTICA.AMBIENTE, 'negative'),
              amt: 1
            },
            {
              name: "Loc.",
              Positivos: countCategoryOpinion(list, TYPE_CARACTERISTICA.LOCALIZACAO, 'positive'),
              Negativos: countCategoryOpinion(list, TYPE_CARACTERISTICA.LOCALIZACAO, 'negative'),
              amt: 1
            },
            {
              name: "Outros",
              Positivos: countCategoryOpinion(list, TYPE_CARACTERISTICA.OUTROS, 'positive'),
              Negativos: countCategoryOpinion(list, TYPE_CARACTERISTICA.OUTROS, 'negative'),
              amt: 1
            }]}
          barGap={1}
          barSize={10}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" padding={{
            left: 1,
            right: 1
          }} interval={0} />
          <YAxis />
          <Tooltip />
          <Legend margin={{
            top: 10,
            right: 0,
            left: 40,
            bottom: 0
          }}></Legend>/>
          <Bar dataKey="Positivos" fill="#01a561" />
          <Bar dataKey="Negativos" fill="#ff6767" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DividedBarGraph
