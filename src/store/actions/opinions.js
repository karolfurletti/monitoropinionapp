import moment from 'moment'
import FiltrosImport from '../../Filtros'
import DataOpinions from '../../Data'
import api from '../../Services/api'
const Opinions = new DataOpinions

const opinions_padrao = Opinions.GetOpinions()
const Filtros = new FiltrosImport

export function AtualizarLineChart(ChartOpinions){ //RECEBE AS OPINIONS ORDENADAS E DEVOLVE NA FORMATACAO DO COMPONENT LINECHART
    
}


export function AtualizarEstadoSelect(filter_time){ //ESTADO DO COMPONENTE BOTAO DE FILTRO DE DATA
    return dispatch => {
        dispatch({
            type: 'ESTADO_SELECT_ATUALIZADO',
            filter_time: filter_time
        })
        
    }  
}

export function AtualizarEstadoButtonFilter(filter_interval){ //ESTADO DO COMPONENTE BOTAO DE FILTRO DE DATA
    return async dispatch => {
        dispatch({
            type: 'ESTADO_BUTTON_ATUALIZADO',
            filter_interval: filter_interval
        })
        
    }  
}

export function AtualizarConcorrente(concorrente_id){ //ESTADO DO COMPONENTE BOTAO DE FILTRO DE DATA
    return async dispatch => {

        dispatch({
            type: 'CONCORRENTE_ATUALIZADO',
            concorrente_id: concorrente_id
        })
        
    }  
}

export function AtualizarConcorrenteData(concorrente_data){ //ESTADO DO COMPONENTE BOTAO DE FILTRO DE DATA
    return async dispatch => {

        dispatch({
            type: 'CONCORRENTE_DADOS_ATUALIZADOS',
            concorrente_data: concorrente_data
        })
        
    }  
}





// export const FiltroMaster = (interval_init, interval_fim)=>
// Promise.resolve({
//   type:'FILTRO_MASTER_ATUALIZADO',
//   interval_init: interval_init,
//   interval_fim: interval_fim, 
// })


export  const FiltroMaster = (estabelecimento_id,interval_init, interval_fim, category, AutoTurnOffLoading) => {

const data = {
    "estabelecimento_id": estabelecimento_id,
    "interval_init": moment(interval_init, "DD MM YYYY hh:mm:ss"),
    "interval_fim": moment(interval_fim, "DD MM YYYY hh:mm:ss"),
    "category": category
    }

 



    return dispatch => {
        dispatch(AtualizarLoading(true))

        dispatch({
            type: 'INTERVAL_INIT_ATUALIZADO',
            interval_init: interval_init,
        })

        dispatch({
            type: 'INTERVAL_FIM_ATUALIZADO',
            interval_fim: interval_fim,
        })


        try{
          api.post('opinion', data, {
               headers:{
                   Authorization: 'setadomanualmente'
               }
           }).then((response) => {
           
               
            dispatch({  
                type: 'FILTRO_MASTER_ATUALIZADO',
              opinions_by_cronology: response.data.OpinionsByChronology
            })
            
            dispatch({
                type: 'LINE_CHART_ATUALIZADO',
                ChartOpinions: response.data.ChartOpinions,
            })

            dispatch({
                type: 'PrincipaisPerfis_Atualizado',
                PrincipaisPerfis: response.data.PrincipaisPerfis,
            })

            dispatch({
                type: 'PrincipaisPlataformas_Atualizado',
                PrincipaisPlataformas: response.data.PrincipaisPlataformas,
            })

            dispatch({
                type: 'QuantidadeOpinions_Atualizado',
                QuantidadeOpinions: response.data.QuantidadeOpinions,
            })

            dispatch({
                type: 'NegativeOpinions_Atualizado',
                NegativeOpinions: response.data.NegativeOpinions,
            })

            dispatch({
                type: 'PositiveOpinions_Atualizado',
                PositiveOpinions: response.data.PositiveOpinions,
            })

            dispatch({
                type: 'PercentOpinionsPositive_Atualizado',
                PercentOpinionsPositive: response.data.PercentOpinionsPositive,
            })


            dispatch({
                type: 'PercentOpinionsNegative_Atualizado',
                PercentOpinionsNegative: response.data.PercentOpinionsNegative,
            })


            dispatch({
                type: 'count_positive_category_Atualizado',
                count_positive_category: response.data.count_positive_category,
            })


            dispatch({
                type: 'count_negative_category_Atualizado',
                count_negative_category: response.data.count_negative_category,
            })

            
            dispatch({
                type: 'PercentForEachPlataforma_Atualizado',
                PercentForEachPlataforma: response.data.PercentForEachPlataforma,
            })

            dispatch({
                type: 'CountSitesEspecializados_Atualizado',
                PercentForEachPlataforma: response.data.CountSitesEspecializados,
            })

            dispatch({
                type: 'CountWeb_Atualizado',
                CountWeb: response.data.CountWeb,
            })

            dispatch({
                type: 'CountRedesSociais_Atualizado',
                CountRedesSociais: response.data.CountRedesSociais,
            })




            if(AutoTurnOffLoading != true){
                dispatch(AtualizarLoading(false))
            }
      

            
            

        }).catch(
            function (error) {
              console.log('Erro ao requisitar servidor linha 118 opinions.js')
              return Promise.reject(error)
            }
          )
           
         }catch(err){
            dispatch(AtualizarLoading(false))
             alert('a')
             console.log(err)
           console.log('erro ao buscar dados. Verifique a funcao FiltroMaster em store/opinions linha 78')
       }
        
           

        
       

                     



      }
    }


    export function FiltroCategory(estabelecimento_id, concorrente_id, interval_init, interval_fim, category){ //ESTADO DO COMPONENTE BOTAO DE FILTRO DE DATA

       if(concorrente_id === false){
        return dispatch => {
            dispatch(FiltroMaster(estabelecimento_id, interval_init, interval_fim, category))

        }}else{
            return dispatch => {
                dispatch(FiltroMaster_Comparacao(estabelecimento_id, concorrente_id,interval_init, interval_fim, category))
    
            }
        }


}
  




    

     export  const FiltroMaster_Comparacao = (estabelecimento_id, concorrente_id,interval_init, interval_fim, category) => {



        const data = {
            "concorrente_id": concorrente_id,
            "estabelecimento_id": estabelecimento_id,
            "interval_init": moment(interval_init, "DD MM YYYY hh:mm:ss"),
            "interval_fim": moment(interval_fim, "DD MM YYYY hh:mm:ss"),
            "category": category
            }
        
        
        
        
        
            return dispatch => {
                dispatch(AtualizarLoading(true))
                dispatch({
                    type: 'INTERVAL_INIT_ATUALIZADO',
                    interval_init: interval_init,
                })
        
                dispatch({
                    type: 'INTERVAL_FIM_ATUALIZADO',
                    interval_fim: interval_fim,
                })
        
        
                try{
                  api.post('compareopinion', data, {
                       headers:{
                           Authorization: 'setadomanualmente'
                       }
                   }).then((response) => {
                   
                       
                    dispatch({  
                        type: 'FILTRO_MASTER_ATUALIZADO_COMPARACAO',
                      opinions_by_cronology: response.data.estabelecimento.OpinionsByChronology
                    })

                    dispatch({  
                        type: 'FILTRO_CONCORRENTE_ATUALIZADO',
                      opinions_by_cronology: response.data.concorrente.OpinionsByChronology
                    })
                    
                    dispatch({
                        type: 'LINE_CHART_ATUALIZADO',
                        ChartOpinions: response.data.ChartOpinions,
                    })

                  
            dispatch({
                type: 'PrincipaisPerfis_Atualizado',
                PrincipaisPerfis: response.data.estabelecimento.PrincipaisPerfis,
            })

            dispatch({
                type: 'PrincipaisPlataformas_Atualizado',
                PrincipaisPlataformas: response.data.estabelecimento.PrincipaisPlataformas,
            })

            dispatch({
                type: 'QuantidadeOpinions_Atualizado',
                QuantidadeOpinions: response.data.estabelecimento.QuantidadeOpinions,
            })

            dispatch({
                type: 'NegativeOpinions_Atualizado',
                NegativeOpinions: response.data.estabelecimento.NegativeOpinions,
            })

            dispatch({
                type: 'PositiveOpinions_Atualizado',
                PositiveOpinions: response.data.estabelecimento.PositiveOpinions,
            })

            dispatch({
                type: 'PercentOpinionsPositive_Atualizado',
                PercentOpinionsPositive: response.data.estabelecimento.PercentOpinionsPositive,
            })


            dispatch({
                type: 'PercentOpinionsNegative_Atualizado',
                PercentOpinionsNegative: response.data.estabelecimento.PercentOpinionsNegative,
            })






            dispatch({
                type: 'PrincipaisPerfis_Atualizado_CONCORRENTE',
                PrincipaisPerfis: response.data.concorrente.PrincipaisPerfis,
            })

            dispatch({
                type: 'PrincipaisPlataformas_Atualizado_CONCORRENTE',
                PrincipaisPlataformas: response.data.concorrente.PrincipaisPlataformas,
            })

            dispatch({
                type: 'QuantidadeOpinions_Atualizado_CONCORRENTE',
                QuantidadeOpinions: response.data.concorrente.QuantidadeOpinions,
            })

            dispatch({
                type: 'NegativeOpinions_Atualizado_CONCORRENTE',
                NegativeOpinions: response.data.concorrente.NegativeOpinions,
            })

            dispatch({
                type: 'PositiveOpinions_Atualizado_CONCORRENTE',
                PositiveOpinions: response.data.concorrente.PositiveOpinions,
            })

            dispatch({
                type: 'PercentOpinionsPositive_Atualizado_CONCORRENTE',
                PercentOpinionsPositive: response.data.concorrente.PercentOpinionsPositive,
            })


            dispatch({
                type: 'PercentOpinionsNegative_Atualizado_CONCORRENTE',
                PercentOpinionsNegative: response.data.concorrente.PercentOpinionsNegative,
            })
                    
                    





            dispatch({
                type: 'PercentForEachPlataforma_Atualizado',
                PercentForEachPlataforma: response.data.concorrente.PercentForEachPlataforma,
            })

            dispatch({
                type: 'PercentForEachPlataforma_Atualizado_CONCORRENTE',
                PercentForEachPlataforma: response.data.concorrente.PercentForEachPlataforma,
            })



            dispatch({
                type: 'CountSitesEspecializados_Atualizado',
                PercentForEachPlataforma: response.data.estabelecimento.CountSitesEspecializados,
            })

            dispatch({
                type: 'CountSitesEspecializados_Atualizado_CONCORRENTE',
                PercentForEachPlataforma: response.data.concorrente.CountSitesEspecializados,
            })






            dispatch({
                type: 'CountRedesSociais_Atualizado_CONCORRENTE',
                CountRedesSociais: response.data.concorrente.CountRedesSociais,
            })

            dispatch({
                type: 'CountRedesSociais_Atualizado',
                CountRedesSociais: response.data.estabelecimento.CountRedesSociais,
            })


            dispatch({
                type: 'CountWeb_Atualizado',
                CountWeb: response.data.estabelecimento.CountWeb,
            })

            dispatch({
                type: 'CountWeb_Atualizado_CONCORRENTE',
                CountWeb: response.data.concorrente.CountWeb,
            })


            
                    
        
                    dispatch(AtualizarLoading(false))
                    
        
                }).catch(
                    function (error) {
                      console.log('Erro ao requisitar servidor linha 118 opinions.js')
                      return Promise.reject(error)
                    }
                  )
                   
                 }catch(err){
                    dispatch(AtualizarLoading(false))
                     alert('a')
                     console.log(err)
                   console.log('erro ao buscar dados. Verifique a funcao FiltroMaster em store/opinions linha 78')
               }
                
                   
        
                
               
        
                             
        
        
        
              }

     }

// export function FiltroMaster(interval_init,interval_fim ){ //ESTADO DO COMPONENTE BOTAO DE FILTRO DE DATA
//     return dispatch => {
        
//         dispatch({
//             type: 'FILTRO_MASTER_ATUALIZADO',
//             interval_init: interval_init,
//             interval_fim: interval_fim, 
//         })

//         dispatch({
//             type: 'INTERVAL_INIT_ATUALIZADO',
//             interval_init: interval_init,
//         })

//         dispatch({
//             type: 'INTERVAL_FIM_ATUALIZADO',
//             interval_fim: interval_fim,
//         })

//         return Promise.resolve()
        
//     }  
// }


// export function FiltroCategory(opinions, filter_category){ //ESTADO DO COMPONENTE BOTAO DE FILTRO DE DATA
//     return dispatch => {
//         dispatch({
//             type: 'FILTRO_CATEGORIA_APLICADO',
//             opinions: opinions,
//             filter_category: filter_category 
//         })        
//     }  
// }


// export function FiltroCategory(concorrente_id, interval_init, interval_fim, category){ //ESTADO DO COMPONENTE BOTAO DE FILTRO DE DATA

    
//     return dispatch => {

//         Filtros.FilterByFreeInterval(concorrente_id, interval_init, interval_fim, category).then(function(opinions_by_cronology){
        
//             dispatch({  
//                 type: 'FILTRO_MASTER_ATUALIZADO',
//               opinions_by_cronology: opinions_by_cronology
//             })

//             dispatch({
//                 type: 'FILTRO_CATEGORIA_APLICADO',
//                 filter_category: category,
//                 opinions_by_cronology: opinions_by_cronology
//             }) 
//     })
// }}

export function FiltroPrincipalDashboard(filter_time, filter_interval){ //RECEBE DADOS BRUTOS E FILTRA POR MES SEMANA DIA SETANDO O COMPONENTE opinions_by_cronology
    return dispatch => {
        dispatch({
            type: 'DATA_FILTRO_ALTERADA',
            filter_time: filter_time
        })
        if(filter_time == "hoje"){
            dispatch(AtualizarEstadoSelect("hoje"))
        } else if (filter_time == "ontem"){
            dispatch(AtualizarEstadoSelect("ontem"))
        } else if (filter_time == "7dias") {
            dispatch(AtualizarEstadoSelect("7dias"))
        }else if (filter_time == "30dias") {
            dispatch(AtualizarEstadoSelect("30dias"))
        }else if (filter_time == "3meses") {
            dispatch(AtualizarEstadoSelect("3meses"))
        }else if (filter_time == "ano") {
            dispatch(AtualizarEstadoSelect("ano"))
        }

        if(filter_interval == "dias"){
            dispatch(AtualizarEstadoButtonFilter("dias"))
        } else if (filter_interval == "semanas"){
            dispatch(AtualizarEstadoButtonFilter("semanas"))
        } else if (filter_interval == "meses") {
            dispatch(AtualizarEstadoButtonFilter("meses"))
        }
}

}

export function FiltrarComentarios(plataforma, aba_value, opinions_by_cronology){
    return {
            type: 'FILTRO_APLICADO',
            payload: plataforma,
            aba_value: aba_value,
            opinions_by_cronology: opinions_by_cronology
    }   
}



export function OrdenarComentarios(tipo_ordenacao){
    return {
        type: 'ORDENACAO_ALTERADA',
        payload: tipo_ordenacao,
        
    }   
}
    export function AlternarAba(tipo_plataforma, tipo_aba){
        return [{
            type: 'ABA_ALTERADA',
            payload: tipo_aba
        }, FiltrarComentarios(tipo_plataforma, tipo_aba)]
    }

        export function AlterarPlataforma(tipo_plataforma, tipo_aba){
            return dispatch => {
                dispatch({
                    type: 'PLATAFORMA_ALTERADA',
                    payload: tipo_plataforma
                })
                
                dispatch(FiltrarComentarios(tipo_plataforma, tipo_aba))
                
            }  
    }

     export function AtualizarLoading(state){
         return dispatch => {
             dispatch({
                 type: 'LOADING_ALTERADO',
                 state: state
             })
         }  
 }




// export function AtualizarLoading(state) {
//     return dispatch => {
//       return new Promise((resolve, reject) => {
//         dispatch({
//             type: 'LOADING_ALTERADO',
//             state: state
//         })
  
//         resolve()
//       });
//     }
//  }


    

