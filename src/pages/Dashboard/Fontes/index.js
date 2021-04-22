import React from "react"
import "./index.css"
import Drawer from "../../../components/Drawer"
import Filter from "../../../components/FilterTecnical"
import DetalhesFontes from "../../../components/DetalhesFontes"
import Grid from "@material-ui/core/Grid"
import Fontes2 from "../../../components/Fontes2/SmallVersion"
import Fontes from "../../../components/Comparacao/Fontes"
import PieChartFontsPercent from "../../../components/PieChartFontsPercent"
import LoadingComponent from "../../../components/LoadingComponent"
import OpinionsByCategoryPie from "../../../components/OpinionsByCategoryPie"
import { useSelector } from "react-redux"
import { countMediaCommunication } from "../../../helper/analise"

const FontesPage = (props) => {

  const { generalModel } = useSelector((state) => state)
  const list = generalModel.list

  return (
    <Drawer history={props.history} NavTitle="Visão Geral" option={2}>
      <LoadingComponent />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Filter />
        </Grid>
        {/* <Grid item xs={12}>
                <WaveChart></WaveChart>
            </Grid> */}
        {/* <Grid item xs={12}>
                <WaveChart></WaveChart>
            </Grid>  */}
        <Grid item md={12} sm={12}>
          <Fontes list={list} />
        </Grid>
        <Grid item md={6} sm={12}>
          <OpinionsByCategoryPie list={list} />
        </Grid>
        <Grid item md={6} sm={12}>
          <DetalhesFontes list={list} />
        </Grid>
        <Grid item md={6} sm={12}>
          <Fontes2 list={list} />
        </Grid>

        <Grid item xs={6} sm={12} md={6}>
          <PieChartFontsPercent list={countMediaCommunication(list)} />
        </Grid>
      </Grid>
    </Drawer>
  )
}
export default FontesPage
