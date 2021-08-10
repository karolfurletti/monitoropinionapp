import React from "react"
import "./index.css"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Badge from "@material-ui/core/Badge"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYelp } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
// import { faTripadvisor } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { countPercentage } from "../../helper/analise"
import { TYPE_PLATFORM } from "../../utils/const"

const Fonte2 = (props) => {

  const { list } = props

  return (
    <div className="Fontes2Card" id="PercentForEachPlataforma">
      <div className="legenda">
        <Badge color="secondary">
          <Typography className="tituloCard">Porcentagens de Comentários</Typography>
        </Badge>
      </div>
      <Divider />


      <div className="ItensFont2">

        <div className="ItemFont2">

          <div className="IconNameFont2">
            <div className="iconFont2"><TwitterIcon className="icon" /></div>
            <div className="NameItemFont2">Twitter</div>
          </div>
          <div className="ProfitFont2">{countPercentage(list, TYPE_PLATFORM.TWITTER)}%</div>
        </div>

        <Divider />

        <div className="ItemFont2">

          <div className="IconNameFont2">
            <div className="iconFont2"><InstagramIcon className="icon" /></div>
            <div className="NameItemFont2">Instagram</div>
          </div>
          <div className="ProfitFont2">{countPercentage(list, TYPE_PLATFORM.INSTRAGRAM)}%</div>
        </div>

        <Divider />

        <div className="ItemFont2">

          <div className="IconNameFont2">
            <div className="iconFont2"><FacebookIcon className="icon" /></div>
            <div className="NameItemFont2">Facebook</div>
          </div>
          <div className="ProfitFont2">{countPercentage(list, TYPE_PLATFORM.FACEBOOK)}%</div>
        </div>
        <Divider />

        <div className="ItemFont2">
          <div className="IconNameFont2">
            <div className="iconFont2"><FontAwesomeIcon className="icon2" icon={faYelp} size="2x" /></div>
            <div className="NameItemFont2">Yelp</div>
          </div>
          <div className="ProfitFont2">{countPercentage(list, TYPE_PLATFORM.YELP)}%</div>
        </div>
        <Divider />

        <div className="ItemFont2">

          <div className="IconNameFont2">
            <div className="iconFont2"><FontAwesomeIcon className="icon2" icon={faGoogle} size="2x" /></div>
            <div className="NameItemFont2">Google Reviews</div>
          </div>
          <div className="ProfitFont2">{countPercentage(list, TYPE_PLATFORM.GOOGLE)}%</div>
        </div>
        <Divider />

        <div className="ItemFont2">

          <div className="IconNameFont2">
            <div className="iconFont2"><FontAwesomeIcon className="icon2" icon={faGlobe} size="2x" /></div>
            <div className="NameItemFont2">Tripadvisor</div>
          </div>
          <div className="ProfitFont2">{countPercentage(list, TYPE_PLATFORM.TRIPADVISOR)}%</div>
        </div>
        <Divider />

        <div className="ItemFont2">

          <div className="IconNameFont2">
            <div className="iconFont2"><FontAwesomeIcon className="icon2" icon={faGlobe} size="2x" /></div>
            <div className="NameItemFont2">Web</div>
          </div>
          <div className="ProfitFont2">{countPercentage(list, TYPE_PLATFORM.WEB)}%</div>
        </div>
      </div>
    </div>
  )
}

export default Fonte2

