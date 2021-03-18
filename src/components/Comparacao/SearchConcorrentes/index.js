/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './index.css'


import {connect} from 'react-redux'

import {AtualizarConcorrente} from '../../../store/actions/opinions'
import {AtualizarConcorrenteData} from '../../../store/actions/opinions'







class FreeSolo extends React.Component{

  constructor(props){
    super(props)
    this.state = ({
      value: Restaurante[0],
      inputValue: ''
    })

    this.OnTagsChange = this.OnTagsChange.bind(this);


    
  }

  OnTagsChange = (event, values) => {

     this.setState({
      tags: values
     }, () => {
       //Redirect('/')
       // This will output an array of objects
       // given by Autocompelte options property.
       //console.log('debug onTagsChange')
      // console.log(this.state.tags.id)
      this.props.AtualizarConcorrente(this.state.tags.id)

      this.props.AtualizarConcorrenteData(this.state.tags)
  
    this.props.history.push('/dashboard/compare/'+ this.state.tags.id)
       //window.location.href = "http://localhost:3000/dashboard/compare/"//this.state.tags.id;
  
     
  
  
  
     });
  
  
  }
 



    render(){
     
  return (
    
    
    <div className="card-autocomplete">
      

    <div className="autocomplete">
    <Autocomplete
          options={Restaurante}
          getOptionLabel={option => option.title}
          onChange={this.OnTagsChange}
          renderInput={params => (
            <TextField
              {...params}
              variant="standard"
              label="Concorrentes"
              placeholder="Procure por um Concorrente"
              margin="normal"
              fullWidth
            />
          )}
        />
    </div>
  </div>
  );
}
}

function mapActionCreatorsToProps(dispatch){
  return{
    AtualizarConcorrente(concorrente_id){
          //action creator
          const action = AtualizarConcorrente(concorrente_id)
          dispatch(action)
      },
      AtualizarConcorrenteData(concorrente_data){
        //action creator
        const action = AtualizarConcorrenteData(concorrente_data)
        dispatch(action)
    }
  }
}



export default connect( null, mapActionCreatorsToProps)(FreeSolo)



// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const Restaurante = [
  { title: 'Rodrigues, Rua margarina 120', id: '123' },
  { title: 'Pizzaria Gabriella, Rua belo horizonte 95 tancredo', id: '1234' },
  { title: 'Kings Burguer, Rua pinhais 45 Parque 10', id: '12345' },
  { title: 'Restaurante Sabor, Rua Nova esperança 60 Nova floresta', id: '123456' },
  { title: 'Sr Caseiro', id: '1234567' },
  { title: "Esfirraria Manoel", id: '12345678' },
  
]

