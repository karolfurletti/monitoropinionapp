import { after, isArray, isUndefined } from 'lodash'
import {createStore, combineReducers} from 'redux'
import FiltrosImport from '../Filtros'
import DataOpinions from '../Data'
const Opinions = new DataOpinions

const Filtros = new FiltrosImport


const opinions_padrao = Opinions.GetOpinions()

const reducers = combineReducers({

    opinions: function(state, action){
        
            return opinions_padrao

    },


    ChartOpinions: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'LINE_CHART_ATUALIZADO':
                return action.ChartOpinions
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },





























    PrincipaisPerfis: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'PrincipaisPerfis_Atualizado':
                return action.PrincipaisPerfis
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },


    
    PrincipaisPlataformas: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'PrincipaisPlataformas_Atualizado':
                return action.PrincipaisPlataformas
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },


    
    
    QuantidadeOpinions: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'QuantidadeOpinions_Atualizado':
                return action.QuantidadeOpinions
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },


      
    NegativeOpinions: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'NegativeOpinions_Atualizado':
                return action.NegativeOpinions
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },


    PositiveOpinions: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'PositiveOpinions_Atualizado':
                return action.PositiveOpinions
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },


    PercentOpinionsPositive: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'PercentOpinionsPositive_Atualizado':
                return action.PercentOpinionsPositive
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },


    PercentOpinionsNegative: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'PercentOpinionsNegative_Atualizado':
                return action.PercentOpinionsNegative
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },





















    








    PrincipaisPerfisConcorrente: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'PrincipaisPerfis_Atualizado_CONCORRENTE':
                return action.PrincipaisPerfis
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },


    
    PrincipaisPlataformasConcorrente: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'PrincipaisPlataformas_Atualizado_CONCORRENTE':
                return action.PrincipaisPlataformas
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },


    
    
    QuantidadeOpinionsConcorrente: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'QuantidadeOpinions_Atualizado_CONCORRENTE':
                return action.QuantidadeOpinions
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },


      
    NegativeOpinionsConcorrente: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'NegativeOpinions_Atualizado_CONCORRENTE':
                return action.NegativeOpinions
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },


    PositiveOpinionsConcorrente: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'PositiveOpinions_Atualizado_CONCORRENTE':
                return action.PositiveOpinions
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },


    PercentOpinionsPositiveConcorrente: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'PercentOpinionsPositive_Atualizado_CONCORRENTE':
                return action.PercentOpinionsPositive
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },


    PercentOpinionsNegativeConcorrente: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'PercentOpinionsNegative_Atualizado_CONCORRENTE':
                return action.PercentOpinionsNegative
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },


    




    PercentForEachPlataforma: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'PercentForEachPlataforma_Atualizado':
                return action.PercentForEachPlataforma
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },

    PercentForEachPlataformaConcorrente: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'PercentForEachPlataforma_Atualizado_CONCORRENTE':
                return action.PercentForEachPlataforma
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },
    count_positive_category: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'count_positive_category_Atualizado':
                return action.count_positive_category
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },


    count_negative_category: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'count_negative_category_Atualizado':
                return action.count_negative_category
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },



    CountSitesEspecializadosConcorrente: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'CountSitesEspecializados_Atualizado_CONCORRENTE':
                return action.PercentForEachPlataforma
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },

    CountSitesEspecializados: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'CountSitesEspecializados_Atualizado':
                return action.PercentForEachPlataforma
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },


    
    CountRedesSociais: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'CountRedesSociais_Atualizado':
                return action.CountRedesSociais
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },

    CountRedesSociaisConcorrente: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'CountRedesSociais_Atualizado_CONCORRENTE':
                return action.CountRedesSociais
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },



    CountWeb: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'CountWeb_Atualizado':
                return action.CountWeb
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },

    CountWebConcorrente: function(state, action){     //food for chart element in dashboard
        switch(action.type){
            case 'CountWeb_Atualizado_CONCORRENTE':
                return action.CountWeb
            break
            default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }

        }


    },
















    estado_button_filter: function(state, action){
        switch(action.type){
            case 'ESTADO_BUTTON_ATUALIZADO':     
                return action.filter_interval
            break
            default:
                    if (typeof state === 'undefined') {
                        return 'dias'
                    } else {
                        return state
                    }

    }},

    concorrente_id: function(state, action){
        
        switch(action.type){
          
            case 'CONCORRENTE_ATUALIZADO':     
                
                return action.concorrente_id
            break
            default:
                    if (typeof state === 'undefined') {
                        return '1234'
                    } else {
                        return state
                    }

    }},

    concorrente_data: function(state, action ){
        switch(action.type){
            case 'CONCORRENTE_DADOS_ATUALIZADOS':
                return action.concorrente_data
                break
                default:
                        if (typeof state === 'undefined') {
                            return []
                        } else {
                            return state
                        }

        }
    },


    estado_select_filtro_principal: function(state, action){
        switch(action.type){
            case 'ESTADO_SELECT_ATUALIZADO':     
                return action.filter_time
            break
            default:
                    if (typeof state === 'undefined') {
                        return '7dias'
                    } else {
                        return state
                    }

    }},


    interval_init: function(state, action){
        switch(action.type){
            case 'INTERVAL_INIT_ATUALIZADO':     
                return action.interval_init
            break
            default:
                    if (typeof state === 'undefined') {
                        return new Date()
                    } else {
                        return state
                    }

    }},

    interval_fim: function(state, action){
        switch(action.type){
            case 'INTERVAL_FIM_ATUALIZADO':     
                return action.interval_fim
            break
            default:
                    if (typeof state === 'undefined') {
                        return new Date()
                    } else {
                        return state
                    }

    }},




                        


    opinions_by_cronology_concorrente: function(state, action){
        switch(action.type){
    
        
        case 'FILTRO_CONCORRENTE_ATUALIZADO':
            try{
                let result = action.opinions_by_cronology
                if( typeof result === "undefined")
                    result.OpinionsByChronology = []
            
            return result
            } catch {
                return []
            }
        break
            

        case 'FILTRO_CATEGORIA_CONCORRENTE_APLICADO':
            const temp_opinions = action.opinions_by_cronology
            return Filtros.FilterByCategory(temp_opinions, action.filter_category)
        break


        case 'ORDENACAO_ALTERADA':
            if(action.payload==="asc"){
                const comment_asc = [...state].slice(0).sort(function (a, b) {
                    if (a.data > b.data) return 1;
                    if (a.data < b.data) return -1;
                    return 0;
                    });
                return comment_asc
            }
            else if(action.payload==="desc"){
                const comment_des = [...state].slice(0).sort(function (a, b) {
                    if (a.data > b.data) return -1;
                    if (a.data < b.data) return 1;
                    return 0;
                    });
                    return comment_des
            }
            else{
            }   
    default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }
                }


        
       

    },

    opinions_by_cronology: function(state, action){
       

        switch(action.type){

        
        case 'FILTRO_MASTER_ATUALIZADO':
            try{
                let result = action.opinions_by_cronology
                if( typeof result === "undefined")
                result = []
            
            return result
            } catch {
                return []
            }
            
            
        break



        case 'FILTRO_MASTER_ATUALIZADO_COMPARACAO':
            try{
            let result_comparacao = action.opinions_by_cronology
            if( typeof result_comparacao === "undefined")
                result_comparacao = []        
            
            return result_comparacao
            } catch {
                return []
            }
        break
            

        case 'FILTRO_CATEGORIA_APLICADO':
            const temp_opinions = action.opinions_by_cronology
            return Filtros.FilterByCategory(temp_opinions, action.filter_category)
        break


        case 'ORDENACAO_ALTERADA':
            if(action.payload==="asc"){
                const comment_asc = [...state].slice(0).sort(function (a, b) {
                    if (a.data > b.data) return 1;
                    if (a.data < b.data) return -1;
                    return 0;
                    });
                return comment_asc
            }
            else if(action.payload==="desc"){
                const comment_des = [...state].slice(0).sort(function (a, b) {
                    if (a.data > b.data) return -1;
                    if (a.data < b.data) return 1;
                    return 0;
                    });
                    return comment_des
            }
            else{
            }   
    default:
                if (typeof state === 'undefined') {
                    return []
                } else {
                    return state
                }
                }


        
       

    },












    aba_value: function(state, action){
        switch(action.type){
        case 'ABA_ALTERADA':
                if(action.payload===0){
                    return 0
                }

                else if(action.payload===1){
                   return 1
                }
                break
                default:
                    if (typeof state === 'undefined') {
                        return 0
                    } else {
                        return state
                    }
            }
        

    },

    plataforma_value: function(state, action){
        switch(action.type){
        case 'PLATAFORMA_ALTERADA':
            if(action.payload==="padrao"){
           
                return "padrao"
            }
                else if(action.payload==="twitter"){
               
                    return "twitter"
                }

                else if(action.payload==="facebook"){
                
                   return "facebook"
                }

                else if(action.payload==="instagram"){
                
                    return "instagram"
                 }

                 else if(action.payload==="tripadvisor"){
                
                    return "tripadvisor"
                 }

                 else if(action.payload==="yelp"){
                
                    return "yelp"
                 }
                 else if(action.payload==="googlereviews"){
                
                    return "googlereviews"
                 }
                 else if(action.payload==="web"){
                
                    return "web"
                 }
                
                break
                default:
                    if (typeof state === 'undefined') {
                        return "padrao"
                    } else {
                        return state
                    }
            }
        

    },

    opinions_by_teor: function(state, action){
 

        let obj = []
        switch(action.type){
        case 'FILTRO_APLICADO':
                if (action.payload === 'twitter'){
                    obj =  Filtros.GetTwitterOpinions(opinions_padrao)
                    
                }
                else if (action.payload=== 'facebook'){
                    
                    obj =  Filtros.GetFacebookOpinions(opinions_padrao)
                }
                else if (action.payload=== 'instagram'){
                    obj =  Filtros.GetInstagramOpinions(opinions_padrao)
                }
                else{
                    obj =  opinions_padrao
                }
                if(action.aba_value === 0 )
                    return Filtros.GetNegativeOpinions(obj)
                else 
                    return Filtros.GetPositiveOpinions(obj)
                
            case 'ORDENACAO_ALTERADA':
                if(action.payload==="asc"){
                    const comment_asc = [...state].slice(0).sort(function (a, b) {
                        if (a.data > b.data) return 1;
                        if (a.data < b.data) return -1;
                        return 0;
                      });
                    return comment_asc
                }
                else if(action.payload==="desc"){
                    const comment_des = [...state].slice(0).sort(function (a, b) {
                        if (a.data > b.data) return -1;
                        if (a.data < b.data) return 1;
                        return 0;
                      });
                      return comment_des
                }
                else{
                }
            default:
                return Filtros.GetNegativeOpinions(opinions_padrao)
                
                

        }

    },


    status_loading: function(state, action){
 

        switch(action.type){
        case 'LOADING_ALTERADO':
               return action.state
        
       default:
                if (typeof state === 'undefined') {
                    return false
                } else {
                    return state
                }
                
                

        }

    }






})

export default reducers