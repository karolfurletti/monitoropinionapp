import React from "react"
import PieChart from "./PieChart"
import PieChart2 from "./PieChart2"
import Typography from "@material-ui/core/Typography"
import Badge from "@material-ui/core/Badge"
import Divider from "@material-ui/core/Divider"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import "./index.css"
import { connect } from "react-redux"

class Fontes extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count_opinions: 0,
      negative_opinions: 0,
      positive_opinions: 0,
      percent_positive: 0,
      percent_negative: 0

    }
  }

  componentDidUpdate() {
    if (this.props.variante === "concorrente") {
      if (this.state.count_opinions !== this.props.QuantidadeOpinionsConcorrente) {
        this.setState({ count_opinions: this.props.QuantidadeOpinionsConcorrente })
      }

      if (this.state.negative_opinions !== this.props.NegativeOpinionsConcorrente) {
        this.setState({ negative_opinions: this.props.NegativeOpinionsConcorrente })
      }

      if (this.state.positive_opinions !== this.props.PositiveOpinionsConcorrente) {
        this.setState({ positive_opinions: this.props.PositiveOpinionsConcorrente })
      }

      if (this.state.percent_positive !== this.props.PercentOpinionsPositiveConcorrente) {
        this.setState({ percent_positive: this.props.PercentOpinionsPositiveConcorrente })
        this.setState({ percent_negative: this.props.PercentOpinionsNegativeConcorrente })
      }
    } else {
      if (this.state.count_opinions !== this.props.QuantidadeOpinions) {
        this.setState({ count_opinions: this.props.QuantidadeOpinions })
      }

      if (this.state.negative_opinions !== this.props.NegativeOpinions) {
        this.setState({ negative_opinions: this.props.NegativeOpinions })
      }

      if (this.state.positive_opinions !== this.props.PositiveOpinions) {
        this.setState({ positive_opinions: this.props.PositiveOpinions })
      }

      if (this.state.percent_positive !== this.props.PercentOpinionsPositive) {
        this.setState({ percent_positive: this.props.PercentOpinionsPositive })
        this.setState({ percent_negative: this.props.PercentOpinionsNegative })
      }
    }

  }

  render() {
    return (
      <div className="comparacao">
        <div className="legenda">

          <Badge color="secondary">
            <Typography className="tituloCard">{this.props.title}</Typography>
          </Badge>
        </div>
        <Divider />

        <div className="row-1">
          <div className="item">
            <Badge color="secondary">
              <Typography className="numero">{this.state.count_opinions}</Typography>
            </Badge>
            <Badge color="secondary">
              <Typography className="titulo">Opiniões</Typography>
            </Badge>
          </div>
          <div className="item">
            <Badge color="secondary">
              <Typography className="numero2">{this.state.positive_opinions}</Typography>
            </Badge>
            <Badge color="secondary">
              <Typography className="titulo">Positivas</Typography>
            </Badge>
          </div>
          <div className="item">
            <Badge color="secondary">
              <Typography className="numero3">{this.state.negative_opinions}</Typography>
            </Badge>
            <Badge color="secondary">
              <Typography className="titulo">Negativas</Typography>
            </Badge>
          </div>
        </div>
        <Divider />
        <div className="coluna-3-graphs">
          <div className="colunm3">

            <PieChart variante={this.props.variante} />
          </div>
        </div>


        <Divider className="divider" />


        <div className="coluna-1-graph">
          <div className="colunm2">
            <PieChart2 variante={this.props.variante} />
          </div>
        </div>


        <div className="row-3">
          <div className="item">
            <Badge color="secondary">
              <FiberManualRecordIcon className="icon-color1" />
            </Badge>
            <Badge color="secondary">
              <Typography
                className="titulo">{this.props.variante === "concorrente" ? this.props.PercentOpinionsPositiveConcorrente : this.props.PercentOpinionsPositive}%
                Positivos</Typography>
            </Badge>
          </div>
          <div className="item">
            <Badge color="secondary">
              <FiberManualRecordIcon className="icon-color2"/>
            </Badge>
            <Badge color="secondary">
              <Typography
                className="titulo">{this.props.variante === "concorrente" ? this.props.PercentOpinionsNegativeConcorrente : this.props.PercentOpinionsNegative}%
                Negativos</Typography>
            </Badge>
          </div>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {

    chart_opinions: state.chart_opinions,

    QuantidadeOpinions: state.QuantidadeOpinions,
    NegativeOpinions: state.NegativeOpinions,
    PositiveOpinions: state.PositiveOpinions,
    PercentOpinionsNegative: state.PercentOpinionsNegative,
    PercentOpinionsPositive: state.PercentOpinionsPositive,

    QuantidadeOpinionsConcorrente: state.QuantidadeOpinionsConcorrente,
    NegativeOpinionsConcorrente: state.NegativeOpinionsConcorrente,
    PositiveOpinionsConcorrente: state.PositiveOpinionsConcorrente,
    PercentOpinionsNegativeConcorrente: state.PercentOpinionsNegativeConcorrente,
    PercentOpinionsPositiveConcorrente: state.PercentOpinionsPositiveConcorrente

  }
}

export default connect(mapStateToProps)(Fontes)
