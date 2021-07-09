import React, { useEffect, useState } from "react"
import "./index.css"
import Drawer from "../../../components/Drawer"
import Filter from "../../../components/FilterTecnical"
import DetalhesFontes from "../../../components/Comparacao/DetalhesFontes"
import Grid from "@material-ui/core/Grid"
import LineChart from "../../../components/Comparacao/LineChart"
import Fontes from "../../../components/Comparacao/Fontes"
import FiltroCaracteristica from "../../../components/FiltroCaracteristica"
import { TYPE_CARACTERISTICA } from "../../../utils/const"
import { filterFeature, listGraph } from "../../../helper/analise"
import { useSelector } from "react-redux"
import Fontes2 from "../../../components/Comparacao/Fontes2"
import { serviceApi } from "../../../Services/api"
import Loading from "../../../components/loading/loading"
import axios from "axios"
import moment from "moment"
// import Fontes2Concorrente from "../../../components/Comparacao/Fontes2Concorrente"

const ComparacaoPage = (props) => {

  const url = props.location.pathname
  const id = url.split("/")
  const {
    generalModel,
    loginModel
  } = useSelector((state) => state)
  const [feature, setFeature] = useState(TYPE_CARACTERISTICA.GERAL)
  const [listComparation, setListComparation] = useState([])
  const [list, setList] = useState(generalModel.list)
  const [loading, setLoading] = useState(false)
  const idRestaurante = loginModel.user.id_restaurante
  const item = generalModel.listComparation.filter(el => el.IDRestaurante === parseInt(id[3]))

  useEffect(() => {
    getListComparation()
    // eslint-disable-next-line
  }, [])

  const getFeature = (feature) => {
    setFeature(feature)
  }

  const getListComparation = () => {
    setLoading(true)
    const options = { params: { idRestaurante: parseInt(id[3]) } }
    serviceApi.get("/getDados", options).then(response => {
      const { list } = response.data
      setListComparation(list)
      setLoading(false)
    }).catch(err => {
      console.log(err)
    })
  }

  const filterDate = (dataStart, dateEnd) => {

    const start = moment(dataStart).format("YYYY-MM-DD")
    const end = moment(dateEnd).format("YYYY-MM-DD")

    const options = {
      params: {
        start,
        end,
        idRestaurante
      }
    }
    const optionsComparation = {
      params: {
        start,
        end,
        idRestaurante: parseInt(id[3])
      }
    }

    axios.all([
      axios.get("http://api.monitoropinion.com/getDados", options),
      axios.get("http://api.monitoropinion.com/getDados", optionsComparation)
    ]).then(axios.spread((list, listComparation) => {
      const listDefault = list.data.list
      const listComp = listComparation.data.list
      setListComparation(listComp)
      setList(listDefault)
      setLoading(false)
    }))
  }


  return (
    <Drawer history={props.history} NavTitle="Comparacao" option={6}>
      <Loading open={loading} />

      {!loading && (
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <Filter filterDate={filterDate} titulo="Comparação" />
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
                <LineChart
                  name={loginModel.user.nomeRestaurante}
                  nameComparation={item[0].nomeRestaurante}
                  list={listGraph(filterFeature(list, feature))}
                  listComparation={listGraph(filterFeature(listComparation, feature))}
                />
              </Grid>

              <Grid item xs={6}>
                <Fontes list={filterFeature(list, feature)} title={loginModel.user.nomeRestaurante} variante="main" />
              </Grid>

              <Grid item xs={6}>
                <Fontes list={filterFeature(listComparation, feature)} title={item[0].nomeRestaurante} />
              </Grid>

              <Grid item xs={6}>
                <DetalhesFontes list={filterFeature(list, feature)} variante="main" />
              </Grid>
              <Grid item xs={6}>
                <DetalhesFontes list={filterFeature(listComparation, feature)} variante="concorrente" />
              </Grid>

              <Grid item xs={6}>
                <Fontes2 list={filterFeature(list, feature)} variante="main" />
              </Grid>

              <Grid item xs={6}>
                <Fontes2 list={filterFeature(listComparation, feature)} variante="main" />
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      )}
    </Drawer>
  )
}

export default ComparacaoPage
