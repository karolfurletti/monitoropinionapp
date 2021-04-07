import React, { PureComponent } from "react"
import "./index.css"
import { connect } from "react-redux"
import PieChart from "../PieChart4ByCategoryPie"

// import Filtros from "../../Filtros"
import Typography from "@material-ui/core/Typography"
import Badge from "@material-ui/core/Badge"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"

class OpinionsByCategoryPie extends PureComponent {

  render() {
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

            {this.props.PrincipaisPlataformas.map((item, index) => {
              return (
                <Grid item xs={3} justify="center">

                  <div className="PieItem">
                    <PieChart item={item}/>
                    <div className="labelPieItem">{item.plataforma}</div>
                  </div>


                </Grid>
              )
            })}
          </Grid>


        </div>
      </div>
    )

  }
}

function mapStateToProps(state) {
  return {
    PrincipaisPerfis: state.PrincipaisPerfis,
    PrincipaisPlataformas: state.PrincipaisPlataformas
  }
}

export default connect(mapStateToProps)(OpinionsByCategoryPie)
