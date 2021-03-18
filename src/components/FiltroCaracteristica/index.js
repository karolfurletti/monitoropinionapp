import React from 'react';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import {AtualizarLoading} from '../../store/actions/opinions'

import './index.css'






import {connect} from 'react-redux'

import {FiltroCategory} from '../../store/actions/opinions'


import Filtros from '../../Filtros'


class FiltroCaracteristica extends React.Component{


  constructor(props){
    super(props)
    this.state = {
      selectedValue: 'a',
  }
}


handleChange = (event) => {
    let concorrente_id = ''

    if(this.props.page === "comparacao")
    concorrente_id = this.props.concorrente_id
    else
    concorrente_id = false

    this.props.AtualizarLoading(true)
    switch(event.target.value){
        case 'a': 
        this.props.FiltroCategory('1234', concorrente_id, this.props.interval_init, this.props.interval_fim, 'geral')
            
        break;
        case 'b':
            
            this.props.FiltroCategory('1234', concorrente_id, this.props.interval_init, this.props.interval_fim, 'comida')
        break;
        case 'c':
            this.props.FiltroCategory('1234', concorrente_id, this.props.interval_init, this.props.interval_fim, 'bebida')
           
        break;
        case 'd':

            this.props.FiltroCategory('1234',concorrente_id, this.props.interval_init, this.props.interval_fim, 'servico')
           
        break;

        case 'e':

            this.props.FiltroCategory('1234',concorrente_id, this.props.interval_init, this.props.interval_fim, 'preco')
           
        break;

        case 'f':

            this.props.FiltroCategory('1234',concorrente_id, this.props.interval_init, this.props.interval_fim, 'ambiente')
           
        break;

        case 'g':

            this.props.FiltroCategory('1234',concorrente_id, this.props.interval_init, this.props.interval_fim, 'localizacao')
           
        break;

        case 'h':

            this.props.FiltroCategory('1234',concorrente_id, this.props.interval_init, this.props.interval_fim, 'outros')
           
        break;

        
    }
    this.setState({selectedValue: event.target.value})
  };

    render(){

  return (
    <div className='card_filtro_caracterstica'>
      {/* <div className="legenda">
        <Badge color="secondary">
            <Typography className="tituloCard-caracteristica">Filtre por categoria</Typography>
        </Badge>
      </div> */}
      {/* <Divider /> */}
      <div className="filtro_caracteristica">
        <div className='item'>
        <div className="item-classificador">
                <div className="item">
                   
                    <Typography>Geral</Typography>
                  
                    <Radio
                        checked={this.state.selectedValue === 'a'}
                        onChange={this.handleChange}
                        value="a"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>

                <div className="item">
                  
                    <Typography>Comida</Typography>
                   
                    <Radio
                        checked={this.state.selectedValue === 'b'}
                        onChange={this.handleChange}
                        value="b"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>

                <div className="item">
                 
                    <Typography>Bebida</Typography>
                    
                    <Radio
                        checked={this.state.selectedValue === 'c'}
                        onChange={this.handleChange}
                        value="c"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>

                <div className="item">
                   
                    <Typography>Serviço</Typography>
                    
                    <Radio
                        checked={this.state.selectedValue === 'd'}
                        onChange={this.handleChange}
                        value="d"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>

                <div className="item">
          
                    <Typography>Preço</Typography>
                   
                    <Radio
                        checked={this.state.selectedValue === 'e'}
                        onChange={this.handleChange}
                        value="e"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>

                <div className="item">
                    
                    <Typography>Ambiente</Typography>
                   
                    <Radio
                        checked={this.state.selectedValue === 'f'}
                        onChange={this.handleChange}
                        value="f"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                </div>

                <div className="item">
                   
                    <Typography>Localização</Typography>
                   
                    <Radio
                        checked={this.state.selectedValue === 'g'}
                        onChange={this.handleChange}
                        value="g"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'g' }}
                    />
                </div>

                <div className="item">
                   
                   <Typography>Outros</Typography>
                  
                   <Radio
                       checked={this.state.selectedValue === 'h'}
                       onChange={this.handleChange}
                       value="h"
                       name="radio-button-demo"
                       inputProps={{ 'aria-label': 'h' }}
                   />
               </div>


                

            </div>
        </div>
       
                
               

                

    </div>
    </div>
  );
}
}

function mapActionCreatorsToProps(dispatch){
    return{
        AtualizarLoading(state){
            //action creator
            const action = AtualizarLoading(state)
            dispatch(action)
        },
        FiltroCategory(estabelecimento_id, concorrente_id,filter_category, interval_init, interval_fim){
            const action = FiltroCategory(estabelecimento_id, concorrente_id,filter_category, interval_init, interval_fim)
            dispatch(action)
        }
    }
  }
  
  function mapStateToProps(state){
    return{
        opinions_by_teor: state.opinions_by_teor,
        aba_value: state.aba_value,
        plataforma_value: state.plataforma_value,
        estado_button_filter: state.estado_button_filter,
        estado_select_filtro_principal: state.estado_select_filtro_principal,
        interval_init: state.interval_init,
        interval_fim: state.interval_fim,
        concorrente_id: state.concorrente_id
    }
  }
  

export default connect(mapStateToProps, mapActionCreatorsToProps)(FiltroCaracteristica)