import React from "react"
import "./index.css"
// import FacebookIcon from "@material-ui/icons/Facebook"
// import InstagramIcon from "@material-ui/icons/Instagram"
// import TwitterIcon from "@material-ui/icons/Twitter"
import LinkIcon from "@material-ui/icons/Link"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import CalendarTodayIcon from "@material-ui/icons/CalendarToday"
import Badge from "@material-ui/core/Badge"
import moment from "moment"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Rating from "@material-ui/lab/Rating"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}))

export default function ComentarioPositivo(props) {

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedF: false,
    checkedG: false
  })

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    })
  }

  let rating = ""
  const classes = useStyles()


  if (props.item.rating >= 0) {
    rating = <Rating name="read-only" value={props.item.rating} readOnly />
  } else {
    rating = <div><Typography> -------- </Typography></div>
  }

  return (

    <div className="main-card-comentario">

      <div className="row-itens">

        <div className={classes.root}>
          <Avatar src={props.item.foto} className="avatar" />
        </div>
        {/* <div>
                    {iconMain}
                </div> */}


        <div className="contentprincipal">

          <div className="Comentario-Content">
            <div className="Titulo-Comentario-Data">
              <div>
                <Typography>{props.item.author}</Typography>
              </div>


              <div className="data-comentario">
                <div>
                  <Badge color="secondary">
                    <CalendarTodayIcon />
                  </Badge>
                  <Badge color="secondary">
                    <Typography>{moment(props.item.data).format("DD/MM/YYYY")}</Typography>
                  </Badge>
                </div>

              </div>
            </div>
          </div>


          <div>

            {rating}

          </div>

          <div className="Comentario-Content">

            <div>
              <Typography>{props.item.titulo}</Typography>
            </div>

          </div>

          <div className="icon-url">
            <div><LinkIcon className="Second-Icon" /></div>
            <div className="fontpositivo">{props.item.plataforma}</div>
          </div>
        </div>

      </div>


      <div className="Description">
        <Typography>{props.item.descricao}</Typography>
      </div>

      <div className="options">
        <div className="checkboxaddrelatorio">
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Adicionar ao Relatório"
            />
          </FormGroup>
        </div>

        {/*
                <div>
                <IconButton aria-label="delete" disabled color="primary">
                    <DeleteIcon />
                </IconButton>
                </div> */}


      </div>


    </div>
  )
}
