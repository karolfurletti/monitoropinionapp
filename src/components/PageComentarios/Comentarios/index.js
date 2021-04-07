import React from "react"
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
import { faTripadvisor } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import Abas from "./tabs"
import { FiltrarComentarios } from "../../../store/actions/opinions"
import { OrdenarComentarios } from "../../../store/actions/opinions"
import { AlterarPlataforma } from "../../../store/actions/opinions"
import { connect } from "react-redux"
import Filtros2 from "../../../Filtros"
const Filtros = new Filtros2()
class Comentarios extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedValue: "a",
      ordenar: ""
    }

  }

  componentDidMount() {
    this.props.FiltrarComentarios("padrao", 0)
  }

  handleChange = (event) => {
    switch (event.target.value) {
      case "a":
        this.props.AlterarPlataforma("padrao", this.props.aba_value)

        break
      case "b":
        this.props.AlterarPlataforma("twitter", this.props.aba_value)

        break
      case "c":
        this.props.AlterarPlataforma("instagram", this.props.aba_value)

        break
      case "d":
        this.props.AlterarPlataforma("facebook", this.props.aba_value)
        break

      case "e":
        this.props.AlterarPlataforma("tripadvisor", this.props.aba_value)
        break

      case "f":
        this.props.AlterarPlataforma("yelp", this.props.aba_value)
        break

      case "g":
        this.props.AlterarPlataforma("googlereviews", this.props.aba_value)
        break
      case "h":
        this.props.AlterarPlataforma("web", this.props.aba_value)
        break
      default:
        console.log('DJAIOSDJA')
    }
    // this.state.selectedValue = event.target.value
  }

  handleChangeSelect = (event) => {
    switch (event.target.value) {
      case "desc":
        this.props.OrdenarComentarios("desc")
        break

      case "asc":
        this.props.OrdenarComentarios("asc")
        break
      default:
        console.log('IJDIOSADJAS')
    }
    // this.state.ordenar = event.target.value
  }


  render() {
    return (

      <div className="card-comentarios">

        <div className="item-classificador">
          <div className="item">
            <AllInclusiveIcon/>
            <Typography>Todos</Typography>
            <Typography>{Filtros.CountOpinion(this.props.opinions_by_cronology)}</Typography>

            <Radio
              checked={this.state.selectedValue === "a"}
              onChange={this.handleChange}
              value="a"
              name="radio-button-demo"
              inputProps={{ "aria-label": "A" }}
            />
          </div>

          <div className="item">
            <TwitterIcon/>
            <Typography>Twitter</Typography>
            <Typography>{Filtros.CountTwitter(this.props.opinions_by_cronology)}</Typography>

            <Radio
              checked={this.state.selectedValue === "b"}
              onChange={this.handleChange}
              value="b"
              name="radio-button-demo"
              inputProps={{ "aria-label": "A" }}
            />
          </div>

          <div className="item">
            <InstagramIcon/>
            <Typography>Instagram</Typography>
            <Typography>{Filtros.CountInstagram(this.props.opinions_by_cronology)}</Typography>

            <Radio
              checked={this.state.selectedValue === "c"}
              onChange={this.handleChange}
              value="c"
              name="radio-button-demo"
              inputProps={{ "aria-label": "A" }}
            />
          </div>

          <div className="item">
            <FacebookIcon/>
            <Typography>Facebook</Typography>
            <Typography>{Filtros.CountFacebook(this.props.opinions_by_cronology)}</Typography>

            <Radio
              checked={this.state.selectedValue === "d"}
              onChange={this.handleChange}
              value="d"
              name="radio-button-demo"
              inputProps={{ "aria-label": "A" }}
            />
          </div>

          <div className="item">
            <FontAwesomeIcon icon={faTripadvisor} size="2x" />
            <Typography>Tripadvisor</Typography>
            <Typography>{Filtros.CountTripadvisor(this.props.opinions_by_cronology)}</Typography>

            <Radio
              checked={this.state.selectedValue === "e"}
              onChange={this.handleChange}
              value="e"
              name="radio-button-demo"
              inputProps={{ "aria-label": "A" }}
            />
          </div>

          <div className="item">
            <FontAwesomeIcon icon={faYelp} size="2x" />
            <Typography>Yelp</Typography>
            <Typography>{Filtros.CountYelp(this.props.opinions_by_cronology)}</Typography>

            <Radio
              checked={this.state.selectedValue === "f"}
              onChange={this.handleChange}
              value="f"
              name="radio-button-demo"
              inputProps={{ "aria-label": "A" }}
            />
          </div>

          <div className="item">
            <FontAwesomeIcon icon={faGoogle} size="2x" />
            <Typography>Google Reviews</Typography>
            <Typography>{Filtros.CountGooglereviews(this.props.opinions_by_cronology)}</Typography>

            <Radio
              checked={this.state.selectedValue === "g"}
              onChange={this.handleChange}
              value="g"
              name="radio-button-demo"
              inputProps={{ "aria-label": "g" }}
            />
          </div>

          <div className="item">
            <FontAwesomeIcon icon={faGlobe} size="2x" />
            <Typography>Web</Typography>
            <Typography>{Filtros.CountWeb(this.props.opinions_by_cronology)}</Typography>

            <Radio
              checked={this.state.selectedValue === "h"}
              onChange={this.handleChange}
              value="h"
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

          <Abas></Abas>
        </div>

      </div>
    )
  }
}

function mapActionCreatorsToProps(dispatch) {
  return {
    FiltrarComentarios(plataforma, aba_value) {
      //action creator
      const action = FiltrarComentarios(plataforma, aba_value)
      dispatch(action)
    },

    OrdenarComentarios(tipo_ordenacao) {
      //action creator
      const action = OrdenarComentarios(tipo_ordenacao)
      dispatch(action)
    },
    AlterarPlataforma(tipo_plataforma, tipo_aba) {
      //action creator
      const action = AlterarPlataforma(tipo_plataforma, tipo_aba)
      dispatch(action)
    }
  }
}

function mapStateToProps(state) {
  return {
    opinions_by_teor: state.opinions_by_teor,
    opinions_by_cronology: state.opinions_by_cronology,
    aba_value: state.aba_value,
    plataforma_value: state.plataforma_value

  }
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Comentarios)
