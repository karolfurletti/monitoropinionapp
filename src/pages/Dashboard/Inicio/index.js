import React, { useState, useEffect } from "react"
import "./index.css"
import Drawer from "../../../components/Drawer"
import Fontes from "../../../components/Comparacao/Fontes"
import Fontes2 from "../../../components/Fontes2"
import Comentarios from "../../../components/Inicio/Comentarios"
import Filter from "../../../components/FilterTecnical"
import Recomendados from "../../../components/Recomendados"
import Grid from "@material-ui/core/Grid"
import LineChart from "../../../components/Inicio/LineChart"
import Loading from "../../../components/loading/loading"
import { serviceApi } from "../../../Services/api"
import { useSelector, useDispatch } from "react-redux"
import { groupComments, listGraph } from "../../../helper/analise"
import moment from "moment"

const Index = (props) => {

// eslint-disable-next-line
  const [loading, setLoading] = useState(false)
  const {
    generalModel,
    loginModel
  } = useSelector((state) => state)
  const idRestaurante = loginModel.user.id_restaurante
  const [list, setList] = useState(generalModel.list)
  const dispatch = useDispatch()

  useEffect(() => {
    loadDados()
    // eslint-disable-next-line
  }, [])

  const loadDados = () => {
    setLoading(true)
    const options = { params: { idRestaurante} }
    serviceApi.get("/getDados", options).then(response => {
      const { list } = response.data
      dispatch.generalModel.setListDados(list)
      setList(list)
      setLoading(false)
    }).catch(err => {
      console.log(err)
    })
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
    <Drawer history={props.history} NavTitle="Visão Geral" option={0}>
      <Loading open={loading} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Filter filterDate={filterDate} titulo="Visão Geral" />
        </Grid>
        <Grid item xs={12}>
          <LineChart list={listGraph(list)} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Comentarios list={groupComments(list)} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Fontes list={list} />
        </Grid>
        <Grid item xs={6} sm={12} md={6}>
          <Recomendados list={list} />
        </Grid>
        <Grid item xs={6} sm={12} md={6}>
          <Fontes2 list={list} />
        </Grid>
        <Grid item xs={6} sm={3} />
        <Grid item xs={6} sm={3} />
      </Grid>
    </Drawer>
  )

}

export default Index

