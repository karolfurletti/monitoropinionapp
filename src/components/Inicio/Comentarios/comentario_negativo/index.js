import React from "react"
import "./index.css"
// import FacebookIcon from "@material-ui/icons/Facebook"
// import InstagramIcon from "@material-ui/icons/Instagram"
// import TwitterIcon from "@material-ui/icons/Twitter"
import LinkIcon from "@material-ui/icons/Link"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import CalendarTodayIcon from "@material-ui/icons/CalendarToday"
import Badge from "@material-ui/core/Badge"
import moment from "moment"
import Link from "@material-ui/core/Link"
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

export default function ComentarioNegativo(props) {

  // const [state, setState] = React.useState({
  //   checkedA: false,
  //   checkedB: false,
  //   checkedF: false,
  //   checkedG: false
  // })

  // const handleChange = (event) => {
  //   setState({
  //     ...state,
  //     [event.target.name]: event.target.checked
  //   })
  // }
  // let iconMain = <FacebookIcon></FacebookIcon>
  let rating = ""

  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // if (props.item.plataforma === "facebook") {
  //   iconMain = <FacebookIcon className="Main-Icon"></FacebookIcon>
  // } else if (props.item.plataforma === "twitter") {
  //   iconMain = <TwitterIcon className="Main-Icon"></TwitterIcon>
  // } else if (props.item.plataforma === "instagram") {
  //   iconMain = <InstagramIcon className="Main-Icon"></InstagramIcon>
  // } else {
  //   iconMain = <FacebookIcon className="Main-Icon"></FacebookIcon>
  // }

  if (props.item.rating >= 0) {
    rating = <Rating name="read-only" value={props.item.rating} readOnly />
  } else {
    rating = <div><Typography> -------- </Typography></div>
  }

  return (

    <div className="main-card-comentario">


      <div className="row-itens">

        <div className={classes.root}>
          <Avatar src={"/Assets/UserProfile/" + props.item.HashImg + ".jpg"} className="avatar" />
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

            <div className="titulo-comentario">
              <Typography>{props.item.titulo}</Typography>
            </div>

          </div>

          <div className="icon-url">
            <div><LinkIcon className="Second-Icon"/></div>
            <div className="fontnegativo">{props.item.plataforma}</div>
          </div>
        </div>

      </div>


      <div className="Description">

        <Typography>{props.item.descricao}</Typography>
      </div>

      <div className="seeMore">
        <div className="LinkSeeMore">
          <div>
            <Link href="#/" onClick={handleClickOpen}>
              Ver tudo
            </Link>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">Comentário</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {props.item.descricao}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Fechar
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>

      {/*         <div className="options">

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


                <div>
                <IconButton aria-label="delete" disabled color="primary">
                    <DeleteIcon />
                </IconButton>
                </div>



            </div> */}
      <div>
        <Divider />
      </div>

    </div>
  )
}
