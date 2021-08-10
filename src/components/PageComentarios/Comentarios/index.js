import React, { useState } from "react"
import "./index.css"
import Typography from "@material-ui/core/Typography"
import Radio from "@material-ui/core/Radio"
import AllInclusiveIcon from "@material-ui/icons/AllInclusive"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYelp } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
// import { faTripadvisor } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import Abas from "./tabs"
import { countComments } from "../../../helper/analise"
import { TYPE_PLATFORM } from "../../../utils/const"

const Comentarios = (props) => {

  const {list} = props
  const [selectedValue, setSelectedValue] = useState(TYPE_PLATFORM.GERAL)

  const handleChange = (event) => {
    setSelectedValue(parseInt(event.target.value))
  }

  return (

    <div className="card-comentarios">
      <div className="item-classificador">
        <div className="item">
          <AllInclusiveIcon />
          <Typography>Todos</Typography>
          <Typography>{countComments(list, TYPE_PLATFORM.GERAL)}</Typography>

          <Radio
            checked={selectedValue === TYPE_PLATFORM.GERAL}
            onChange={handleChange}
            value={TYPE_PLATFORM.GERAL}
            name="radio-button-demo"
            inputProps={{ "aria-label": "A" }}
          />
        </div>

        <div className="item">
          <TwitterIcon />
          <Typography>Twitter</Typography>
          <Typography>{countComments(list, TYPE_PLATFORM.TWITTER)}</Typography>

          <Radio
            checked={selectedValue === TYPE_PLATFORM.TWITTER}
            onChange={handleChange}
            value={TYPE_PLATFORM.TWITTER}
            name="radio-button-demo"
            inputProps={{ "aria-label": "A" }}
          />
        </div>

        <div className="item">
          <InstagramIcon />
          <Typography>Instagram</Typography>
          <Typography>{countComments(list, TYPE_PLATFORM.INSTRAGRAM)}</Typography>

          <Radio
            checked={selectedValue === TYPE_PLATFORM.INSTRAGRAM}
            onChange={handleChange}
            value={TYPE_PLATFORM.INSTRAGRAM}
            name="radio-button-demo"
            inputProps={{ "aria-label": "A" }}
          />
        </div>

        <div className="item">
          <FacebookIcon />
          <Typography>Facebook</Typography>
          <Typography>{countComments(list, TYPE_PLATFORM.FACEBOOK)}</Typography>

          <Radio
            checked={selectedValue === TYPE_PLATFORM.FACEBOOK}
            onChange={handleChange}
            value={TYPE_PLATFORM.FACEBOOK}
            name="radio-button-demo"
            inputProps={{ "aria-label": "A" }}
          />
        </div>

        <div className="item">
          <FontAwesomeIcon icon={faYelp} size="2x" />
          <Typography>Tripadvisor</Typography>
          <Typography>{countComments(list, TYPE_PLATFORM.TRIPADVISOR)}</Typography>

          <Radio
            checked={selectedValue === TYPE_PLATFORM.TRIPADVISOR}
            onChange={handleChange}
            value={TYPE_PLATFORM.TRIPADVISOR}
            name="radio-button-demo"
            inputProps={{ "aria-label": "A" }}
          />
        </div>

        <div className="item">
          <FontAwesomeIcon icon={faYelp} size="2x" />
          <Typography>Yelp</Typography>
          <Typography>{countComments(list, TYPE_PLATFORM.YELP)}</Typography>

          <Radio
            checked={selectedValue === TYPE_PLATFORM.YELP}
            onChange={handleChange}
            value={TYPE_PLATFORM.YELP}
            name="radio-button-demo"
            inputProps={{ "aria-label": "A" }}
          />
        </div>

        <div className="item">
          <FontAwesomeIcon icon={faGoogle} size="2x" />
          <Typography>Google Reviews</Typography>
          <Typography>{countComments(list, TYPE_PLATFORM.GOOGLE)}</Typography>

          <Radio
            checked={selectedValue === TYPE_PLATFORM.GOOGLE}
            onChange={handleChange}
            value={TYPE_PLATFORM.GOOGLE}
            name="radio-button-demo"
            inputProps={{ "aria-label": "g" }}
          />
        </div>

        <div className="item">
          <FontAwesomeIcon icon={faGlobe} size="2x" />
          <Typography>Web</Typography>
          <Typography>{countComments(list, TYPE_PLATFORM.WEB)}</Typography>

          <Radio
            checked={selectedValue === TYPE_PLATFORM.WEB}
            onChange={handleChange}
            value={TYPE_PLATFORM.WEB}
            name="radio-button-demo"
            inputProps={{ "aria-label": "A" }}
          />
        </div>


      </div>


      {/* <div className="item-classificador-2">
                <div>
                    <FormControl className="filtroordemcomentarios">
                     <InputLabel htmlFor="outlined-age-native-simple">Filtro</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            value={this.state.ordenar}
                            autoWidth={true}
                            onChange={this.handleChangeSelect}
                            inputProps={{
                                name: 'Recentes Primeiro',
                                id: 'outlined-age-native-simple',
                              }}
                            >
                                <MenuItem value="desc">Recentes</MenuItem>
                                <MenuItem value="asc">Antigos</MenuItem>
                            </Select>
                            <FormHelperText>Ordem Comentários</FormHelperText>
                    </FormControl>
                </div>

             <div className="item">
                    <Button variant="outlined" size="small" color="primary">
                        Dias
                    </Button>
                    <Button variant="outlined" size="small" color="primary">
                        Semanas
                    </Button>
                    <Button variant="outlined" size="small" color="primary">
                        Meses
                    </Button>
                            </div>
            </div>  */}

      <div className="barra_abas">
        <Abas selectedValue={selectedValue} list={list} />
      </div>

    </div>
  )
}

export default Comentarios
