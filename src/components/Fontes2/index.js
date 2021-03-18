import React from 'react'
import './index.css'

import Typography from '@material-ui/core/Typography';



import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';



import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYelp } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faTripadvisor } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'



import {connect} from 'react-redux'






class Fonte2 extends React.Component{



  constructor(props){
    super(props)
    this.state = {
      PercentForEachPlataforma: [this.props.CountPercentForEachPlataforma]
    }
  }





  componentDidUpdate(){
    //  if(JSON.stringify(this.props.PercentForEachPlataforma) !== JSON.stringify(this.state.PercentForEachPlataforma))
    //]]     this.setState({PercentForEachPlataforma: this.props.PercentForEachPlataforma}) 
  }

  render(){
    return (
    <div className="Fontes2Card" id="PercentForEachPlataforma">
      <div className="legenda">
          <Badge color="secondary">
              <Typography className="tituloCard">Porcentagens</Typography>
          </Badge>
      </div>
      <Divider />





      <div className="ItensFont2">

        <div className="ItemFont2">
          
          <div className="IconNameFont2">
            <div className="iconFont2"><TwitterIcon className="icon"></TwitterIcon></div>
            <div className="NameItemFont2">Twitter</div>
          </div>  
            <div className="ProfitFont2">{this.props.PercentForEachPlataforma.twitter}%</div>
        </div>

        <Divider />

        <div className="ItemFont2">
          
          <div className="IconNameFont2">
            <div className="iconFont2"><InstagramIcon className="icon"></InstagramIcon></div>
            <div className="NameItemFont2">Instagram</div>
          </div>
          <div className="ProfitFont2">{this.props.PercentForEachPlataforma.instagram}%</div>
        </div>

        <Divider />

        <div className="ItemFont2">
          
          <div className="IconNameFont2">
            <div className="iconFont2"><FacebookIcon className="icon"></FacebookIcon></div>
            <div className="NameItemFont2">Facebook</div>
          </div>    
        <div className="ProfitFont2">{this.props.PercentForEachPlataforma.facebook}%</div>
        </div>
        <Divider />

        <div className="ItemFont2"> 
          <div className="IconNameFont2">
            <div className="iconFont2"><FontAwesomeIcon className="icon2" icon={faYelp} size="2x"/></div>
            <div className="NameItemFont2">Yelp</div>
          </div>    
        <div className="ProfitFont2">{this.props.PercentForEachPlataforma.yelp}%</div>
        </div>
        <Divider />

        <div className="ItemFont2">
          
          <div className="IconNameFont2">
            <div className="iconFont2"><FontAwesomeIcon className="icon2" icon={faGoogle} size="2x"/></div>
            <div className="NameItemFont2">Google Reviews</div>
          </div>    
        <div className="ProfitFont2">{this.props.PercentForEachPlataforma.googlereviews}%</div>
        </div>
        


        <div className="ItemFont2">
          
          <div className="IconNameFont2">
            <div className="iconFont2"><FontAwesomeIcon className="icon2" icon={faTripadvisor} size="2x"/></div>
            <div className="NameItemFont2">Tripadvisor</div>
          </div>    
        <div className="ProfitFont2">{this.props.PercentForEachPlataforma.tripadvisor}%</div>
        </div>
        <Divider />

        <div className="ItemFont2">
          
          <div className="IconNameFont2">
            <div className="iconFont2"><FontAwesomeIcon className="icon2" icon={faGlobe} size="2x"/></div>
            <div className="NameItemFont2">Web</div>
          </div>    
        <div className="ProfitFont2">{this.props.PercentForEachPlataforma.web}%</div>
        </div>
     


      </div>



    </div>
    )
  }


}

function mapStateToProps(state){
  return{
    PercentForEachPlataforma: state.PercentForEachPlataforma,
  }
}


export default connect(mapStateToProps)(Fonte2)