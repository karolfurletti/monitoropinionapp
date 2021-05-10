/* eslint-disable no-use-before-define */
import React from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import "./index.css"

const FreeSolo = (props) => {

  const onChange = (value) => {
    props.history.push("/dashboard/compare/" + value)
  }

  return (
    <div className="card-autocomplete">
      <div className="autocomplete">
        <Autocomplete
          options={props.list}
          getOptionLabel={option => option.nomeRestaurante}
          onChange={(event, newValue) => {
            onChange(newValue.IDRestaurante)
          }}
          renderInput={params => (
            <TextField
              {...params}
              variant="standard"
              label="Concorrentes"
              placeholder="Procure por um Concorrente"
              margin="normal"
              fullWidth
            />
          )}
        />
      </div>
    </div>
  )

}

export default FreeSolo
