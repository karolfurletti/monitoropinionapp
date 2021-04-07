import React from 'react'
import './index.css'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkIcon from '@material-ui/icons/Link'
import Typography from '@material-ui/core/Typography'
import moment from 'moment'

export default function ComentarioNegativo(props) {
  let iconMain = <FacebookIcon />
  if (props.item.plataforma === 'facebook') {
    iconMain = <FacebookIcon className="Main-Icon" />
  } else if (props.item.plataforma === 'twitter') {
    iconMain = <TwitterIcon className="Main-Icon" />
  } else if (props.item.plataforma === 'instagram') {
    iconMain = <InstagramIcon className="Main-Icon" />
  } else {
    iconMain = <FacebookIcon className="Main-Icon" />
  }

  return (
    <div className="main-card-comentario">
      <div className="row-itenscomponent">
        <div>{iconMain}</div>

        <div className="ComentarioContentMain">
          <div className="Comentario-Content">
            <div className="Titulo-Comentario-Data">
              <div>
                <Typography>{props.item.titulo}</Typography>
              </div>

              <div className="data-comentario">
                <Typography>
                  {moment(props.item.data).format('DD/MM/YYYY')}
                </Typography>
              </div>
            </div>
          </div>

          <div className="icon-urlcomponent">
            <div>
              <LinkIcon className="Second-Icon" />
            </div>
            <div className="fontnegativo">{props.item.plataforma}</div>
          </div>
        </div>
      </div>

      <div className="Description">
        <Typography>{props.item.descricao}</Typography>
      </div>
    </div>
  )
}
