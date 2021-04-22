import React, { useState } from "react"
import "./index.css"
import Drawer from "../../../components/Drawer"
import Filter from "../../../components/FilterTecnical"
import Grid from "@material-ui/core/Grid"
import Fontes from "../../../components/Comparacao/Fontes"
import Comentarios from "../../../components/Inicio/Comentarios"
import FiltroCaracteristica from "../../../components/FiltroCaracteristica"
import LineChart from "../../../components/Inicio/LineChart"
import LoadingComponent from "../../../components/LoadingComponent"
import Fontes2 from "../../../components/Fontes2/SmallVersion"
import DetalhesFontes from "../../../components/DetalhesFontes"
import { useSelector } from "react-redux"
import { filterFeature, listGraph } from "../../../helper/analise"
import { TYPE_CARACTERISTICA } from "../../../utils/const"

const Analise = (props) => {

  const { generalModel } = useSelector((state) => state)
  const [feature, setFeature] = useState(TYPE_CARACTERISTICA.GERAL)

  const getFeature = (feature) => {
    setFeature(feature)
  }

  return (
    <Drawer history={props.history} NavTitle="Analise" option={1}>
      <LoadingComponent />
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Filter titulo="Análise" />
        </Grid>

        <Grid item xs={12}>
          <FiltroCaracteristica getFeature={getFeature} />
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <LineChart list={listGraph(filterFeature(generalModel.list, feature))} />
            </Grid>

            <Grid item xs={6}>
              <Comentarios list={filterFeature(generalModel.list, feature)} />
            </Grid>

            <Grid item xs={6}>
              <Fontes list={filterFeature(generalModel.list, feature)} />
            </Grid>

            <Grid item xs={6} sm={12} md={6}>
              <DetalhesFontes list={filterFeature(generalModel.list, feature)} />
            </Grid>

            <Grid item xs={6} sm={12} md={6}>
              <Fontes2 list={filterFeature(generalModel.list, feature)} />
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  )
}
export default Analise
