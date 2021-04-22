import React, { useState } from "react"
import "./index.css"
import Drawer from "../../../components/Drawer"
import Filter from "../../../components/FilterTecnical"
import Grid from "@material-ui/core/Grid"
import Comentarios from "../../../components/PageComentarios/Comentarios"
import FiltroCaracteristica from "../../../components/FiltroCaracteristica"
import LoadingComponent from "../../../components/LoadingComponent"
import { TYPE_CARACTERISTICA } from "../../../utils/const"
import { useSelector } from "react-redux"
import { filterFeature } from "../../../helper/analise"


const ComentariosPage = (props) => {

  const [feature, setFeature] = useState(TYPE_CARACTERISTICA.GERAL)
  const { generalModel } = useSelector((state) => state);

  const getFeature = (feature) => {
    setFeature(feature)
  }

  return (
    <Drawer history={props.history} NavTitle="Analise" option={3}>
      <LoadingComponent />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Filter titulo="Comentários" />
        </Grid>
        <Grid item xs={12}>
          <FiltroCaracteristica getFeature={getFeature} />
        </Grid>
        <Grid item xs={12}>
          <Comentarios list={filterFeature(generalModel.list, feature)} />
        </Grid>
      </Grid>
    </Drawer>
  )
}

export default ComentariosPage


