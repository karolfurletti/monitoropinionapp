import moment from 'moment'
import api from '../../Services/api'

// const Opinions = new DataOpinions()
// const opinionsDefault = Opinions.GetOpinions()
// const Filtros = new FiltrosImport()

// RECEBE AS OPINIONS ORDENADAS E DEVOLVE NA FORMATACAO DO COMPONENT LINECHART
export function AtualizarLineChart(ChartOpinions) {}

// ESTADO DO COMPONENTE BOTAO DE FILTRO DE DATA
export function AtualizarEstadoSelect(filterTime) {
  return dispatch => {
    dispatch({
      type: 'ESTADO_SELECT_ATUALIZADO',
      filter_time: filterTime
    })
  }
}

// ESTADO DO COMPONENTE BOTAO DE FILTRO DE DATA
export function AtualizarEstadoButtonFilter(filterInterval) {
  return async dispatch => {
    dispatch({
      type: 'ESTADO_BUTTON_ATUALIZADO',
      filter_interval: filterInterval
    })
  }
}

// ESTADO DO COMPONENTE BOTAO DE FILTRO DE DATA
export function AtualizarConcorrente(competitorId) {
  return async dispatch => {
    dispatch({
      type: 'CONCORRENTE_ATUALIZADO',
      concorrente_id: competitorId
    })
  }
}

// ESTADO DO COMPONENTE BOTAO DE FILTRO DE DATA
export function AtualizarConcorrenteData(competitorData) {
  return async dispatch => {
    dispatch({
      type: 'CONCORRENTE_DADOS_ATUALIZADOS',
      concorrente_data: competitorData
    })
  }
}

// export const FiltroMaster = (interval_init, interval_fim)=>
// Promise.resolve({
//   type:'FILTRO_MASTER_ATUALIZADO',
//   interval_init: interval_init,
//   interval_fim: interval_fim,
// })

export const FiltroMaster = (
  estabelecimentoId,
  intervalInit,
  intervalEnd,
  category,
  AutoTurnOffLoading
) => {
  const data = {
    estabelecimento_id: estabelecimentoId,
    interval_init: moment(intervalInit, 'DD MM YYYY hh:mm:ss'),
    interval_fim: moment(intervalEnd, 'DD MM YYYY hh:mm:ss'),
    category: category
  }

  return dispatch => {
    dispatch(AtualizarLoading(true))

    dispatch({
      type: 'INTERVAL_INIT_ATUALIZADO',
      interval_init: intervalInit
    })

    dispatch({
      type: 'INTERVAL_FIM_ATUALIZADO',
      interval_fim: intervalEnd
    })

    try {
      api
        .post('opinion', data, {
          headers: {
            Authorization: 'setadomanualmente'
          }
        })
        .then(response => {
          dispatch({
            type: 'FILTRO_MASTER_ATUALIZADO',
            opinionsByCronology: response.data.OpinionsByChronology
          })

          dispatch({
            type: 'LINE_CHART_ATUALIZADO',
            ChartOpinions: response.data.ChartOpinions
          })

          dispatch({
            type: 'PrincipaisPerfis_Atualizado',
            PrincipaisPerfis: response.data.PrincipaisPerfis
          })

          dispatch({
            type: 'PrincipaisPlataformas_Atualizado',
            PrincipaisPlataformas: response.data.PrincipaisPlataformas
          })

          dispatch({
            type: 'QuantidadeOpinions_Atualizado',
            QuantidadeOpinions: response.data.QuantidadeOpinions
          })

          dispatch({
            type: 'NegativeOpinions_Atualizado',
            NegativeOpinions: response.data.NegativeOpinions
          })

          dispatch({
            type: 'PositiveOpinions_Atualizado',
            PositiveOpinions: response.data.PositiveOpinions
          })

          dispatch({
            type: 'PercentOpinionsPositive_Atualizado',
            PercentOpinionsPositive: response.data.PercentOpinionsPositive
          })

          dispatch({
            type: 'PercentOpinionsNegative_Atualizado',
            PercentOpinionsNegative: response.data.PercentOpinionsNegative
          })

          dispatch({
            type: 'count_positive_category_Atualizado',
            count_positive_category: response.data.count_positive_category
          })

          dispatch({
            type: 'count_negative_category_Atualizado',
            count_negative_category: response.data.count_negative_category
          })

          dispatch({
            type: 'PercentForEachPlataforma_Atualizado',
            PercentForEachPlataforma: response.data.PercentForEachPlataforma
          })

          dispatch({
            type: 'CountSitesEspecializados_Atualizado',
            PercentForEachPlataforma: response.data.CountSitesEspecializados
          })

          dispatch({
            type: 'CountWeb_Atualizado',
            CountWeb: response.data.CountWeb
          })

          dispatch({
            type: 'CountRedesSociais_Atualizado',
            CountRedesSociais: response.data.CountRedesSociais
          })

          if (!AutoTurnOffLoading) {
            dispatch(AtualizarLoading(false))
          }
        })
        .catch(function (error) {
          console.log('Erro ao requisitar servidor linha 118 opinions.js')
          return Promise.reject(error)
        })
    } catch (err) {
      dispatch(AtualizarLoading(false))
      alert('a')
      console.log(err)
      console.log(
        'erro ao buscar dados. Verifique a funcao FiltroMaster em store/opinions linha 78'
      )
    }
  }
}

// ESTADO DO COMPONENTE BOTAO DE FILTRO DE DATA
export function FiltroCategory(
  estabelecimentoId,
  competitorId,
  intervalInit,
  intervalEnd,
  category
) {
  if (!competitorId) {
    return dispatch => {
      dispatch(
        FiltroMaster(estabelecimentoId, intervalInit, intervalEnd, category)
      )
    }
  } else {
    return dispatch => {
      dispatch(
        filterMasterComparation(
          estabelecimentoId,
          competitorId,
          intervalInit,
          intervalEnd,
          category
        )
      )
    }
  }
}

export const filterMasterComparation = (
  estabelecimentoId,
  competitorId,
  intervalInit,
  intervalEnd,
  category
) => {
  const data = {
    concorrente_id: competitorId,
    estabelecimento_id: estabelecimentoId,
    interval_init: moment(intervalInit, 'DD MM YYYY hh:mm:ss'),
    interval_fim: moment(intervalEnd, 'DD MM YYYY hh:mm:ss'),
    category: category
  }

  return dispatch => {
    dispatch(AtualizarLoading(true))
    dispatch({
      type: 'INTERVAL_INIT_ATUALIZADO',
      interval_init: intervalInit
    })

    dispatch({
      type: 'INTERVAL_FIM_ATUALIZADO',
      interval_fim: intervalEnd
    })

    try {
      api
        .post('compareopinion', data, {
          headers: {
            Authorization: 'setadomanualmente'
          }
        })
        .then(response => {
          dispatch({
            type: 'FILTRO_MASTER_ATUALIZADO_COMPARACAO',
            opinionsByCronology:
              response.data.estabelecimento.OpinionsByChronology
          })

          dispatch({
            type: 'FILTRO_CONCORRENTE_ATUALIZADO',
            opinionsByCronology: response.data.concorrente.OpinionsByChronology
          })

          dispatch({
            type: 'LINE_CHART_ATUALIZADO',
            ChartOpinions: response.data.ChartOpinions
          })

          dispatch({
            type: 'PrincipaisPerfis_Atualizado',
            PrincipaisPerfis: response.data.estabelecimento.PrincipaisPerfis
          })

          dispatch({
            type: 'PrincipaisPlataformas_Atualizado',
            PrincipaisPlataformas:
              response.data.estabelecimento.PrincipaisPlataformas
          })

          dispatch({
            type: 'QuantidadeOpinions_Atualizado',
            QuantidadeOpinions: response.data.estabelecimento.QuantidadeOpinions
          })

          dispatch({
            type: 'NegativeOpinions_Atualizado',
            NegativeOpinions: response.data.estabelecimento.NegativeOpinions
          })

          dispatch({
            type: 'PositiveOpinions_Atualizado',
            PositiveOpinions: response.data.estabelecimento.PositiveOpinions
          })

          dispatch({
            type: 'PercentOpinionsPositive_Atualizado',
            PercentOpinionsPositive:
              response.data.estabelecimento.PercentOpinionsPositive
          })

          dispatch({
            type: 'PercentOpinionsNegative_Atualizado',
            PercentOpinionsNegative:
              response.data.estabelecimento.PercentOpinionsNegative
          })

          dispatch({
            type: 'PrincipaisPerfis_Atualizado_CONCORRENTE',
            PrincipaisPerfis: response.data.concorrente.PrincipaisPerfis
          })

          dispatch({
            type: 'PrincipaisPlataformas_Atualizado_CONCORRENTE',
            PrincipaisPlataformas:
              response.data.concorrente.PrincipaisPlataformas
          })

          dispatch({
            type: 'QuantidadeOpinions_Atualizado_CONCORRENTE',
            QuantidadeOpinions: response.data.concorrente.QuantidadeOpinions
          })

          dispatch({
            type: 'NegativeOpinions_Atualizado_CONCORRENTE',
            NegativeOpinions: response.data.concorrente.NegativeOpinions
          })

          dispatch({
            type: 'PositiveOpinions_Atualizado_CONCORRENTE',
            PositiveOpinions: response.data.concorrente.PositiveOpinions
          })

          dispatch({
            type: 'PercentOpinionsPositive_Atualizado_CONCORRENTE',
            PercentOpinionsPositive:
              response.data.concorrente.PercentOpinionsPositive
          })

          dispatch({
            type: 'PercentOpinionsNegative_Atualizado_CONCORRENTE',
            PercentOpinionsNegative:
              response.data.concorrente.PercentOpinionsNegative
          })

          dispatch({
            type: 'PercentForEachPlataforma_Atualizado',
            PercentForEachPlataforma:
              response.data.concorrente.PercentForEachPlataforma
          })

          dispatch({
            type: 'PercentForEachPlataforma_Atualizado_CONCORRENTE',
            PercentForEachPlataforma:
              response.data.concorrente.PercentForEachPlataforma
          })

          dispatch({
            type: 'CountSitesEspecializados_Atualizado',
            PercentForEachPlataforma:
              response.data.estabelecimento.CountSitesEspecializados
          })

          dispatch({
            type: 'CountSitesEspecializados_Atualizado_CONCORRENTE',
            PercentForEachPlataforma:
              response.data.concorrente.CountSitesEspecializados
          })

          dispatch({
            type: 'CountRedesSociais_Atualizado_CONCORRENTE',
            CountRedesSociais: response.data.concorrente.CountRedesSociais
          })

          dispatch({
            type: 'CountRedesSociais_Atualizado',
            CountRedesSociais: response.data.estabelecimento.CountRedesSociais
          })

          dispatch({
            type: 'CountWeb_Atualizado',
            CountWeb: response.data.estabelecimento.CountWeb
          })

          dispatch({
            type: 'CountWeb_Atualizado_CONCORRENTE',
            CountWeb: response.data.concorrente.CountWeb
          })

          dispatch(AtualizarLoading(false))
        })
        .catch(function (error) {
          console.log('Erro ao requisitar servidor linha 118 opinions.js')
          return Promise.reject(error)
        })
    } catch (err) {
      dispatch(AtualizarLoading(false))
      alert('a')
      console.log(err)
      console.log(
        'erro ao buscar dados. Verifique a funcao FiltroMaster em store/opinions linha 78'
      )
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

//         Filtros.FilterByFreeInterval(concorrente_id, interval_init, interval_fim, category).then(function(opinionsByCronology){

//             dispatch({
//                 type: 'FILTRO_MASTER_ATUALIZADO',
//               opinionsByCronology: opinionsByCronology
//             })

//             dispatch({
//                 type: 'FILTRO_CATEGORIA_APLICADO',
//                 filter_category: category,
//                 opinionsByCronology: opinionsByCronology
//             })
//     })
// }}

export function FiltroPrincipalDashboard(filterTime, filterInterval) {
  // RECEBE DADOS BRUTOS E FILTRA POR MES SEMANA DIA SETANDO O COMPONENTE opinionsByCronology
  return dispatch => {
    dispatch({
      type: 'DATA_FILTRO_ALTERADA',
      filter_time: filterTime
    })
    if (filterTime === 'hoje') {
      dispatch(AtualizarEstadoSelect('hoje'))
    } else if (filterTime === 'ontem') {
      dispatch(AtualizarEstadoSelect('ontem'))
    } else if (filterTime === '7dias') {
      dispatch(AtualizarEstadoSelect('7dias'))
    } else if (filterTime === '30dias') {
      dispatch(AtualizarEstadoSelect('30dias'))
    } else if (filterTime === '3meses') {
      dispatch(AtualizarEstadoSelect('3meses'))
    } else if (filterTime === 'ano') {
      dispatch(AtualizarEstadoSelect('ano'))
    }

    if (filterInterval === 'dias') {
      dispatch(AtualizarEstadoButtonFilter('dias'))
    } else if (filterInterval === 'semanas') {
      dispatch(AtualizarEstadoButtonFilter('semanas'))
    } else if (filterInterval === 'meses') {
      dispatch(AtualizarEstadoButtonFilter('meses'))
    }
  }
}

export function FiltrarComentarios(plataforma, abaValue, opinionsByCronology) {
  return {
    type: 'FILTRO_APLICADO',
    payload: plataforma,
    abaValue: abaValue,
    opinionsByCronology: opinionsByCronology
  }
}

export function OrdenarComentarios(sortingOrder) {
  return {
    type: 'ORDENACAO_ALTERADA',
    payload: sortingOrder
  }
}

export function AlternarAba(platformType, typeAba) {
  return [
    {
      type: 'ABA_ALTERADA',
      payload: typeAba
    },
    FiltrarComentarios(platformType, typeAba)
  ]
}

export function AlterarPlataforma(platformType, typeAba) {
  return dispatch => {
    dispatch({
      type: 'PLATAFORMA_ALTERADA',
      payload: platformType
    })

    dispatch(FiltrarComentarios(platformType, typeAba))
  }
}

export function AtualizarLoading(state) {
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
