import React, { Component } from "react"
import ReactToPrint from "react-to-print"
import styles from "./index.module.css"
import OpinionsByCategoryPie from "../../../components/OpinionsByCategoryPie"
import { connect } from "react-redux"
import PieChartFontsPercent from "../../../components/PieChartFontsPercent"
import { countMediaCommunication, countPerfil, groupComments, listGraph } from "../../../helper/analise"
import LineChart from "../../../components/Inicio/LineChart"
import DividedBarGraph from "../../../components/DividedBarGraph"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import ComponentPlataformasComentadas from "../../../components/Recomendados/FontesComentadas"
import ComponentPrincipaisPerfis from "../../../components/Recomendados/PrincipaisPerfis"
import CountOpinions from "../../../components/CountOpinions"
import moment from "moment"

const Header = (data, name) => {

  const start = data.dataRelatorio.start
  const end = data.dataRelatorio.end

  return (<div className={styles.header}>
    <span> {name.name} </span>
    <span>DATA: {moment(start).format("D MMM")} - {moment(end).format("DD MMM  YYYY")} </span>
  </div>)
}

class ComponentToPrint extends Component {

  render() {

    const {
      list,
      nameRestaurante,
      dataRelatorio
    } = this.props
    const listComments = groupComments(list)
    const listNegativo = listComments.filter(el => el.polaridade === "negativo").slice(0, 6)
    const comentariosPositive = listComments.filter(el => el.polaridade === "positivo").slice(0, 6)

    return (
      <div className={styles.content}>
        <div className={styles.page}>
          <div className={styles.page1}>
            <span>RELATÓRIO</span>
            <span>MENSAL</span>
            <span className={styles.name}>{nameRestaurante}</span>
          </div>
        </div>


        {dataRelatorio.state.checked1 && (
          <div className={styles.page}>
            <Header dataRelatorio={dataRelatorio} name={nameRestaurante} />
            <div className={styles.titleRelatorio}>
              Comentários por categoria
            </div>

            <CountOpinions isCount={true} list={list} />
            <DividedBarGraph list={list} />
          </div>
        )}


        {dataRelatorio.state.checked2 && (
          <div className={styles.page}>
            <Header dataRelatorio={dataRelatorio} name={nameRestaurante} />
            <div className={styles.titleRelatorio}>
              Comentários Negativos
            </div>

            <div>
              <List dense={false}>
                {listNegativo.map((item, i) => {
                  return (
                    <ListItem className={styles.listItem} key={i}>
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={item.foto} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.apelido}
                        secondary={
                          <React.Fragment>
                            {item.comentario}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  )
                })}
              </List>
            </div>
          </div>
        )}

        {dataRelatorio.state.checked3 && (
          <div className={styles.page}>
            <Header dataRelatorio={dataRelatorio} name={nameRestaurante} />
            <div className={styles.titleRelatorio}>
              Comentários Positivos
            </div>

            <div>
              <List dense={false}>
                {comentariosPositive.map((item, i) => {
                  return (
                    <ListItem className={styles.listItem} key={i}>
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={item.foto} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.apelido}
                        secondary={
                          <React.Fragment>
                            {item.comentario}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  )
                })}
              </List>
            </div>
          </div>
        )}


        {dataRelatorio.state.checked4 && (
          <div className={styles.page}>
            <Header dataRelatorio={dataRelatorio} name={nameRestaurante} />
            <div className={styles.titleRelatorio}>
              Sites mais comentados
            </div>

            <div className={styles.sitesComentados}>
              {countPerfil(this.props.list, "IDTipoFonteFK", "nomeFonte", false).map((item, i) =>
                <ComponentPlataformasComentadas key={i} item={item} />)
              }
            </div>
          </div>
        )}


        {dataRelatorio.state.checked5 && (
          <div className={styles.page}>
            <Header dataRelatorio={dataRelatorio} name={nameRestaurante} />
            <div className={styles.titleRelatorio}>
              Principais Perfis
            </div>

            <div className={styles.sitesComentados}>
              {countPerfil(this.props.list, "IDUsuarioFK", "nome", true).map((item, i) =>
                <ComponentPrincipaisPerfis key={i} item={item} />)
              }
            </div>
          </div>
        )}


        {dataRelatorio.state.checked6 && (
          <div className={styles.page}>
            <Header dataRelatorio={dataRelatorio} name={nameRestaurante} />
            <div className={styles.titleRelatorio}>
              Fontes
            </div>
            <LineChart list={listGraph(this.props.list)} />
            <PieChartFontsPercent list={countMediaCommunication(this.props.list)} />
            <OpinionsByCategoryPie list={this.props.list} />
          </div>
        )}
      </div>
    )
  }
}

class Relatorio extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {
      listRelatorio,
      dataRelatorio
    } = this.props.generalModel
    const { user } = this.props.loginModel
    return (
      <div className={styles.print}>
        <ReactToPrint
          trigger={() => <a className={styles.btn} href="#">Imprimir Relatório</a>}
          content={() => this.componentRef}
        />
        <ComponentToPrint list={listRelatorio} dataRelatorio={dataRelatorio} nameRestaurante={user.nomeRestaurante}
                          ref={(el) => (this.componentRef = el)} />
      </div>
    )
  }
}

function mapStateToProps({
  generalModel,
  loginModel
}) {
  return {
    generalModel,
    loginModel
  }
}

export default connect(mapStateToProps)(Relatorio)

