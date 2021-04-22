import React from "react"
import "./index.css"
import Drawer from "../../../components/Drawer"
import Grid from "@material-ui/core/Grid"
import SearchConcorrentes from "../../../components/Comparacao/SearchConcorrentes"

const Analise = (props) => {
  return (
    <Drawer history={props.history} NavTitle="Comparacao" option={6}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchConcorrentes history={props.history} />
        </Grid>
      </Grid>
    </Drawer>
  )
}
export default Analise
