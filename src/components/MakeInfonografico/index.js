import React from 'react'
import './index.css'
import LineChart from '../Inicio/LineChart'
import moment from 'moment'
import {connect} from 'react-redux'
import {FiltroMaster} from '../../store/actions/opinions'
import * as htmlToImage from 'html-to-image';
import Grid from '@material-ui/core/Grid';
import Filter from '../../components/FilterTecnical'
import download from 'downloadjs'
import Button from '@material-ui/core/Button';
import Logo from '../../Assets/logocolorida.png'

//import EstabelecimentoImg from '../../../public/Assets/Estabelecimento/EssenciaDoSabor'


import Typography from '@material-ui/core/Typography';
import CountOpinions from '../CountOpinions'
import DetalhesFontes from '../../components/DetalhesFontes'
import DividedBarGraph from '../../components/DividedBarGraph'
import OpinionsByCategoryPie from '../../components/OpinionsByCategoryPie'
import LoadingComponent from '../../components/LoadingComponent'
import {AtualizarLoading} from '../../store/actions/opinions'
import FontesPercent from '../Fontes2/SmallVersion'
import PieChartFontsPercent from '../../components/PieChartFontsPercent'
import html2canvas from 'html2canvas'
import domtoimage from 'dom-to-image'











class MakeInfonografico extends React.Component{

    

    constructor(props){
        super(props)
        this.state = {
         
        }
      }

     async handleDownload() {
     
        // htmlToImage.toPng(document.getElementById('infografico'))
        // .then(function (dataUrl) {
        //   download(dataUrl, 'Infografico.png');
        // })

    //     domtoimage.toPng(document.getElementById('infografico'))
    // .then((dataUrl) =>{
    //     var img = new Image();
    //     img.src = dataUrl;
    //     document.getElementById('img').appendChild(img);
    //          document.getElementById('infografico').style.display = "none";
    //         document.getElementById("img").getElementsByTagName("IMG")[0].style.width = "1200px"
    //         this.props.AtualizarLoading(false)
    // })
    // .catch(function (error) {
    //     console.error('oops, something went wrong!', error);
    // });


var svgElements = document.getElementById('PercentForEachPlataforma').querySelectorAll('svg');
svgElements.forEach(function(item) {
    item.setAttribute("width",150);
    item.setAttribute("height",150);
    item.style.width = 20;
    item.style.height= 20;
});



        html2canvas(document.querySelector("#infografico"), {y:"0"}).then(canvas => {
          document.getElementById('img').appendChild(canvas)
          document.getElementById('infografico').style.display = "none";
          document.body.style.overflow = "auto"
          //document.getElementById("img").getElementsByTagName("IMG")[0].style.width = "1200px"
          this.props.AtualizarLoading(false)
       });

          // htmlToImage.toPng(document.getElementById('infografico'), { })
          // .then((dataUrl)=> {
          //   var img = new Image();
          //   img.src = dataUrl;
          //   document.getElementById('img').appendChild(img);
          //   document.getElementById('infografico').style.display = "none";
          //   document.getElementById("img").getElementsByTagName("IMG")[0].style.width = "1200px"
           
          //   this.props.AtualizarLoading(false)
          // })
          // .catch(function (error) {
          //   console.error('oops, something went wrong!', error);
          // });
      };


      async sleep (time) {
        return await new Promise((resolve) => setTimeout(
          
          resolve, time));
      }
      
      // Usage!
    
      async componentDidMount(){


        this.props.FiltroMaster( '1234', moment().subtract('month', 20), moment(), 'geral', true)
   

         await this.sleep(6000).then(() => {
         this.handleDownload()
       });

       //this.props.AtualizarLoading(false)
      

  

        
    }

    


     render(){
         return (
 <div>         
<div className="imgContainer">
  <div id="img">
  </div>
</div>

            
<div className="Canvas">
            <div id="infografico">
              <div className="Area-Content">

                <div className="Head-Space">
                 
                  <div className='Logo-Space'>
                    <div className='container-img'>
                      <img className="logo-img" src={Logo}></img>
                    </div>
                    <div className='container-titulo'>
                      <Typography className="title">RESUMO DO INFOGRÁFICO</Typography>
                    </div>
                  </div> 

                  {/* <div className='Logo-Space'>
                    <div className='container-titulo-estabelecimento'>
                      <Typography className="title">Essência do Sabor</Typography>
                    </div>
                  </div>  */}

                  <div className='LogoEstabelecimento-Space'>
                    <div className='container-img'>
                      <img className="logo-img" src="/Assets/Estabelecimento/EssenciaDoSabor.jpg"></img>
                    </div>
                    <div className='container-tituloo'>
                      <Typography className="title">Essência do Sabor</Typography>
                    </div>
                  </div> 



                    
                </div> 

                


              <Grid container spacing={2}>

              <Grid item xs={4}>
                  <CountOpinions></CountOpinions> 
                </Grid> 
           
                <Grid item xs={4}>
                  <LineChart></LineChart>
                  
                </Grid>

                <Grid item xs={4}>

                  <DividedBarGraph></DividedBarGraph>
                </Grid>

              
               
               
               
              

                <Grid item xs={4}>
                  <DetalhesFontes></DetalhesFontes>
                </Grid>
                

                <Grid item xs={4}>
                  <FontesPercent></FontesPercent>
              </Grid>

              <Grid item xs={4}>
                <PieChartFontsPercent></PieChartFontsPercent>
              </Grid>
              </Grid>
                     </div>

            </div>      
        </div> 
          
</div>
         ) 
}
 }

 function mapActionCreatorsToProps(dispatch){
    return{
   
        FiltroMaster(estabelecimento_id,interval_init, interval_fim, category, AutoTurnOffLoading){
            //action creator
            const action = FiltroMaster(estabelecimento_id,interval_init, interval_fim, category, AutoTurnOffLoading)
            dispatch(action)
        },
        AtualizarLoading(state){
          //action creator
          const action = AtualizarLoading(state)
          dispatch(action)
      },
    }
  }

  function mapStateToProps(state){
    return{
      status_loading: state.status_loading,
    }
  }


 export default connect(mapStateToProps, mapActionCreatorsToProps)(MakeInfonografico)