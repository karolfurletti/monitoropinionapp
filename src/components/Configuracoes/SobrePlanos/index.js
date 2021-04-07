import React, { Component } from "react"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import { connect } from "react-redux"
import StarIcon from "@material-ui/icons/Star"
import CommentIcon from "@material-ui/icons/Comment"
import PersonIcon from "@material-ui/icons/Person"
import RotateLeftIcon from "@material-ui/icons/RotateLeft"
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"
import "./index.css"

class SobrePlanos extends Component {

  componentDidMount() {
    //this.AtualizarLineChart(this.props.opinions_by_cronology, this.props.estado_button_filter, "7dias")
  }

  componentDidUpdate(nextProps, nextState) {
    // if(nextProps.opinions_by_cronology !== this.props.opinions_by_cronology){
    //    this.AtualizarLineChart(this.props.opinions_by_cronology, this.props.estado_button_filter)
    // }
  }

  render() {
    return (
      <div className="card-sobre-planos">
        <div className="titulo">
          <div><Typography className="titulo-pagina">Sobre</Typography></div>

        </div>
        <Divider />
        <div className="content">
          <div className="icon">
            <StarIcon className="iconicon" />
          </div>
          <div className="texto-container">
            <Typography className="texto">Conta <span className="plano">{this.props.plano}</span> {this.props.text}
            </Typography>
          </div>


          <div className="info-container">
            <div className="icon-menor"><CommentIcon /></div>
            <div className="info">{this.props.numberofcomentsplan} 10 mil comentários por mês</div>
          </div>


          <div className="info-container">
            <div className="icon-menor"><PersonIcon /></div>
            <div className="info">{this.props.numberofusers} 2 usuários</div>
          </div>


          <div className="info-container">
            <div className="icon-menor"><RotateLeftIcon /></div>
            <div className="info">Atualizações Diárias</div>
          </div>

          <div className="info-container">
            <div className="icon-menor"><PictureAsPdfIcon /></div>
            <div className="info">Relatórios em PDF</div>
          </div>


        </div>
      </div>
    )

  }
}

function mapActionCreatorsToProps(dispatch) {
  return {}
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(SobrePlanos)
