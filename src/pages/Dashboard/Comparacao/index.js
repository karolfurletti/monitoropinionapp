import React, { useState } from "react"
import "./index.css"
import Drawer from "../../../components/Drawer"
import Filter from "../../../components/Comparacao/FilterTecnical"
import DetalhesFontes from "../../../components/Comparacao/DetalhesFontes"
import Grid from "@material-ui/core/Grid"
import LineChart from "../../../components/Comparacao/LineChart"
import Fontes from "../../../components/Comparacao/Fontes"
import FiltroCaracteristica from "../../../components/FiltroCaracteristica"
import LoadingComponent from "../../../components/LoadingComponent"
import { TYPE_CARACTERISTICA } from "../../../utils/const"
import { filterFeature, listGraph } from "../../../helper/analise"
import { useSelector } from "react-redux"
import Fontes2 from "../../../components/Comparacao/Fontes2"
// import Fontes2Concorrente from "../../../components/Comparacao/Fontes2Concorrente"

const ComparacaoPage = (props) => {

  const { generalModel } = useSelector((state) => state)
  const [feature, setFeature] = useState(TYPE_CARACTERISTICA.GERAL)

  const getFeature = (feature) => {
    setFeature(feature)
  }

  return (
    <Drawer history={props.history} NavTitle="Comparacao" option={6}>
      <LoadingComponent />

      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Filter titulo="Comparação" />
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            {/* <Grid item xs={12}>
                    <Sugestoes />
                </Grid> */}

            <Grid item xs={12}>
              <FiltroCaracteristica getFeature={getFeature} page="comparacao" />
            </Grid>

            <Grid item xs={12}>
              <LineChart list={listGraph(filterFeature(generalModel.list, feature))} />
            </Grid>

            <Grid item xs={6}>
              <Fontes list={filterFeature(generalModel.list, feature)} title="Essencia do Sabor" variante="main" />
            </Grid>

            <Grid item xs={6}>
              <Fontes list={filterFeature(generalModel.list, feature)} title={"Burguer King"} />
            </Grid>

            <Grid item xs={6}>
              <DetalhesFontes list={filterFeature(generalModel.list, feature)} variante="main" />
            </Grid>
            <Grid item xs={6}>
              <DetalhesFontes list={filterFeature(generalModel.list, feature)} variante="concorrente" />
            </Grid>

            <Grid item xs={6}>
              <Fontes2 list={filterFeature(generalModel.list, feature)} variante="main" />
            </Grid>

            <Grid item xs={6}>
              <Fontes2 list={filterFeature(generalModel.list, feature)} variante="main" />
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  )
}

export default ComparacaoPage
