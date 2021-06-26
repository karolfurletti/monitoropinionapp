import React, { useState } from "react"
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

const Filter = (props) => {

  const { filterDate } = props
  const [intervalInit, setIntervalInit] = useState(moment().subtract("years", 1))
  const [intervalFim, setIntervalFim] = useState(moment())
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    filterDate(intervalInit, intervalFim)
  }

  const handleChangeInicio = date => {
    setIntervalInit(date)
  }

  const handleChangeFim = date => {
    setIntervalFim(date)
  }

  return (
    <div className="filter">
      <div className="FilterTitle">
        <Typography>{props.titulo}</Typography>
      </div>

      <div>
        <Button
          onClick={handleClickOpen}
          variant="contained"
          color="default"
          startIcon={<DateRangeIcon />}
        >
          FILTRO
        </Button>
        <Dialog
          className="DialogFilter"
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Defina o intervado de tempo para o filtro."}</DialogTitle>
          <DialogContent>
            <div>
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptLocale}>
                <KeyboardDatePicker
                  format="dd/MM/yyyy"
                  value={intervalInit}
                  autoOk="false"
                  onChange={handleChangeInicio} />
              </MuiPickersUtilsProvider>

              <SyncAltIcon className="IconEnterCalendar" />

              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptLocale}>
                <KeyboardDatePicker format="dd/MM/yyyy"
                                    value={intervalFim}
                                    onChange={handleChangeFim}
                                    autoOk="false"
                />
              </MuiPickersUtilsProvider>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>

      </div>
    </div>
  )
}

export default Filter
