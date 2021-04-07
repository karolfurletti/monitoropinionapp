import React from "react"
import "./index.css"
import PropTypes from "prop-types"
// import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Badge from "@material-ui/core/Badge"
import Divider from "@material-ui/core/Divider"
import ComponentPlataformasComentadas from "./FontesComentadas"
import { connect } from "react-redux"

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

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`
//   }
// }
//
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper
//   }
// }))

class DetalhesFontes extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      PrincipaisPerfis: [],
      PrincipaisPlataformas: []
    }
  }

  componentDidUpdate() {

    //  if(JSON.stringify(this.state.PrincipaisPerfis) != JSON.stringify(Filtros.author_filter_count(this.props.opinions_by_cronology)))
    // this.setState({PrincipaisPerfis: Filtros.author_filter_count(this.props.opinions_by_cronology)})

    //if(JSON.stringify(this.state.PrincipaisPlataformas) != JSON.stringify(Filtros.plataforma_filter_count(this.props.opinions_by_cronology)))
//this.setState({PrincipaisPlataformas: Filtros.plataforma_filter_count(this.props.opinions_by_cronology)})

  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue })
  }

  render() {

    return (
      <div className="DetalhesFontes">
        <div className="legenda">
          <Badge color="secondary">
            <Typography className="tituloCard">Comentários</Typography>
          </Badge>
        </div>
        <Divider />
        <div>
          <List component="nav" aria-label="main mailbox folders">
            {this.props.PrincipaisPlataformas.map((item, index) => {
              return (
                <ListItem key={index} button>
                  <ComponentPlataformasComentadas item={item}/>
                </ListItem>
              )
            })}
          </List>
        </div>


      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    PrincipaisPerfis: state.PrincipaisPerfis,
    PrincipaisPlataformas: state.PrincipaisPlataformas
  }
}

export default connect(mapStateToProps)(DetalhesFontes)
