import React, { useState } from "react"
import Radio from "@material-ui/core/Radio"
import Typography from "@material-ui/core/Typography"
import "./index.css"
import { TYPE_CARACTERISTICA } from "../../utils/const"

const FiltroCaracteristica = (props) => {

  const [selectedValue, setSelectedValue] = useState(TYPE_CARACTERISTICA.GERAL)
  const handleChange = (event) => {
    setSelectedValue(event.target.value)
    props.getFeature(event.target.value)
  }

  return (
    <div className="card_filtro_caracterstica">
      {/* <div className="legenda">
        <Badge color="secondary">
            <Typography className="tituloCard-caracteristica">Filtre por categoria</Typography>
        </Badge>
      </div> */}
      {/* <Divider /> */}
      <div className="filtro_caracteristica">
        <div className="item">
          <div className="item-classificador">
            <div className="item">

              <Typography style={{fontSize: 20}}>Geral</Typography>

              <Radio
                checked={selectedValue === TYPE_CARACTERISTICA.GERAL}
                onChange={handleChange}
                value={TYPE_CARACTERISTICA.GERAL}
                name="radio-button-demo"
                inputProps={{ "aria-label": "A" }}
              />
            </div>

            <div className="item">
              <Typography >Comida</Typography>
              <Radio
                checked={selectedValue === TYPE_CARACTERISTICA.COMIDA}
                onChange={handleChange}
                value={TYPE_CARACTERISTICA.COMIDA}
                name="radio-button-demo"
                inputProps={{ "aria-label": "A" }}
              />
            </div>

            <div className="item">

              <Typography>Bebida</Typography>

              <Radio
                checked={selectedValue === TYPE_CARACTERISTICA.BEBIDA}
                onChange={handleChange}
                value={TYPE_CARACTERISTICA.BEBIDA}
                name="radio-button-demo"
                inputProps={{ "aria-label": "A" }}
              />
            </div>

            <div className="item">

              <Typography>Serviço</Typography>

              <Radio
                checked={selectedValue === TYPE_CARACTERISTICA.SERVICO}
                onChange={handleChange}
                value={TYPE_CARACTERISTICA.SERVICO}
                name="radio-button-demo"
                inputProps={{ "aria-label": "A" }}
              />
            </div>

            <div className="item">
              <Typography>Preço</Typography>
              <Radio
                checked={selectedValue === TYPE_CARACTERISTICA.PRECO}
                onChange={handleChange}
                value={TYPE_CARACTERISTICA.PRECO}
                name="radio-button-demo"
                inputProps={{ "aria-label": "A" }}
              />
            </div>

            <div className="item">
              <Typography>Ambiente</Typography>
              <Radio
                checked={selectedValue === TYPE_CARACTERISTICA.AMBIENTE}
                onChange={handleChange}
                value={TYPE_CARACTERISTICA.AMBIENTE}
                name="radio-button-demo"
                inputProps={{ "aria-label": "A" }}
              />
            </div>

            <div className="item">
              <Typography>Localização</Typography>
              <Radio
                checked={selectedValue === TYPE_CARACTERISTICA.LOCALIZACAO}
                onChange={handleChange}
                value={TYPE_CARACTERISTICA.LOCALIZACAO}
                name="radio-button-demo"
                inputProps={{ "aria-label": "g" }}
              />
            </div>

            <div className="item">
              <Typography>Outros</Typography>
              <Radio
                checked={selectedValue === TYPE_CARACTERISTICA.OUTROS}
                onChange={handleChange}
                value={TYPE_CARACTERISTICA.OUTROS}
                name="radio-button-demo"
                inputProps={{ "aria-label": "h" }}
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  )

}
export default FiltroCaracteristica
