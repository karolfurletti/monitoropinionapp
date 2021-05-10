import React from "react"
import Typography from "@material-ui/core/Typography"
import Badge from "@material-ui/core/Badge"
import Divider from "@material-ui/core/Divider"
import OpinionsByCategoryPie from "../../components/OpinionsByCategoryPie"
import "./index.css"
import { TYPE_PLATFORM } from "../../utils/const"
import { countComments } from "../../helper/analise"

const CountOpinions = (props) => {

  const { list } = props

  return (
    <div>
      <div className="comparacao-count-opinions">
        <div className="legenda">

          <Badge color="secondary">
            <Typography className="tituloCard">Opiniões</Typography>
          </Badge>
        </div>
        <Divider />

        <div className="row-1">
          <div className="item">
            <Badge color="secondary">
              <Typography className="numero">{countComments(list, TYPE_PLATFORM.GERAL)}</Typography>
            </Badge>
            <Badge color="secondary">
              <Typography className="titulo">Opiniões</Typography>
            </Badge>
          </div>
          <div className="item">
            <Badge color="secondary">
              <Typography className="numero2">{countComments(list, TYPE_PLATFORM.GERAL, 'positivo')}</Typography>
            </Badge>
            <Badge color="secondary">
              <Typography className="titulo">Positivas</Typography>
            </Badge>
          </div>
          <div className="item">
            <Badge color="secondary">
              <Typography className="numero3">{countComments(list, TYPE_PLATFORM.GERAL, 'negativo')}</Typography>
            </Badge>
            <Badge color="secondary">
              <Typography className="titulo">Negativas</Typography>
            </Badge>
          </div>
        </div>
        <Divider />
      </div>
      <OpinionsByCategoryPie list={list} />
    </div>
  )
}

export default CountOpinions
