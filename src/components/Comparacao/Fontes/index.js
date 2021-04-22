import React from "react"
import PieChart from "./PieChart"
import PieChart2 from "./PieChart2"
import Typography from "@material-ui/core/Typography"
import Badge from "@material-ui/core/Badge"
import Divider from "@material-ui/core/Divider"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import "./index.css"
import { countComments, countPercentageGraph } from "../../../helper/analise"
import { TYPE_PLATFORM } from "../../../utils/const"

const Fontes = (props) => {

  const { list, title } = props

  return (
    <div className="comparacao">
      <div className="legenda">

        <Badge color="secondary">
          <Typography className="tituloCard"> {title} </Typography>
        </Badge>
      </div>
      <Divider />

      <div className="row-1">
        <div className="item">
          <Badge color="secondary">
            <Typography className="numero">{list.length}</Typography>
          </Badge>
          <Badge color="secondary">
            <Typography className="titulo">Opiniões</Typography>
          </Badge>
        </div>
        <div className="item">
          <Badge color="secondary">
            <Typography className="numero2">{countComments(list, TYPE_PLATFORM.GERAL, 'positive')}</Typography>
          </Badge>
          <Badge color="secondary">
            <Typography className="titulo">Positivas</Typography>
          </Badge>
        </div>
        <div className="item">
          <Badge color="secondary">
            <Typography className="numero3">{countComments(list, TYPE_PLATFORM.GERAL, 'negative')}</Typography>
          </Badge>
          <Badge color="secondary">
            <Typography className="titulo">Negativas</Typography>
          </Badge>
        </div>
      </div>
      <Divider />
      <div className="coluna-3-graphs">
        <div className="colunm3">
          <PieChart list={list} />
        </div>
      </div>


      <Divider className="divider" />

      <div className="coluna-1-graph">
        <div className="colunm2">
          <PieChart2 list={list} />
        </div>
      </div>


      <div className="row-3">
        <div className="item">
          <Badge color="secondary">
            <FiberManualRecordIcon className="icon-color1" />
          </Badge>
          <Badge color="secondary">
            <Typography
              className="titulo">{countPercentageGraph(list, TYPE_PLATFORM.GERAL, 'negative')}%
              Positivos</Typography>
          </Badge>
        </div>
        <div className="item">
          <Badge color="secondary">
            <FiberManualRecordIcon className="icon-color2" />
          </Badge>
          <Badge color="secondary">
            <Typography
              className="titulo">{countPercentageGraph(list, TYPE_PLATFORM.GERAL, 'positive')}%
              Negativos</Typography>
          </Badge>
        </div>
      </div>
    </div>

  )
}

export default Fontes
