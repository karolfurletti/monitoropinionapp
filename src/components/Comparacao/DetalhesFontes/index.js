import React from "react"
import "./index.css"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Badge from "@material-ui/core/Badge"
import Divider from "@material-ui/core/Divider"
import ComponentPlataformasComentadas from "./FontesComentadas"
import { countComments } from "../../../helper/analise"
import { TYPE_PLATFORM } from "../../../utils/const"

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

const DetalhesFontes = (props) => {

  const { list } = props

  return (
    <div className="DetalhesFontes">
      <div className="legenda">
        <Badge color="secondary">
          <Typography className="tituloCard">Positivos e Negativos</Typography>
        </Badge>
      </div>
      <Divider />
      <div>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ComponentPlataformasComentadas
              negative={countComments(list, TYPE_PLATFORM.FACEBOOK, "negative")}
              positive={countComments(list, TYPE_PLATFORM.FACEBOOK, "positive")}
              title={'Facebook'} />
          </ListItem>

          <ListItem button>
            <ComponentPlataformasComentadas
              negative={countComments(list, TYPE_PLATFORM.WEB, "negative")}
              positive={countComments(list, TYPE_PLATFORM.WEB, "positive")}
              title={'Web'} />
          </ListItem>

          <ListItem button>
            <ComponentPlataformasComentadas
              negative={countComments(list, TYPE_PLATFORM.GOOGLE, "negative")}
              positive={countComments(list, TYPE_PLATFORM.GOOGLE, "positive")}
              title={'Google Reviews'} />
          </ListItem>

          <ListItem button>
            <ComponentPlataformasComentadas
              negative={countComments(list, TYPE_PLATFORM.TWITTER, "negative")}
              positive={countComments(list, TYPE_PLATFORM.TWITTER, "positive")}
              title={'Twitter'} />
          </ListItem>

          <ListItem button>
            <ComponentPlataformasComentadas
              negative={countComments(list, TYPE_PLATFORM.YELP, "negative")}
              positive={countComments(list, TYPE_PLATFORM.YELP, "positive")}
              title={'Yelp'} />
          </ListItem>

          <ListItem button>
            <ComponentPlataformasComentadas
              negative={countComments(list, TYPE_PLATFORM.INSTRAGRAM, "negative")}
              positive={countComments(list, TYPE_PLATFORM.INSTRAGRAM, "positive")}
              title={'Intragram'} />
          </ListItem>

          <ListItem button>
            <ComponentPlataformasComentadas
              negative={countComments(list, TYPE_PLATFORM.TRIPADVISOR, "negative")}
              positive={countComments(list, TYPE_PLATFORM.TRIPADVISOR, "positive")}
              title={'Tripadvisor'} />
          </ListItem>

        </List>
      </div>
    </div>
  )

}

export default DetalhesFontes
