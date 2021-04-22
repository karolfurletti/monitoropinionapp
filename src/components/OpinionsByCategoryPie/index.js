import React from "react"
import "./index.css"
import PieChart from "../PieChart4ByCategoryPie"
import Typography from "@material-ui/core/Typography"
import Badge from "@material-ui/core/Badge"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import { countPlatform } from "../../helper/analise"

const OpinionsByCategoryPie = (props) => {

  const { list } = props

  return (
    <div className="CardOpinionsByCategoryPie">
      <div className="legenda">
        <Badge color="secondary">
          <Typography className="tituloCard">Plataformas</Typography>
        </Badge>
      </div>
      <Divider />

      <div className="RowPies">
        <Grid container spacing={1} justify="center">
          {countPlatform(list).map((item, index) => {
            return (
              <Grid key={index} item xs={3} justify="center">
                <div className="PieItem">
                  <PieChart item={item} />
                  <div className="labelPieItem">{item.plataform}</div>
                </div>
              </Grid>
            )
          })}
        </Grid>

      </div>
    </div>
  )
}

export default OpinionsByCategoryPie
