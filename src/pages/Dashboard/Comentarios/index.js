import React, { useState } from "react"
import "./index.css"
import Drawer from "../../../components/Drawer"
import Filter from "../../../components/FilterTecnical"
import Grid from "@material-ui/core/Grid"
import Comentarios from "../../../components/PageComentarios/Comentarios"
import FiltroCaracteristica from "../../../components/FiltroCaracteristica"
import { TYPE_CARACTERISTICA } from "../../../utils/const"
import { useSelector } from "react-redux"
import { filterFeature, groupComments } from "../../../helper/analise"
import moment from "moment"
import { serviceApi } from "../../../Services/api"
import Loading from "../../../components/loading/loading"

const ComentariosPage = (props) => {

  const [feature, setFeature] = useState(TYPE_CARACTERISTICA.GERAL)
  const { generalModel, loginModel } = useSelector((state) => state)
  const listComments = groupComments(generalModel.list)
  const idRestaurante = loginModel.user.id_restaurante
  const [list, setList] = useState(listComments)
  const [loading, setLoading] = useState(false)


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
      setList(groupComments(list))
      setLoading(false)
    }).catch(err => {
      console.log(err)
    })
  }


  return (
    <Drawer history={props.history} NavTitle="Analise" option={3}>
      <Loading open={loading} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Filter filterDate={filterDate} titulo="Comentários" />
        </Grid>
        <Grid item xs={12}>
          <FiltroCaracteristica getFeature={getFeature} />
        </Grid>
        <Grid item xs={12}>
          <Comentarios list={filterFeature(list, feature)} />
        </Grid>
      </Grid>
    </Drawer>
  )
}

export default ComentariosPage


