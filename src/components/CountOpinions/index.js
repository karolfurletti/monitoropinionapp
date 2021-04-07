import React from "react"
import Typography from "@material-ui/core/Typography"
import Badge from "@material-ui/core/Badge"
import Divider from "@material-ui/core/Divider"
import OpinionsByCategoryPie from "../../components/OpinionsByCategoryPie"
import "./index.css"
import { connect } from "react-redux"

class CountOpinions extends React.Component {

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

  }

  render() {
    return (
      <div>
        <div className="comparacao-count-opinions">
          <div className="legenda">

            <Badge color="secondary">
              <Typography className="tituloCard">Opiniões</Typography>
            </Badge>
          </div>
          <Divider />

          <div className="row-1">
            <div className="item">
              <Badge color="secondary">
                <Typography className="numero">{this.props.QuantidadeOpinions}</Typography>
              </Badge>
              <Badge color="secondary">
                <Typography className="titulo">Opiniões</Typography>
              </Badge>
            </div>
            <div className="item">
              <Badge color="secondary">
                <Typography className="numero2">{this.props.PositiveOpinions}</Typography>
              </Badge>
              <Badge color="secondary">
                <Typography className="titulo">Positivas</Typography>
              </Badge>
            </div>
            <div className="item">
              <Badge color="secondary">
                <Typography className="numero3">{this.props.NegativeOpinions}</Typography>
              </Badge>
              <Badge color="secondary">
                <Typography className="titulo">Negativas</Typography>
              </Badge>
            </div>
          </div>
          <Divider />
        </div>
        <OpinionsByCategoryPie />
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    QuantidadeOpinions: state.QuantidadeOpinions,
    NegativeOpinions: state.NegativeOpinions,
    PositiveOpinions: state.PositiveOpinions

  }
}

export default connect(mapStateToProps)(CountOpinions)
