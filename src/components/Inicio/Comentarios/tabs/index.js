import React, { useState } from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Box from "@material-ui/core/Box"
import { Select, InputLabel } from "@material-ui/core"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import CommentsComponet from "../comentario_negativo"
import "./index.css"
import { showComments } from "../../../../helper/analise"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function TabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  }
}

const SimpleTabs = (props) => {
  const classes = useStyles();

  const {
    list,
    selectedValue
  } = props
  const [value, setValue] = useState(0)
  const [ordenar, setOrdenar] = useState()

  const handleChangeSelect = (event) => {
    setOrdenar(event.target.value)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div style={{backgroundColor:"white"}}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
              className="tab_att">
          <Tab label="Negativos" {...a11yProps(0)} className="tab-1" />
          <Tab label="Positivos" {...a11yProps(1)} className="tab-2" />

          <div className="filtro_data">
            {/*<FormControl className="filtroordemcomentarios">*/}
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                value={ordenar}
                onChange={handleChangeSelect}
              >
                <MenuItem value="ASC">Recentes</MenuItem>
                <MenuItem value="DESC">Antigos</MenuItem>

              </Select>
              {/* <FormHelperText>Ordem Comentários</FormHelperText> */}
            </FormControl>
          </div>
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <div className="tab-component">
          {showComments(list, selectedValue, "negativo", ordenar).map((item, i) =>
            <CommentsComponet key={i} item={item} />)
          }
        </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div className="tab-component">
          {showComments(list, selectedValue, "positivo", ordenar).map((item, i) =>
            <CommentsComponet key={i} item={item} />)
          }
        </div>
      </TabPanel>

    </div>
  )
}

export default SimpleTabs
