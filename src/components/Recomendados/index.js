import React from "react"
import "./index.css"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Box from "@material-ui/core/Box"
import ComponentPrincipaisPerfis from "./PrincipaisPerfis"
import ComponentPlataformasComentadas from "./FontesComentadas"
import { countPerfil } from "../../helper/analise"


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

class Recomendados extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      PrincipaisPerfis: [],
      PrincipaisPlataformas: []
    }
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue })
  }

  render() {

    return (
      <div className="Recomendados">
        <div>
          <AppBar position="static">
            <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
              <Tab label="Principais Perfis" {...a11yProps(0)} />
              <Tab label="Sites mais Comentados" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={this.state.value} index={0}>
            <div className="tab-content">
              {countPerfil(this.props.list, "IDUsuarioFK", "nome", true).map((item, i) =>
                <ComponentPrincipaisPerfis key={i} item={item} />)
              }
            </div>
          </TabPanel>

          <TabPanel value={this.state.value} index={1}>
            <div className="tab-content">
              {countPerfil(this.props.list, "IDTipoFonteFK", "nomeFonte", false).map((item, i) =>
                <ComponentPlataformasComentadas key={i} item={item} />)
              }
            </div>
          </TabPanel>
        </div>

      </div>
    )
  }
}

export default Recomendados
