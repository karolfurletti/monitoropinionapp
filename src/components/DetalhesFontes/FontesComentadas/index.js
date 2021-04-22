import React from "react"
import "./index.css"
import Typography from "@material-ui/core/Typography"
import ChatBubbleIcon from "@material-ui/icons/ChatBubble"
import Badge from "@material-ui/core/Badge"

function FontesComentadas(props) {

  const {
    negative,
    positive,
    title
  } = props

  return (
    <div className="PrincipaisPerfis">
      <div className="name">
        <Typography className="plataforma" style={{ textTransform: "capitalize" }}>{title}</Typography>
      </div>

      <div className="coluna_dados">
        <Badge color="secondary">
          <ChatBubbleIcon className="NegativeIcon" />
        </Badge>
        <Badge color="secondary">

          <div>
            <Typography className="teor">Negativos</Typography>
          </div>

          <div>
            <Typography className="number">{negative}</Typography>
          </div>
        </Badge>
      </div>

      <div className="coluna_dados">
        <Badge color="secondary">
          <div>
            <ChatBubbleIcon className="PositiveIcon" />
          </div>
        </Badge>
        <Badge color="secondary">

          <div>
            <Typography className="teor"> Positivos</Typography>
          </div>

          <div>
            <Typography className="number">{positive}</Typography>
          </div>

        </Badge>
      </div>
    </div>

  )
}

export default FontesComentadas





