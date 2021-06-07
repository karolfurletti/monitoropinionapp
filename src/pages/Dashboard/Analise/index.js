import React, { useState } from "react"
import "./index.css"
import Drawer from "../../../components/Drawer"
import Filter from "../../../components/FilterTecnical"
import Grid from "@material-ui/core/Grid"
import Fontes from "../../../components/Comparacao/Fontes"
import Comentarios from "../../../components/Inicio/Comentarios"
import FiltroCaracteristica from "../../../components/FiltroCaracteristica"
import LineChart from "../../../components/Inicio/LineChart"
import Fontes2 from "../../../components/Fontes2/SmallVersion"
import DetalhesFontes from "../../../components/DetalhesFontes"
import { useSelector } from "react-redux"
import { filterFeature, listGraph } from "../../../helper/analise"
import { TYPE_CARACTERISTICA } from "../../../utils/const"
import moment from "moment"
import { serviceApi } from "../../../Services/api"
import Loading from "../../../components/loading/loading"

const Analise = (props) => {

  const { generalModel, loginModel } = useSelector((state) => state)
  const [feature, setFeature] = useState(TYPE_CARACTERISTICA.GERAL)
  const [list, setList] = useState(generalModel.list)
  const [loading, setLoading] = useState(false)
  const idRestaurante = loginModel.user.id_restaurante
  const getFeature = (feature) => {
    setFeature(feature)
  }

  const filterDate = (dataStart, dateEnd) => {
    setLoading(true)
    const start = moment(dataStart).format("YYYY-MM-DD")
    const end = moment(dateEnd).format("YYYY-MM-DD")
    const options = {
      params: {
        start,
        end,
        idRestaurante
      }
    }
    serviceApi.get("/getDados", options).then(response => {
      const { list } = response.data
      setList(list)
      setLoading(false)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <Drawer history={props.history} NavTitle="Analise" option={1}>
      <Loading open={loading} />
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Filter filterDate={filterDate} titulo="Análise" />
        </Grid>

        <Grid item xs={12}>
          <FiltroCaracteristica getFeature={getFeature} />
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <LineChart list={listGraph(filterFeature(list, feature))} />
            </Grid>

            <Grid item xs={6}>
              <Comentarios list={filterFeature(list, feature)} />
            </Grid>

            <Grid item xs={6}>
              <Fontes list={filterFeature(list, feature)} />
            </Grid>

            <Grid item xs={6} sm={12} md={6}>
              <DetalhesFontes list={filterFeature(list, feature)} />
            </Grid>

            <Grid item xs={6} sm={12} md={6}>
              <Fontes2 list={filterFeature(list, feature)} />
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  )
}
export default Analise
