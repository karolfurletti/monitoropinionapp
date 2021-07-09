import Drawer from "../../../components/Drawer"
import Grid from "@material-ui/core/Grid"
import Filter from "../../../components/FilterTecnical"
import React, { useState } from "react"
import moment from "moment"
import { serviceApi } from "../../../Services/api"
import { useDispatch, useSelector } from "react-redux"
import CardContent from "@material-ui/core/CardContent"
import styles from "./index.module.css"
import Settings from "@material-ui/icons/Settings"
import ChatBubble from "@material-ui/icons/ChatBubble"
import Comment from "@material-ui/icons/Comment"
import PieChart from "@material-ui/icons/PieChart"
import Person from "@material-ui/icons/Person"
import Web from "@material-ui/icons/Web"
import Switch from "@material-ui/core/Switch"
import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/core/styles"
import Loading from "../../../components/loading/loading"

const useStyles = makeStyles({
  switchBase: {
    color: "white",
    "&$checked": {
      color: "#744D9C"
    },
    "&$checked + $track": {
      backgroundColor: "#7954a3"
    }
  },
  checked: {},
  track: {}
})

const PagePrincipalRelatorio = (props) => {

  const {
    loginModel
  } = useSelector((state) => state)
  const [dataStart, setDataStart] = useState(null)
  const [dateEnd, setDataEnd] = useState(null)
  const [loading, setLoading] = useState(false)
  const idRestaurante = loginModel.user.id_restaurante
  const dispatch = useDispatch()

  const classes = useStyles()
  const [checkAll, setCheckAll] = useState(true)
  const [state, setState] = useState({
    checked1: true,
    checked2: true,
    checked3: true,
    checked4: true,
    checked5: true,
    checked6: true
  })

  const setAllChecks = () => {
    setState({
      checked1: !state.checked1,
      checked2: !state.checked2,
      checked3: !state.checked3,
      checked4: !state.checked4,
      checked5: !state.checked5,
      checked6: !state.checked6
    })
    setCheckAll(!checkAll)
  }

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    })
  }

  const filterDate = (dataStart, dateEnd) => {
    setDataStart(moment(dataStart).format("YYYY-MM-DD"))
    setDataEnd(moment(dateEnd).format("YYYY-MM-DD"))
  }

  const generationReport = () => {
    setLoading(true)
    const start = dataStart
    const end = dateEnd
    const options = {
      params: {
        start,
        end,
        idRestaurante
      }
    }
    serviceApi.get("/getDados", options).then(response => {
      const { list } = response.data
      dispatch.generalModel.setListRelatorio(list)
      dispatch.generalModel.setDataRelatorio({
        start,
        end,
        state
      })
      setLoading(false)

      window.open("relatorioPrint", "_blank");
      // props.history.push("relatorioPrint")

    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <Drawer history={props.history} NavTitle="Analise" option={1}>
      <Loading open={loading} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Filter filterDate={filterDate} titulo="Relatório" />
        </Grid>

        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <div className={styles.containerTitle}>
                <Settings style={{ color: "#744D9C" }} />
                <span className={styles.titleHeader}>Escolha o conteúdo do relatório</span>
              </div>

              <div className={styles.row} />

              <div className={styles.incluirTodos}>
                <Switch
                  classes={{
                    switchBase: classes.switchBase,
                    track: classes.track,
                    checked: classes.checked
                  }}
                  checked={checkAll}
                  onChange={setAllChecks}
                  name="checkAll"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
                <span>Incluir Todos</span>
              </div>


              <div style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 20
              }}>
                <Grid item xs={6}>
                  <div className={styles.item}>

                    <div style={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <Comment style={{
                        color: "#744D9C",
                        marginLeft: 10
                      }} />
                      <span className={styles.titleItem}>Comentarios por categoria</span>
                    </div>
                    <Switch
                      classes={{
                        switchBase: classes.switchBase,
                        track: classes.track,
                        checked: classes.checked
                      }}
                      checked={state.checked1}
                      onChange={handleChange}
                      name="checked1"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                  </div>


                  <div className={styles.item}>
                    <div style={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <ChatBubble style={{
                        color: "#744D9C",
                        marginLeft: 10
                      }} />
                      <span className={styles.titleItem}>Comentarios Negativos</span>
                    </div>
                    <Switch
                      classes={{
                        switchBase: classes.switchBase,
                        track: classes.track,
                        checked: classes.checked
                      }}
                      checked={state.checked2}
                      onChange={handleChange}
                      name="checked2"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                  </div>


                  <div className={styles.item}>

                    <div style={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <ChatBubble style={{
                        color: "#744D9C",
                        marginLeft: 10
                      }} />
                      <span className={styles.titleItem}>Comentarios Positivos</span>
                    </div>
                    <Switch
                      classes={{
                        switchBase: classes.switchBase,
                        track: classes.track,
                        checked: classes.checked
                      }}
                      checked={state.checked3}
                      onChange={handleChange}
                      name="checked3"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                  </div>

                </Grid>
                <Grid style={{ marginLeft: 20 }} item xs={6}>
                  <div className={styles.item}>

                    <div style={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <Web style={{
                        color: "#744D9C",
                        marginLeft: 10
                      }} />
                      <span className={styles.titleItem}>Sites mais comentados</span>
                    </div>
                    <Switch
                      classes={{
                        switchBase: classes.switchBase,
                        track: classes.track,
                        checked: classes.checked
                      }}
                      checked={state.checked4}
                      onChange={handleChange}
                      name="checked4"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                  </div>


                  <div className={styles.item}>

                    <div style={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <Person style={{
                        color: "#744D9C",
                        marginLeft: 10
                      }} />
                      <span className={styles.titleItem}>Principais Perfis</span>
                    </div>
                    <Switch
                      classes={{
                        switchBase: classes.switchBase,
                        track: classes.track,
                        checked: classes.checked
                      }}
                      checked={state.checked5}
                      onChange={handleChange}
                      name="checked5"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                  </div>

                  <div className={styles.item}>

                    <div style={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <PieChart style={{
                        color: "#744D9C",
                        marginLeft: 10
                      }} />
                      <span className={styles.titleItem}>Fontes</span>
                    </div>
                    <Switch
                      classes={{
                        switchBase: classes.switchBase,
                        track: classes.track,
                        checked: classes.checked
                      }}
                      checked={state.checked6}
                      onChange={handleChange}
                      name="checked6"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                  </div>
                </Grid>
              </div>


              <div className={styles.generationReport}>
                <div onClick={() => generationReport()} className={styles.btnGeneration}>Gerar Relatório</div>
              </div>


            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Drawer>
  )
}

export default PagePrincipalRelatorio
