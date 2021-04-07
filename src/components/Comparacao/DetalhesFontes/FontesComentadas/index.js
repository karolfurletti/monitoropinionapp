import React from "react"
import "./index.css"
import Typography from "@material-ui/core/Typography"
import ChatBubbleIcon from "@material-ui/icons/ChatBubble"
import Badge from "@material-ui/core/Badge"

function FontesComentadas(props) {

  return (
    <div className="PrincipaisPerfis">

      <div className="name">
        <Typography className="plataforma">{props.item.plataforma}</Typography>
      </div>

      <div className="coluna_dados">
        <Badge color="secondary">
          <ChatBubbleIcon className="NegativeIcon" />
        </Badge>
        <Badge color="secondary">
          <div>
            <Typography className="number">{props.item.negative_opinions}</Typography>
          </div>

          <div>
            <Typography className="teor">Negativos</Typography>
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
            <Typography className="number">{props.item.positive_opinions}</Typography>
          </div>
          <div>
            <Typography className="teor"> Positivos</Typography>
          </div>
        </Badge>
      </div>

    </div>

  )
}

export default FontesComentadas
