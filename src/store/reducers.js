import { combineReducers } from 'redux'
import FiltrosImport from '../Filtros'
import DataOpinions from '../Data'

const Opinions = new DataOpinions()
const Filtros = new FiltrosImport()
const opinionsDefault = Opinions.GetOpinions()

const reducers = combineReducers({
  opinions: function (state, action) {
    return opinionsDefault
  },

  ChartOpinions: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'LINE_CHART_ATUALIZADO':
        return action.ChartOpinions
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  PrincipaisPerfis: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'PrincipaisPerfis_Atualizado':
        return action.PrincipaisPerfis
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  PrincipaisPlataformas: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'PrincipaisPlataformas_Atualizado':
        return action.PrincipaisPlataformas
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  QuantidadeOpinions: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'QuantidadeOpinions_Atualizado':
        return action.QuantidadeOpinions
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  NegativeOpinions: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'NegativeOpinions_Atualizado':
        return action.NegativeOpinions
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  PositiveOpinions: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'PositiveOpinions_Atualizado':
        return action.PositiveOpinions
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  PercentOpinionsPositive: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'PercentOpinionsPositive_Atualizado':
        return action.PercentOpinionsPositive
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  PercentOpinionsNegative: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'PercentOpinionsNegative_Atualizado':
        return action.PercentOpinionsNegative
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  PrincipaisPerfisConcorrente: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'PrincipaisPerfis_Atualizado_CONCORRENTE':
        return action.PrincipaisPerfis
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  PrincipaisPlataformasConcorrente: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'PrincipaisPlataformas_Atualizado_CONCORRENTE':
        return action.PrincipaisPlataformas
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  QuantidadeOpinionsConcorrente: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'QuantidadeOpinions_Atualizado_CONCORRENTE':
        return action.QuantidadeOpinions
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  NegativeOpinionsConcorrente: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'NegativeOpinions_Atualizado_CONCORRENTE':
        return action.NegativeOpinions
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  PositiveOpinionsConcorrente: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'PositiveOpinions_Atualizado_CONCORRENTE':
        return action.PositiveOpinions
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  PercentOpinionsPositiveConcorrente: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'PercentOpinionsPositive_Atualizado_CONCORRENTE':
        return action.PercentOpinionsPositive
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  PercentOpinionsNegativeConcorrente: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'PercentOpinionsNegative_Atualizado_CONCORRENTE':
        return action.PercentOpinionsNegative
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  PercentForEachPlataforma: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'PercentForEachPlataforma_Atualizado':
        return action.PercentForEachPlataforma
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  PercentForEachPlataformaConcorrente: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'PercentForEachPlataforma_Atualizado_CONCORRENTE':
        return action.PercentForEachPlataforma
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },
  count_positive_category: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'count_positive_category_Atualizado':
        return action.count_positive_category
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  count_negative_category: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'count_negative_category_Atualizado':
        return action.count_negative_category
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  CountSitesEspecializadosConcorrente: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'CountSitesEspecializados_Atualizado_CONCORRENTE':
        return action.PercentForEachPlataforma
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  CountSitesEspecializados: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'CountSitesEspecializados_Atualizado':
        return action.PercentForEachPlataforma
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  CountRedesSociais: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'CountRedesSociais_Atualizado':
        return action.CountRedesSociais
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  CountRedesSociaisConcorrente: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'CountRedesSociais_Atualizado_CONCORRENTE':
        return action.CountRedesSociais
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  CountWeb: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'CountWeb_Atualizado':
        return action.CountWeb
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  CountWebConcorrente: function (state, action) {
    // food for chart element in dashboard
    switch (action.type) {
      case 'CountWeb_Atualizado_CONCORRENTE':
        return action.CountWeb
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  estado_button_filter: function (state, action) {
    switch (action.type) {
      case 'ESTADO_BUTTON_ATUALIZADO':
        return action.filter_interval
      default:
        if (typeof state === 'undefined') {
          return 'dias'
        } else {
          return state
        }
    }
  },

  concorrente_id: function (state, action) {
    switch (action.type) {
      case 'CONCORRENTE_ATUALIZADO':
        return action.concorrente_id
      default:
        if (typeof state === 'undefined') {
          return '1234'
        } else {
          return state
        }
    }
  },

  concorrente_data: function (state, action) {
    switch (action.type) {
      case 'CONCORRENTE_DADOS_ATUALIZADOS':
        return action.concorrente_data
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  estado_select_filtro_principal: function (state, action) {
    switch (action.type) {
      case 'ESTADO_SELECT_ATUALIZADO':
        return action.filter_time
      default:
        if (typeof state === 'undefined') {
          return '7dias'
        } else {
          return state
        }
    }
  },

  interval_init: function (state, action) {
    switch (action.type) {
      case 'INTERVAL_INIT_ATUALIZADO':
        return action.interval_init
      default:
        if (typeof state === 'undefined') {
          return new Date()
        } else {
          return state
        }
    }
  },

  interval_fim: function (state, action) {
    switch (action.type) {
      case 'INTERVAL_FIM_ATUALIZADO':
        return action.interval_fim
      default:
        if (typeof state === 'undefined') {
          return new Date()
        } else {
          return state
        }
    }
  },

  opinions_by_cronology_concorrente: function (state, action) {
    switch (action.type) {
      case 'FILTRO_CONCORRENTE_ATUALIZADO':
        try {
          const result = action.opinions_by_cronology
          if (typeof result === 'undefined') {
            result.OpinionsByChronology = []
          }

          return result
        } catch {
          return []
        }
      case 'FILTRO_CATEGORIA_CONCORRENTE_APLICADO':
        // eslint-disable-next-line no-case-declarations
        const tempOpinions = action.opinions_by_cronology
        return Filtros.FilterByCategory(tempOpinions, action.filter_category)
      case 'ORDENACAO_ALTERADA':
        if (action.payload === 'asc') {
          const commentAsc = [...state].slice(0).sort(function (a, b) {
            if (a.data > b.data) return 1
            if (a.data < b.data) return -1
            return 0
          })
          return commentAsc
        } else if (action.payload === 'desc') {
          const commentDes = [...state].slice(0).sort(function (a, b) {
            if (a.data > b.data) return -1
            if (a.data < b.data) return 1
            return 0
          })
          return commentDes
        }
        break
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  opinions_by_cronology: function (state, action) {
    switch (action.type) {
      case 'FILTRO_MASTER_ATUALIZADO':
        try {
          let result = action.opinions_by_cronology
          if (typeof result === 'undefined') {
            result = []
          }

          return result
        } catch {
          return []
        }

      case 'FILTRO_MASTER_ATUALIZADO_COMPARACAO':
        try {
          let resultComparation = action.opinions_by_cronology
          if (typeof resultComparation === 'undefined') {
            resultComparation = []
          }

          return resultComparation
        } catch {
          return []
        }
      case 'FILTRO_CATEGORIA_APLICADO':
        // eslint-disable-next-line no-case-declarations
        const tempOpinions = action.opinions_by_cronology
        return Filtros.FilterByCategory(tempOpinions, action.filter_category)

      case 'ORDENACAO_ALTERADA':
        if (action.payload === 'asc') {
          const commentAsc = [...state].slice(0).sort(function (a, b) {
            if (a.data > b.data) return 1
            if (a.data < b.data) return -1
            return 0
          })
          return commentAsc
        } else if (action.payload === 'desc') {
          const commentDes = [...state].slice(0).sort(function (a, b) {
            if (a.data > b.data) return -1
            if (a.data < b.data) return 1
            return 0
          })
          return commentDes
        }
        break
      default:
        if (typeof state === 'undefined') {
          return []
        } else {
          return state
        }
    }
  },

  aba_value: function (state, action) {
    switch (action.type) {
      case 'ABA_ALTERADA':
        if (action.payload === 0) {
          return 0
        } else if (action.payload === 1) {
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

  plataforma_value: function (state, action) {
    switch (action.type) {
      case 'PLATAFORMA_ALTERADA':
        if (action.payload === 'padrao') {
          return 'padrao'
        } else if (action.payload === 'twitter') {
          return 'twitter'
        } else if (action.payload === 'facebook') {
          return 'facebook'
        } else if (action.payload === 'instagram') {
          return 'instagram'
        } else if (action.payload === 'tripadvisor') {
          return 'tripadvisor'
        } else if (action.payload === 'yelp') {
          return 'yelp'
        } else if (action.payload === 'googlereviews') {
          return 'googlereviews'
        } else if (action.payload === 'web') {
          return 'web'
        }
        break
      default:
        if (typeof state === 'undefined') {
          return 'padrao'
        } else {
          return state
        }
    }
  },

  opinions_by_teor: function (state, action) {
    let obj = []
    switch (action.type) {
      case 'FILTRO_APLICADO':
        if (action.payload === 'twitter') {
          obj = Filtros.GetTwitterOpinions(opinionsDefault)
        } else if (action.payload === 'facebook') {
          obj = Filtros.GetFacebookOpinions(opinionsDefault)
        } else if (action.payload === 'instagram') {
          obj = Filtros.GetInstagramOpinions(opinionsDefault)
        } else {
          obj = opinionsDefault
        }
        if (action.aba_value === 0) {
          return Filtros.GetNegativeOpinions(obj)
        } else {
          return Filtros.GetPositiveOpinions(obj)
        }

      case 'ORDENACAO_ALTERADA':
        if (action.payload === 'asc') {
          const commentAsc = [...state].slice(0).sort(function (a, b) {
            if (a.data > b.data) return 1
            if (a.data < b.data) return -1
            return 0
          })
          return commentAsc
        } else if (action.payload === 'desc') {
          const commentDes = [...state].slice(0).sort(function (a, b) {
            if (a.data > b.data) return -1
            if (a.data < b.data) return 1
            return 0
          })
          return commentDes
        }
        break
      default:
        return Filtros.GetNegativeOpinions(opinionsDefault)
    }
  },

  status_loading: function (state, action) {
    switch (action.type) {
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
