import React, { PureComponent } from "react"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"
import "./index.css"
import { connect } from "react-redux"
import { AtualizarLineChart } from "../../../store/actions/opinions"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts"

const margin = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}

class LChart extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      position: 0,
      data: this.props.chart_opinions,
      opacity: {
        uv: 1,
        pv: 1
      }
    }
  }

  componentDidUpdate(nextProps, nextState) {
    if (nextProps.opinions_by_cronology !== this.props.opinions_by_cronology) {

    }
  }

  handleMouseEnter = (o) => {
    const { dataKey } = o
    const { opacity } = this.state

    this.setState({
      opacity: {
        ...opacity,
        [dataKey]: 0.5
      }
    })
  }

  handleMouseLeave = (o) => {
    const { dataKey } = o
    const { opacity } = this.state

    this.setState({
      opacity: {
        ...opacity,
        [dataKey]: 1
      }
    })
  }

  handleClick(value) {
    if (value === "negative") {
      this.setState({ position: 0 })
    } else {
      this.setState({ position: 1 })
    }

  }

  render() {
    const { opacity } = this.state

    return (
      <div className="card-linechart-comparacao">
        <div className="filtros-line-chart">
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button className="buttonnegative" onClick={() => this.handleClick("negative")}>Negativos</Button>
            <Button className="buttonpositive" onClick={() => this.handleClick("positive")}>Positivos</Button>

          </ButtonGroup>
        </div>
        <ResponsiveContainer width="99%" height={250} className="responsiveGraph" strokeWidth={1}>
          <LineChart data={this.props.ChartOpinions[this.state.position]} className="LineChart" margin={margin}>
            <CartesianGrid strokeDasharray="20 20" />
            <XAxis dataKey="name" strokeWidth={1} />
            <YAxis strokeWidth={2} />
            <Tooltip />
            <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
            <Line name="Essencia do Sabor" type="monotone" dataKey="pv" strokeOpacity={opacity.uv} strokeWidth={1}
                  stroke="#2ca9d2" activeDot={{ r: 8 }} />
            <Line name="Burguer King" type="monotone" dataKey="uv" strokeOpacity={opacity.pv} strokeWidth={1}
                  stroke="#f99500" />
            {/* <Line name="Hashtags" type="monotone" dataKey="amt" strokeOpacity={opacity.amt} strokeWidth={2} stroke="#8884d8" /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    )

  }
}

function mapActionCreatorsToProps(dispatch) {
  return {
    AtualizarLineChart(opinions_by_cronology, estado_botao_filtro_principal) {
      //action creator
      const action = AtualizarLineChart(opinions_by_cronology, estado_botao_filtro_principal)
      dispatch(action)
    }
  }
}

function mapStateToProps(state) {
  return {
    opinions_by_cronology: state.opinions_by_cronology,
    opinions_by_cronology_concorrente: state.opinions_by_cronology_concorrente,
    ChartOpinions: state.ChartOpinions,
    estado_select_filtro_principal: state.estado_select_filtro_principal,
    estado_button_filter: state.estado_button_filter,
    interval_init: state.interval_init,
    interval_fim: state.interval_fim
  }
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(LChart)
