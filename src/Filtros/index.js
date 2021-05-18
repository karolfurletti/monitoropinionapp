import { isArray } from "lodash"
import moment from "moment"
import "moment/locale/pt-br"

const _ = require("lodash")
export default class Filtros {
  CountSitesEspecializados(opinions) {

    let counter = 0
    for (const opinion of opinions) {
      const { plataforma } = opinion
      if (plataforma === "googlereviews" || plataforma === "yelp" || plataforma === "tripadvisor") {
        counter += 1
      }
    }
    return counter
  }

  CountRedesSociais(opinions) {
    let counter = 0
    for (const opinion of opinions) {
      if (opinion.plataforma === "facebook" ||
        opinion.plataforma === "twitter" ||
        opinion.plataforma === "instagram") {
        counter += 1
      }
    }
    return counter
  }

  CountWeb(opinions) {
    if (!isArray(opinions)) {
      return 0
    }
    let counter = 0
    for (const opinion of opinions) {
      if (opinion.plataforma === "web") counter += 1
    }
    return counter
  }

  CountFacebook(opinions) {
    if (!isArray(opinions)) {
      return 0
    }
    let counter = 0
    for (const opinion of opinions) {
      if (opinion.plataforma === "facebook") counter += 1
    }
    return counter
  }

  CountTwitter(opinions) {
    if (!isArray(opinions)) {
      return 0
    }
    let counter = 0
    for (const opinion of opinions) {
      if (opinion.plataforma === "twitter") counter += 1
    }
    return counter
  }

  CountInstagram(opinions) {
    if (!isArray(opinions)) {
      return 0
    }
    let counter = 0
    for (const opinion of opinions) {
      if (opinion.plataforma === "instagram") counter += 1
    }
    return counter
  }

  CountTripadvisor(opinions) {
    if (!isArray(opinions)) {
      return 0
    }
    let counter = 0
    for (const opinion of opinions) {
      if (opinion.plataforma === "tripadvisor") counter += 1
    }
    return counter
  }

  CountYelp(opinions) {
    if (!isArray(opinions)) {
      return 0
    }
    let counter = 0
    for (const opinion of opinions) {
      if (opinion.plataforma === "yelp") counter += 1
    }
    return counter
  }

  CountGooglereviews(opinions) {
    if (!isArray(opinions)) {
      return 0
    }
    let counter = 0
    for (const opinion of opinions) {
      if (opinion.plataforma === "googlereviews") counter += 1
    }
    return counter
  }

  CountOpinion(opinions) {
    if (!isArray(opinions)) {
      return 0
    }
    let counter = 0
    // eslint-disable-next-line no-unused-vars
    for (const opinion of opinions) {
      counter += 1
    }

    return counter
  }

  CountPositiveOpinion(opinions) {
    let counter = 0
    for (const opinion of opinions) {
      if (opinion.teor === "positive") {
        counter += 1
      }
    }

    return counter
  }

  round = (num, places) => {
    return +(parseFloat(num).toFixed(places))
  }

  CountPositiveNegativePercent(opinions) {
    const positive = this.CountPositiveOpinion(opinions)
    const total = this.CountOpinion(opinions)
    let percent = 0

    percent = (positive * 100)
    percent = percent / total

    let positivePercent = percent
    let negative_percent = 100 - positivePercent

    if (isNaN(positivePercent)) {
      positivePercent = 0
    }
    if (isNaN(negative_percent)) {
      negative_percent = 0
    }

    return [this.round(positivePercent), this.round(negative_percent)]
  }

  CountPercentForEachPlataforma(opinions) {
    let twitter = this.CountTwitter(opinions)
    let facebook = this.CountFacebook(opinions)
    let instagram = this.CountInstagram(opinions)
    let yelp = this.CountYelp(opinions)
    let googlereviews = this.CountGooglereviews(opinions)
    let tripadvisor = this.CountTripadvisor(opinions)
    let web = this.CountWeb(opinions)

    let total = this.CountOpinion(opinions)

    twitter = (twitter * 100)
    facebook = (facebook * 100)
    instagram = (instagram * 100)
    yelp = (yelp * 100)
    googlereviews = (googlereviews * 100)
    tripadvisor = (tripadvisor * 100)
    web = (web * 100)

    twitter = twitter / total
    facebook = facebook / total
    instagram = instagram / total
    yelp = yelp / total
    googlereviews = googlereviews / total
    tripadvisor = tripadvisor / total
    web = web / total

    if (isNaN(twitter)) {
      twitter = 0
    }
    if (isNaN(facebook)) {
      facebook = 0
    }
    if (isNaN(instagram)) {
      instagram = 0
    }
    if (isNaN(yelp)) {
      yelp = 0
    }
    if (isNaN(googlereviews)) {
      googlereviews = 0
    }
    if (isNaN(tripadvisor)) {
      tripadvisor = 0
    }
    if (isNaN(web)) {
      web = 0
    }

    return {
      "twitter": this.round(twitter, 2),
      "instagram": this.round(instagram, 2),
      "facebook": this.round(facebook, 2),
      "yelp": this.round(yelp, 2),
      "googlereviews": this.round(googlereviews, 2),
      "tripadvisor": this.round(tripadvisor, 2),
      "web": this.round(web, 2)
    }
  }

  CountNegativeOpinion(opinions) {
    let counter = 0
    for (const opinion of opinions) {
      if (opinion.teor === "negative") {
        counter += 1
      }
    }

    return counter
  }

  CountOpinionForEachUser(opinions, name_key) {
    let counter = 0
    for (const opinion of opinions) {
      if (opinion.author === name_key.author) counter += 1
    }
    return counter
  }

  CountPositiveOpinionForEachUser(opinions, name_key) {
    let counter = 0
    for (const opinion of opinions) {
      if (opinion.author === name_key.author && opinion.teor === "positive") counter += 1
    }
    return counter
  }

  CountNegativeOpinionForEachUser(opinions, name_key) {
    let counter = 0
    for (const opinion of opinions) {
      if (opinion.author === name_key.author && opinion.teor === "negative") counter += 1
    }
    return counter
  }

  OrderByNegativeOpinions(opinions) {
    const provisory_array = opinions.sort(function(a, b) {
      return a.negative_opinions - b.negative_opinions
    })
    return provisory_array.reverse()
  }

  OrderByTotalOpinions(opinions) {
    const provisory_array = opinions.sort(function(a, b) {
      return a.opinions_total - b.opinions_total
    })
    return provisory_array.reverse()
  }

  filter_duplicate_names(opinions) {
    const name_keys = opinions.filter((opinion, index, self) =>
      index === self.findIndex((t) => (
        t.author === opinion.author
      ))
    )
    return name_keys

  }

  author_filter_count(opinions) {
    let author_count = []
    const name_keys = this.filter_duplicate_names(opinions) //separa os nomes chaves evitando que se repitam
    name_keys.map((name_key, index) => {
      return author_count.push({
        "author": name_key.author,
        "opinions_total": this.CountOpinionForEachUser(opinions, name_key),
        "negative_opinions": this.CountNegativeOpinionForEachUser(opinions, name_key),
        "positive_opinions": this.CountPositiveOpinionForEachUser(opinions, name_key)
      })
    })
    return this.OrderByTotalOpinions(author_count).slice(0, 10)
  }

  OrderByName(opinions) {
    const provisory_array = opinions.sort(function(a, b) {
      if (a.plataforma < b.plataforma) {
        return -1
      }
      if (a.plataforma > b.plataforma) {
        return 1
      }
      return 0
    })
    return provisory_array
  }

  plataforma_filter_count(opinions) {

    let plataforma_count = []
    const plataforma_keys = this.filter_duplicate_plataformas(opinions) //separa os nomes chaves evitando que se repitam
    plataforma_keys.map((plataforma_key, index) => {
      return plataforma_count.push({
        "plataforma": plataforma_key.plataforma,
        "opinions_total": this.CountOpinionForEachPlataforma(opinions, plataforma_key),
        "negative_opinions": this.CountNegativeOpinionForEachPlataforma(opinions, plataforma_key),
        "positive_opinions": this.CountPositiveOpinionForEachPlataforma(opinions, plataforma_key)
      })
    })
    // return this.OrderByTotalOpinions(plataforma_count);
    return this.OrderByName(plataforma_count)

  }

////////////////////////////////////////////////////////////////////////////////////////////////////
  profit_sites_especializados_week(opinions) {
    let opinions_this_week = this.FilterBy7days(opinions)
    let opinions_pass_week = this.FilterByPass7days(opinions)

    let negative_opinions_this_week = this.GetNegativeOpinions(opinions_this_week)
    let negative_opinions_pass_week = this.GetNegativeOpinions(opinions_pass_week)

    let positive_opinions_this_week = this.GetPositiveOpinions(opinions_this_week)
    let positive_opinions_pass_week = this.GetPositiveOpinions(opinions_pass_week)

    let nThisWeekPositive = this.CountSitesEspecializados(positive_opinions_this_week)
    let nPassWeekPositive = this.CountSitesEspecializados(positive_opinions_pass_week)

    let nThisWeekNegative = this.CountSitesEspecializados(negative_opinions_this_week)
    let nPassWeekNegative = this.CountSitesEspecializados(negative_opinions_pass_week)

    let total_this_week = nThisWeekPositive - nThisWeekNegative

    let total_pass_week = nPassWeekPositive - nPassWeekNegative
    let var_percen = 0
    if (total_pass_week > total_this_week) {
      var_percen = (total_pass_week - total_this_week) * 100 / total_pass_week

      return this.round(var_percen)

    } else {
      var_percen = (total_this_week - total_pass_week) * 100 / total_pass_week
      if (total_pass_week < 0) {
        return this.round(var_percen * (-1))
      } else {
        return this.round(var_percen)
      }
    }
  }

  profit_redes_sociais_week(opinions) {
    let opinions_this_week = this.FilterBy7days(opinions)
    let opinions_pass_week = this.FilterByPass7days(opinions)

    let negative_opinions_this_week = this.GetNegativeOpinions(opinions_this_week)
    let negative_opinions_pass_week = this.GetNegativeOpinions(opinions_pass_week)

    let positive_opinions_this_week = this.GetPositiveOpinions(opinions_this_week)
    let positive_opinions_pass_week = this.GetPositiveOpinions(opinions_pass_week)

    let nThisWeekPositive = this.CountRedesSociais(positive_opinions_this_week)
    let nPassWeekPositive = this.CountRedesSociais(positive_opinions_pass_week)

    let nThisWeekNegative = this.CountRedesSociais(negative_opinions_this_week)
    let nPassWeekNegative = this.CountRedesSociais(negative_opinions_pass_week)

    let total_this_week = nThisWeekPositive - nThisWeekNegative

    let total_pass_week = nPassWeekPositive - nPassWeekNegative
    let var_percen = 0
    if (total_pass_week > total_this_week) {
      var_percen = (total_pass_week - total_this_week) * 100 / total_pass_week

      return this.round(var_percen)

    } else {
      var_percen = (total_this_week - total_pass_week) * 100 / total_pass_week
      if (total_pass_week < 0) {
        return this.round(var_percen * (-1))
      } else {
        return this.round(var_percen)
      }
    }

  }

  profit_web_week(opinions) {
    let opinions_this_week = this.FilterBy7days(opinions)
    let opinions_pass_week = this.FilterByPass7days(opinions)

    let negative_opinions_this_week = this.GetNegativeOpinions(opinions_this_week)
    let negative_opinions_pass_week = this.GetNegativeOpinions(opinions_pass_week)

    let positive_opinions_this_week = this.GetPositiveOpinions(opinions_this_week)
    let positive_opinions_pass_week = this.GetPositiveOpinions(opinions_pass_week)

    let nThisWeekPositive = this.CountWeb(positive_opinions_this_week)
    let nPassWeekPositive = this.CountWeb(positive_opinions_pass_week)

    let nThisWeekNegative = this.CountWeb(negative_opinions_this_week)
    let nPassWeekNegative = this.CountWeb(negative_opinions_pass_week)

    let total_this_week = nThisWeekPositive - nThisWeekNegative

    let total_pass_week = nPassWeekPositive - nPassWeekNegative
    let var_percen = 0

    if (total_pass_week > total_this_week) {
      var_percen = (total_pass_week - total_this_week) * 100 / total_pass_week

      return this.round(var_percen)

    } else {
      var_percen = (total_this_week - total_pass_week) * 100 / total_pass_week
      if (total_pass_week < 0) {
        return this.round(var_percen * (-1))
      } else {
        return this.round(var_percen)
      }
    }

  }

///////////////////////////////////////////////////////////////////////////////////////////////////
  opinions_by_teor(plataforma, aba_value, opinions) {
    let obj = []
    if (plataforma === "twitter") {
      obj = this.GetTwitterOpinions(opinions)

    } else if (plataforma === "facebook") {

      obj = this.GetFacebookOpinions(opinions)
    } else if (plataforma === "instagram") {
      obj = this.GetInstagramOpinions(opinions)
    } else if (plataforma === "tripadvisor") {
      obj = this.GetTripadvisorOpinions(opinions)
    } else if (plataforma === "yelp") {
      obj = this.GetYelpOpinions(opinions)
    } else if (plataforma === "googlereviews") {
      obj = this.GetGoogleOpinions(opinions)
    } else if (plataforma === "web") {
      obj = this.GetWebOpinions(opinions)
    } else {
      obj = opinions
    }
    if (aba_value === 0) {
      return this.GetNegativeOpinions(obj)
    } else {
      return this.GetPositiveOpinions(obj)
    }

  }

  opinions_ordem(tipo_ordenacao, opinions) {
    if (tipo_ordenacao === "asc") {
      const comment_asc = opinions.slice(0).sort(function(a, b) {
        if (a.data > b.data) return 1
        if (a.data < b.data) return -1
        return 0
      })
      return comment_asc
    } else if (tipo_ordenacao === "desc") {
      const comment_des = opinions.slice(0).sort(function(a, b) {
        if (a.data > b.data) return -1
        if (a.data < b.data) return 1
        return 0
      })
      return comment_des
    } else {
    }
  }

////////////////////////////////////////////////////////////////////////////////////////////////////

  filter_duplicate_plataformas(opinions) {
    const plataforma_keys = opinions.filter((opinion, index, self) =>
      index === self.findIndex((t) => (
        t.plataforma === opinion.plataforma
      ))
    )
    return plataforma_keys

  }

  CountOpinionForEachPlataforma(opinions, plataforma_key) {
    let counter = 0
    for (const opinion of opinions) {
      if (opinion.plataforma === plataforma_key.plataforma) counter += 1
    }
    return counter
  }

  CountPositiveOpinionForEachPlataforma(opinions, plataforma_key) {
    let counter = 0
    for (const opinion of opinions) {
      if (opinion.plataforma === plataforma_key.plataforma && opinion.teor === "positive") counter += 1
    }
    return counter
  }

  CountNegativeOpinionForEachPlataforma(opinions, plataforma_key) {
    let counter = 0
    for (const opinion of opinions) {
      if (opinion.plataforma === plataforma_key.plataforma && opinion.teor === "negative") counter += 1
    }
    return counter
  }

////////////////////////////////////////////////////////////////////////////////////////////////////

  async FilterByCategory(opinions, filter_category) {
    let opinions_filtered = []
    switch (filter_category) {
      case "geral":
        return opinions
      case "comida":
        for (const comment of opinions) {
          if (comment.opinions !== undefined) {
            for (const opinion of comment.opinions) {
              if (opinion.category === "comida") {
                opinions_filtered.push(comment)
              }
            }
          }
        }
        return opinions_filtered
      case "bebida":
        for (const comment of opinions) {
          if (comment.opinions !== undefined) {
            for (const opinion of comment.opinions) {
              if (opinion.category === "bebida") {
                opinions_filtered.push(comment)
              }
            }
          }
        }
        return opinions_filtered

      case "localizacao":
        for (const comment of opinions) {
          if (comment.opinions !== undefined) {
            for (const opinion of comment.opinions) {
              if (opinion.category === "localizacao") {
                opinions_filtered.push(comment)
              }
            }
          }
        }
        return opinions_filtered

      case "preco":
        for (const comment of opinions) {
          if (comment.opinions !== undefined) {
            for (const opinion of comment.opinions) {
              if (opinion.category === "preco") {
                opinions_filtered.push(comment)
              }
            }
          }
        }
        return opinions_filtered

      case "ambiente":
        for (const comment of opinions) {
          if (comment.opinions !== undefined) {
            for (const opinion of comment.opinions) {
              if (opinion.category === "ambiente") {
                opinions_filtered.push(comment)
              }
            }
          }
        }
        return opinions_filtered

      case "outros":
        for (const comment of opinions) {
          if (comment.opinions !== undefined) {
            for (const opinion of comment.opinions) {
              if (opinion.category === "outros") {
                opinions_filtered.push(comment)
              }
            }
          }
        }
        return opinions_filtered


      case "servico":
        for (const comment of opinions) {
          if (comment.opinions !== undefined) {
            for (const opinion of comment.opinions) {
              if (opinion.category === "servico") {
                opinions_filtered.push(comment)
              }
            }
          }
        }
        return opinions_filtered

      default:
        opinions_filtered = opinions
        return opinions_filtered
    }

  }

//////////////////////////////////////////////////////////////////////////////////////////////////////
  GetPositiveOpinions(opinions) {
    if (opinions.filtered_state !== undefined) {
      return opinions.filtered_state.filter(item => item.teor.includes("positive"))
    }
    return opinions.filter(item => item.teor.includes("positive"))

  }

  GetNegativeOpinions(opinions) {
    if (opinions.filtered_state !== undefined) {
      return opinions.filtered_state.filter(item => item.teor.includes("negative"))
    }
    return opinions.filter(item => item.teor.includes("negative"))
  }

  GetTwitterOpinions(opinions) {
    return opinions.filter(item => item.plataforma.includes("twitter"))
  }

  GetInstagramOpinions(opinions) {
    return opinions.filter(item => item.plataforma.includes("instagram"))
  }

  GetFacebookOpinions(opinions) {
    return opinions.filter(item => item.plataforma.includes("facebook"))
  }

  GetTripadvisorOpinions(opinions) {
    return opinions.filter(item => item.plataforma.includes("tripadvisor"))
  }

  GetYelpOpinions(opinions) {
    return opinions.filter(item => item.plataforma.includes("yelp"))
  }

  GetGoogleOpinions(opinions) {
    return opinions.filter(item => item.plataforma.includes("googlereviews"))
  }

  GetWebOpinions(opinions) {
    return opinions.filter(item => item.plataforma.includes("web"))
  }

  FilterByToday(opinions) {
    const inicio = moment().startOf("day")
    const fim = moment().endOf("day")
    const filteredObjects = _.filter(opinions,
      function(each) {
        return moment(each.data)
          .isBetween(inicio, fim)
      })
    return filteredObjects
  }

  FilterByYesterday(opinions) {
    const inicio = moment().startOf("day").subtract(1, "day")
    const fim = moment().endOf("day").subtract(0, "day")
    const filteredObjects = _.filter(opinions,
      function(each) {
        return moment(each.data)
          .isBetween(inicio, fim)
      })
    return filteredObjects
  }

  FilterByPass7days(opinions) {
    var inicio = moment().startOf("day").subtract(14, "day")
    var fim = moment().endOf("day").subtract(7, "day")

    var filteredObjects = _.filter(opinions,
      function(each) {
        return moment(each.data)
          .isBetween(inicio, fim)
      })
    return filteredObjects
  }

  FilterBy7days(opinions) {
    const inicio = moment().startOf("day").subtract(7, "day")
    const fim = moment().endOf("day").subtract(0, "day")

    const filteredObjects = _.filter(opinions,
      function(each) {
        return moment(each.data)
          .isBetween(inicio, fim)
      })
    return filteredObjects
  }

  FilterBy30Days(opinions) {
    const inicio = moment().startOf("day").subtract(30, "day")
    const fim = moment().endOf("day").subtract(0, "day")
    const filteredObjects = _.filter(opinions,
      function(each) {
        return moment(each.data)
          .isBetween(inicio, fim)
      })
    return filteredObjects
  }

  FilterBy3Mounts(opinions) {
    const inicio = moment().startOf("month").subtract(3, "month")
    const fim = moment().endOf("day").subtract(0, "day")
    const filteredObjects = _.filter(opinions,
      function(each) {
        return moment(each.data)
          .isBetween(inicio, fim)
      })
    return filteredObjects
  }

  FilterByYear(opinions) {
    const inicio = moment().startOf("month").subtract(1, "year")
    const fim = moment().endOf("day").subtract(0, "day")
    const filteredObjects = _.filter(opinions,
      function(each) {
        return moment(each.data)
          .isBetween(inicio, fim)
      })
    return filteredObjects
  }

  FilterByFreeInterval(opinions, interval_init, interval_fim) {

    return new Promise((resolve, reject) => {
      let inicio
      if (interval_init === interval_fim) {

        inicio = moment(interval_init).subtract(20, "week")
      } else {
        inicio = moment(interval_init)
      }

      let fim = moment(interval_fim)

      const filteredObjects = _.filter(opinions,
        function(each) {
          return moment(each.data)
            .isBetween(inicio, fim)
        })

      resolve(filteredObjects)
    })

  }

  SplitInYear(opinions_by_cronology, estado_button_filter) {
    var index_value = 0
    var unity = ""
    if (estado_button_filter === "dias") {
      index_value = 52
      unity = "week"
    } else if (estado_button_filter === "semanas") {
      index_value = 52
      unity = "week"
    } else if (estado_button_filter === "meses") {
      index_value = 12
      unity = "month"
    }

    let inicio = 0
    let fim = 0
    let i = 0
    var filteredObjects = []
    for (let index = index_value; index > 0; index--) {
      inicio = moment().startOf(unity).subtract(index, unity)
      fim = moment().endOf(unity).subtract(index, unity)

      filteredObjects[i] = _.filter(opinions_by_cronology,
        // eslint-disable-next-line no-loop-func
        function(each) {
          return moment(each.data)
            .isBetween(inicio, fim)
        })
      i++
    }

    return filteredObjects

  }

  SplitInDay(opinions_by_cronology, estado_button_filter) {
    var index_value = 0
    var unity = ""
    if (estado_button_filter === "dias") {
      index_value = 0
      unity = "hour"
    } else if (estado_button_filter === "semanas") {
      index_value = 0
      unity = "hour"
    } else if (estado_button_filter === "meses") {
      index_value = 0
      unity = "hour"
    }

    let inicio = 0
    let fim = 0
    let i = 0
    var filteredObjects = []
    for (let index = index_value; index < 24; index++) {
      inicio = moment().startOf("day").add(index, unity)
      fim = moment().startOf("day").add(index + 1, unity)

      filteredObjects[i] = _.filter(opinions_by_cronology,
        // eslint-disable-next-line no-loop-func
        function(each) {
          return moment(each.data)
            .isBetween(inicio, fim)
        })
      i++
    }

    return filteredObjects

  }

  SplitInYesterday(opinions_by_cronology, estado_button_filter) {

    var index_value = 0
    var unity = ""
    if (estado_button_filter === "dias") {
      index_value = 24
      unity = "hour"
    } else if (estado_button_filter === "semanas") {
      index_value = 24
      unity = "hour"
    } else if (estado_button_filter === "meses") {
      index_value = 24
      unity = "hour"
    }

    let inicio = 0
    let fim = 0
    let i = 0
    var filteredObjects = []
    for (let index = index_value; index > 0; index--) {
      inicio = moment().startOf("day").subtract(index, unity)
      fim = moment().startOf("day").subtract(index - 1, unity)

      filteredObjects[i] = _.filter(opinions_by_cronology,
        // eslint-disable-next-line no-loop-func
        function(each) {
          return moment(each.data)
            .isBetween(inicio, fim)
        })
      i++
    }

    return filteredObjects

  }

  SplitInWeek(opinions_by_cronology, estado_button_filter) {
    let index_value = 0
    let unity = ""
    if (estado_button_filter === "dias") {
      index_value = 6
      unity = "day"
    } else if (estado_button_filter === "semanas") {
      index_value = 6
      unity = "day"
    } else if (estado_button_filter === "meses") {
      index_value = 6
      unity = "day"
    }

    let inicio = 0
    let fim = 0
    let i = 0
    var filteredObjects = []
    for (let index = index_value; index >= 0; index--) {
      inicio = moment().startOf("day").subtract(index, unity)
      fim = moment().startOf("day").subtract(index - 1, unity)

      filteredObjects[i] = _.filter(opinions_by_cronology,
        // eslint-disable-next-line no-loop-func
        function(each) {
          return moment(each.data)
            .isBetween(inicio, fim)
        })
      i++
    }

    return filteredObjects

  }

  SplitIn30Days(opinions_by_cronology, estado_button_filter) {
    let index_value = 0
    let unity = ""
    if (estado_button_filter === "dias") {
      index_value = 30
      unity = "day"
    } else if (estado_button_filter === "semanas") {
      index_value = 4
      unity = "week"
    } else if (estado_button_filter === "meses") {
      index_value = 30
      unity = "day"
    }

    let inicio = 0
    let fim = 0
    let i = 0
    var filteredObjects = []
    for (let index = index_value; index >= 0; index--) {
      inicio = moment().startOf("day").subtract(index, unity)
      fim = moment().startOf("day").subtract(index - 1, unity)

      filteredObjects[i] = _.filter(opinions_by_cronology,
        // eslint-disable-next-line no-loop-func
        function(each) {
          return moment(each.data)
            .isBetween(inicio, fim)
        })
      i++
    }

    return filteredObjects

  }

  SplitIn3Mounths(opinions_by_cronology, estado_button_filter) {

    var index_value = 0
    var unity = ""
    if (estado_button_filter === "dias") {
      index_value = 3
      unity = "month"
    } else if (estado_button_filter === "semanas") {
      index_value = 12
      unity = "week"
    } else if (estado_button_filter === "meses") {
      index_value = 3
      unity = "month"
    }

    let inicio = 0
    let fim = 0
    let i = 0
    var filteredObjects = []
    for (let index = index_value; index >= 0; index--) {
      inicio = moment().startOf("day").subtract(index, unity)
      fim = moment().startOf("day").subtract(index - 1, unity)

      filteredObjects[i] = _.filter(opinions_by_cronology,
        // eslint-disable-next-line no-loop-func
        function(each) {
          return moment(each.data)
            .isBetween(inicio, fim)
        })
      i++
    }

    return filteredObjects

  }

  FormatToChart(opinions_by_cronology, estado_button_filter, interval) {

    let splited_obj = ""
    switch (interval) {
      case "hoje":
        splited_obj = this.SplitInDay(opinions_by_cronology, estado_button_filter)
        break
      case "ontem":
        splited_obj = this.SplitInYesterday(opinions_by_cronology, estado_button_filter)
        break
      case "7dias":
        splited_obj = this.SplitInWeek(opinions_by_cronology, estado_button_filter)
        break
      case "30dias":
        splited_obj = this.SplitIn30Days(opinions_by_cronology, estado_button_filter)
        break
      case "3meses":
        splited_obj = this.SplitIn3Mounths(opinions_by_cronology, estado_button_filter)
        break
      case "ano":
        splited_obj = this.SplitInYear(opinions_by_cronology, estado_button_filter)
        break
      default:
        console.log("DADASDASD")
    }

    const data = []
    let countpositive = []
    let countnegative = []

    for (let index = 0; index < splited_obj.length; index++) {
      countnegative[index] = 0
      countpositive[index] = 0
      splited_obj[index].forEach(element => {
        if (element.teor === "negative") {
          countnegative[index]++
        } else if (element.teor === "positive") {
          countpositive[index]++
        }
      })

    }
    let dia = 0
    for (let index = 0; index < splited_obj.length; index++) {
      dia = index + 1
      data.push({
        name: dia,
        uv: countnegative[index],
        pv: countpositive[index]
      })
    }

    return data
  }

  SplitInDaysFree(opinions_by_cronology, interval_fim, number_of_days) {
    let index_value = 0
    if (number_of_days > 0) {
      index_value = number_of_days
    }
    var unity = "day"
    let inicio = 0
    let fim = 0
    let i = 0
    var filteredObjects = []
    for (let index = index_value; index > -1; index--) {
      inicio = moment(interval_fim).subtract(index + 1, unity)
      fim = moment(interval_fim).subtract(index, unity)

      filteredObjects[i] = _.filter(opinions_by_cronology,
        // eslint-disable-next-line no-loop-func
        function(each) {
          return moment(each.data)
            .isBetween(inicio, fim)
        })
      i++
    }
    return filteredObjects
  }

  SplitInWeekFree(opinions_by_cronology, interval_fim, number_of_weeks) {
    let index_value = 0
    if (number_of_weeks > 0) {
      index_value = number_of_weeks
    }
    var unity = "week"
    let inicio = 0
    let fim = 0
    let i = 0
    var filteredObjects = []
    for (let index = index_value; index >= 0; index--) {
      inicio = moment(interval_fim).subtract(index + 1, unity)
      fim = moment(interval_fim).subtract(index, unity)

      filteredObjects[i] = _.filter(opinions_by_cronology,
        // eslint-disable-next-line no-loop-func
        function(each) {
          return moment(each.data)
            .isBetween(inicio, fim)
        })
      i++
    }
    return filteredObjects
  }

  SplitInMonthFree(opinions_by_cronology, interval_fim, number_of_months) {
    let index_value = 0
    if (number_of_months > 0) {
      index_value = number_of_months
    }
    var unity = "month"
    let inicio = 0
    let fim = 0
    let i = 0
    var filteredObjects = []
    for (let index = index_value; index >= 0; index--) {
      inicio = moment(interval_fim).subtract(index + 1, unity)
      fim = moment(interval_fim).subtract(index, unity)

      filteredObjects[i] = _.filter(opinions_by_cronology,
        // eslint-disable-next-line no-loop-func
        function(each) {
          return moment(each.data)
            .isBetween(inicio, fim)
        })
      i++
    }
    return filteredObjects
  }

  SplitInYearFree(opinions_by_cronology, interval_fim, number_of_months) {
    let index_value = 0
    if (number_of_months > 0) {
      index_value = number_of_months
    }
    var unity = "year"
    let inicio = 0
    let fim = 0
    let i = 0
    let filteredObjects = []
    for (let index = index_value; index >= 0; index--) {
      inicio = moment(interval_fim).subtract(index + 1, unity)
      fim = moment(interval_fim).subtract(index, unity)
      filteredObjects[i] = _.filter(opinions_by_cronology,
        // eslint-disable-next-line no-loop-func
        function(each) {
          return moment(each.data).isBetween(inicio, fim)
        })
      i++
    }
    return filteredObjects
  }

  FormatToChartFree(opinions_by_cronology, interval_init, interval_fim) {

    let splited_obj = ""
    const start = moment(interval_init)
    const end = moment(interval_fim)

    let number_of_days = Math.abs(this.round(moment.duration(start.diff(end)).asDays()))
    let number_of_weeks = Math.abs(this.round(moment.duration(start.diff(end)).asWeeks()))
    let number_of_months = Math.abs(this.round(moment.duration(start.diff(end)).asMonths()))
    let number_of_years = Math.abs(this.round(moment.duration(start.diff(end)).asYears()))

    if (number_of_days <= 30 && number_of_days > 0) {
      splited_obj = this.SplitInDaysFree(opinions_by_cronology, interval_fim, number_of_days)

    }

    if (number_of_days > 30) {

      splited_obj = this.SplitInWeekFree(opinions_by_cronology, interval_fim, number_of_weeks)

    }

    if (number_of_days > 90 && number_of_days < 1080) {

      splited_obj = this.SplitInMonthFree(opinions_by_cronology, interval_fim, number_of_months)

    }

    if (number_of_days >= 1080) {
      splited_obj = this.SplitInYearFree(opinions_by_cronology, interval_fim, number_of_years)
    }

    let data = []
    let countpositive = []
    let countnegative = []
    let data_opinion = []

    for (let index = 0; index < splited_obj.length; index++) {
      countnegative[index] = 0
      countpositive[index] = 0
      splited_obj[index].forEach(element => {
        if (element.teor === "negative") {
          countnegative[index]++
        } else if (element.teor === "positive") {
          countpositive[index]++
        }

        data_opinion[index] = element.data

      })

    }
    moment.locale("pt-br")
    let dia = 0
    for (let index = 0; index < splited_obj.length; index++) {
      if (number_of_days <= 30 && number_of_days > 0) {
        dia = moment(start).add(index, "day").format("DD MMM")
      } else if (number_of_days > 30 && number_of_days < 90) {
        dia = moment(start).add(index, "week").format("DD MMM")
      } else if (number_of_days > 90 && number_of_days < 1080) {
        dia = moment(start).add(index, "month").format("DD MMM")
      } else if (number_of_days >= 1080) {
        dia = moment(start).add(index, "year").format("DD MMM")
      } else {
        dia = ""
      }


      if (index === splited_obj.length - 1) {
        data.push({
          name: moment(end).format("DD MMM"),
          uv: countnegative[index],
          pv: countpositive[index]
        })
      } else {
        data.push({
          name: dia,
          uv: countnegative[index],
          pv: countpositive[index]
        })
      }

    }

    return data

  }

  FormatToChartFree_Comparacao(opinions_by_cronology, opinions_by_cronology_concorrente, interval_init, interval_fim) {

    console.log(opinions_by_cronology_concorrente)
    let splited_obj = ""
    let splited_obj2 = ""

    const start = moment(interval_init)
    const end = moment(interval_fim)

    let number_of_days = Math.abs(this.round(moment.duration(start.diff(end)).asDays()))
    let number_of_weeks = Math.abs(this.round(moment.duration(start.diff(end)).asWeeks()))
    let number_of_months = Math.abs(this.round(moment.duration(start.diff(end)).asMonths()))
    let number_of_years = Math.abs(this.round(moment.duration(start.diff(end)).asYears()))

    if (number_of_days <= 30 && number_of_days > 0) {
      splited_obj = this.SplitInDaysFree(opinions_by_cronology, interval_fim, number_of_days)
      splited_obj2 = this.SplitInDaysFree(opinions_by_cronology_concorrente, interval_fim, number_of_days)
    }

    if (number_of_days > 30) {
      splited_obj = this.SplitInWeekFree(opinions_by_cronology, interval_fim, number_of_weeks)
      splited_obj2 = this.SplitInWeekFree(opinions_by_cronology_concorrente, interval_fim, number_of_weeks)
    }

    if (number_of_days > 90 && number_of_days < 1080) {
      splited_obj = this.SplitInMonthFree(opinions_by_cronology, interval_fim, number_of_months)
      splited_obj2 = this.SplitInMonthFree(opinions_by_cronology_concorrente, interval_fim, number_of_months)
    }

    if (number_of_days >= 1080) {
      splited_obj = this.SplitInYearFree(opinions_by_cronology, interval_fim, number_of_years)
      splited_obj2 = this.SplitInYearFree(opinions_by_cronology_concorrente, interval_fim, number_of_years)

    }

    let data = []
    let data2 = []
    let countpositive_main = []
    let countpositive_concorrente = []
    let countnegative_main = []
    let countnegative_concorrente = []
    let data_opinion_main = []
    let data_opinion_concorrente = []

    for (let index = 0; index < splited_obj.length; index++) {
      countnegative_main[index] = 0
      countpositive_main[index] = 0
      splited_obj[index].forEach(element => {
        if (element.teor === "negative") {
          countnegative_main[index]++
        } else if (element.teor === "positive") {
          countpositive_main[index]++
        }
        data_opinion_main[index] = element.data
      })
    }

    for (let index = 0; index < splited_obj.length; index++) {
      countnegative_concorrente[index] = 0
      countpositive_concorrente[index] = 0
      splited_obj2[index].forEach(element => {
        if (element.teor === "negative") {
          countnegative_concorrente[index]++
        } else if (element.teor === "positive") {
          countpositive_concorrente[index]++
        }

        data_opinion_concorrente[index] = element.data

      })

    }

    moment.locale("pt-br")
    let dia = 0
    for (let index = 0; index < splited_obj.length; index++) {
      if (number_of_days <= 30 && number_of_days > 0) {
        dia = moment(start).add(index, "day").format("DD MMM")
      } else if (number_of_days > 30 && number_of_days < 90) {
        dia = moment(start).add(index, "week").format("DD MMM")
      } else if (number_of_days > 90 && number_of_days < 1080) {
        dia = moment(start).add(index, "month").format("DD MMM")
      } else if (number_of_days >= 1080) {
        dia = moment(start).add(index, "year").format("DD MMM")
      } else {
        dia = ""
      }

      if (index === splited_obj.length - 1) {
        data.push({
          name: moment(end).format("DD MMM"),
          uv: countnegative_main[index],
          pv: countnegative_concorrente[index]
        })
      } else {
        data.push({
          name: dia,
          uv: countnegative_main[index],
          pv: countnegative_concorrente[index]
        })
      }

      if (index === splited_obj2.length - 1) {
        data2.push({
          name: moment(end).format("DD MMM"),
          uv: countpositive_main[index],
          pv: countpositive_concorrente[index]
        })
      } else {
        data2.push({
          name: dia,
          uv: countpositive_main[index],
          pv: countpositive_concorrente[index]
        })
      }

    }

    return [data, data2]

  }

}


