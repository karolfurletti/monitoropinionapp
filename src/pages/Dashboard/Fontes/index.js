import React, { useState } from "react"
import "./index.css"
import Drawer from "../../../components/Drawer"
import Filter from "../../../components/FilterTecnical"
import DetalhesFontes from "../../../components/DetalhesFontes"
import Grid from "@material-ui/core/Grid"
import Fontes2 from "../../../components/Fontes2/SmallVersion"
import Fontes from "../../../components/Comparacao/Fontes"
import PieChartFontsPercent from "../../../components/PieChartFontsPercent"
import OpinionsByCategoryPie from "../../../components/OpinionsByCategoryPie"
import { useSelector } from "react-redux"
import { countMediaCommunication } from "../../../helper/analise"
import Loading from "../../../components/loading/loading"
import moment from "moment"
import { serviceApi } from "../../../Services/api"

const FontesPage = (props) => {

  const { generalModel, loginModel } = useSelector((state) => state)
  const [list, setList] = useState(generalModel.list)
  const [loading, setLoading] = useState(false)
  const idRestaurante = loginModel.user.id_restaurante

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
    <Drawer history={props.history} NavTitle="Visão Geral" option={2}>
      <Loading open={loading} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Filter  titulo="Fontes" filterDate={filterDate} />
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
