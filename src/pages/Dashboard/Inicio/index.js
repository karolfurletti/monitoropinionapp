import React, {useState, useEffect} from "react"
import "./index.css"
import Drawer from "../../../components/Drawer"
import Fontes from "../../../components/Comparacao/Fontes"
import Fontes2 from "../../../components/Fontes2"
import Comentarios from "../../../components/Inicio/Comentarios"
import Filter from "../../../components/FilterTecnical"
import Recomendados from "../../../components/Recomendados"
import Grid from "@material-ui/core/Grid"
import LineChart from "../../../components/Inicio/LineChart"
import LoadingComponent from "../../../components/LoadingComponent"
import { serviceApi } from "../../../Services/api"
import { useSelector, useDispatch } from "react-redux";
import { listGraph } from "../../../helper/analise"
const Index = (props) => {

// eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const { generalModel } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    loadDados()
    // eslint-disable-next-line
  }, []);

  const loadDados = () => {
    setLoading(true)
    serviceApi.get("/getDados").then(response => {
      const { list } = response.data
      dispatch.generalModel.setListDados(list);
      setLoading(false)
    }).catch(err => {
      console.log(err)
    })
  }


  return (
    <Drawer history={props.history} NavTitle="Visão Geral" option={0}>
      <LoadingComponent />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Filter titulo="Visão Geral" />
        </Grid>
        <Grid item xs={12}>
          <LineChart list={listGraph(generalModel.list)} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Comentarios list={generalModel.list} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Fontes list={generalModel.list}  />
        </Grid>
        <Grid item xs={6} sm={12} md={6}>
          <Recomendados />
        </Grid>
        <Grid item xs={6} sm={12} md={6}>
          <Fontes2 list={generalModel.list} />
        </Grid>
        <Grid item xs={6} sm={3} />
        <Grid item xs={6} sm={3} />
      </Grid>
    </Drawer>
  )

}

export default Index

