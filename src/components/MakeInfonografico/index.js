import React from "react"
import "./index.css"
import LineChart from "../Inicio/LineChart"
import Grid from "@material-ui/core/Grid"
import Logo from "../../Assets/logocolorida.png"
import Typography from "@material-ui/core/Typography"
import CountOpinions from "../CountOpinions"
import DividedBarGraph from "../../components/DividedBarGraph"
import FontesPercent from "../Fontes2/SmallVersion"
import PieChartFontsPercent from "../../components/PieChartFontsPercent"
import { countMediaCommunication, listGraph } from "../../helper/analise"

const MakeInfonografico = (props) => {

  const { list, name, logomarca } = props

  return (
    <div>
      <div className="imgContainer">
        <div id="img">
        </div>
      </div>

      <div className="Canvas">
        <div id="infografico">
          <div className="Area-Content">

            <div className="Head-Space">

              <div className="Logo-Space">
                <div className="container-img">
                  <img alt="" className="logo-img" src={Logo} />
                </div>
                <div className="container-titulo">
                  <Typography className="title">RESUMO DO INFOGRÁFICO</Typography>
                </div>
              </div>

              {/* <div className='Logo-Space'>
                    <div className='container-titulo-estabelecimento'>
                      <Typography className="title">Essência do Sabor</Typography>
                    </div>
                  </div>  */}

              <div className="LogoEstabelecimento-Space">
                <div className="container-img">
                  <img alt="" className="logo-img" src={logomarca} />
                </div>
                <div className="container-tituloo">
                  <Typography className="title">{name}</Typography>
                </div>
              </div>
            </div>


            <Grid container spacing={2}>

              <Grid item xs={4}>
                <CountOpinions list={list} />
              </Grid>

              <Grid item xs={8}>
                <DividedBarGraph list={list} />
                {/*<LineChart list={listGraph(list)} />*/}
              </Grid>

              {/*<Grid item xs={4}>*/}
              {/*  <DividedBarGraph list={list} />*/}
              {/*</Grid>*/}


              <Grid item xs={4}>
                <LineChart list={listGraph(list)} />
                {/*<DetalhesFontes list={list} />*/}
              </Grid>


              <Grid item xs={4}>
                <FontesPercent list={list} />
              </Grid>

              <Grid item xs={4}>
                <PieChartFontsPercent list={countMediaCommunication(list)} />
              </Grid>
            </Grid>
          </div>

        </div>
      </div>

    </div>
  )
}

export default MakeInfonografico
