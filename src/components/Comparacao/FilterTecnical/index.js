import React from "react"
import "./index.css"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import DateRangeIcon from "@material-ui/icons/DateRange"
import moment from "moment"
import ptLocale from "date-fns/locale/pt-BR"
import SyncAltIcon from "@material-ui/icons/SyncAlt"
import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers"
import { connect } from "react-redux"
import { filterMasterComparation } from "../../../store/actions/opinions"
import { AtualizarLoading } from "../../../store/actions/opinions"

class Filter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      interval_time: "",
      selectedValue: "a",
      button_color: "secondary",
      button_color2: "primary",
      button_color3: "primary",
      open: false,
      interval_init: moment().subtract("weeks", 1),
      interval_fim: moment(),
      opinions_by_cronology: this.props.opinions_by_cronology

    }
  }

  componentDidMount() {

    this.props.filterMasterComparation(this.props.concorrente_id, this.state.interval_init, this.state.interval_fim, "geral")
  }

  componentDidUpdate(prevProps) {
    if (prevProps.opinions_by_cronology !== this.props.opinions_by_cronology) {
      //this.props.AtualizarLoading(false)
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  handleChangeInicio = date => {
    this.setState({ interval_init: date })
  }

  handleChangeFim = date => {
    this.setState({ interval_fim: date })
  }

  handleSend = () => {

    this.sleep(500).then(() => {

      this.props.filterMasterComparation("1234", this.props.concorrente_id, this.state.interval_init, this.state.interval_fim, "geral")
      this.setState({
        opinions_by_cronology: this.props.opinions_by_cronology
      })
    })

    this.handleClose()

  }

  handleChange = (event) => {
    switch (event.target.value) {
      case "a":
        this.setState({ button_color: "secondary" })
        this.setState({ button_color2: "primary" })
        this.setState({ button_color3: "primary" })

        this.props.FiltroMaster(this.props.estado_select_filtro_principal, "dias")
        break
      case "b":
        this.setState({ button_color: "primary" })
        this.setState({ button_color2: "secondary" })
        this.setState({ button_color3: "primary" })

        this.props.FiltroMaster(this.props.estado_select_filtro_principal, "semanas")

        break
      case "c":
        this.setState({ button_color: "primary" })
        this.setState({ button_color2: "primary" })
        this.setState({ button_color3: "secondary" })
        this.props.FiltroMaster(this.props.estado_select_filtro_principal, "meses")
        break
      default:
        this.setState({selectedValue: event.target.value})
    }
   }

  render() {

    return (
      <div className="filter">
        <div className="FilterTitle">
          <Typography>{this.props.titulo}</Typography>
        </div>

        <div>
          <Button
            onClick={this.handleClickOpen}
            variant="contained"
            color="default"
            startIcon={<DateRangeIcon />}
          >
            FILTRO
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Defina o intervado de tempo para o filtro."}</DialogTitle>
            <DialogContent>
              <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptLocale}>
                  <KeyboardDatePicker
                    format="dd/MM/yyyy"
                    value={this.state.interval_init}
                    autoOk="false"
                    onChange={this.handleChangeInicio} />
                </MuiPickersUtilsProvider>

                <SyncAltIcon className="IconEnterCalendar"/>

                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptLocale}>
                  <KeyboardDatePicker format="dd/MM/yyyy"
                                      value={this.state.interval_fim}
                                      onChange={this.handleChangeFim}
                                      autoOk="false"
                  />
                </MuiPickersUtilsProvider>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleSend} color="primary" autoFocus>
                Ok
              </Button>
            </DialogActions>
          </Dialog>

        </div>
      </div>
    )
  }
}

function mapActionCreatorsToProps(dispatch) {
  return {

    AtualizarLoading(state) {
      //action creator
      const action = AtualizarLoading(state)
      dispatch(action)
    },

    filterMasterComparation(estabelecimento_id, concorrente_id, interval_init, interval_fim, category) {
      //action creator
      const action = filterMasterComparation(estabelecimento_id, concorrente_id, interval_init, interval_fim, category)
      dispatch(action)
    }
  }
}

function mapStateToProps(state) {
  return {
    opinions_by_cronology: state.opinions_by_cronology,
    aba_value: state.aba_value,
    plataforma_value: state.plataforma_value,
    estado_button_filter: state.estado_button_filter,
    estado_select_filtro_principal: state.estado_select_filtro_principal,
    status_loading: state.status_loading,
    concorrente_id: state.concorrente_id
  }
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Filter)
