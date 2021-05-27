import moment from "moment"
import { TYPE_PLATFORM } from "../utils/const"
import "moment/locale/pt-br"

export const countComments = (list, platform, type = null) => {
  const newList = list.filter(el =>
    (platform !== TYPE_PLATFORM.GERAL ? el.IDFonte === platform : true)
    && (type ? el.polaridade === type : true)).length
  return newList
}

const filterCommentsForDate = (list, type) => {
  return list.filter(el => el.polaridade === type).length
}

export const listGraph = (list) => {

  let groups = list.reduce(function(r, o) {
    const m = o.dataPublicacao.split(("-"))[1];
    (r[m]) ? r[m].data.push(o) : r[m] = {
      name: moment(o.dataPublicacao).format("MMM") + '/' + moment(o.dataPublicacao).format("YY"),
      data: [o],
      dateShow:o.dataPublicacao
    }
    return r
  }, {})


  const orderList = Object.values(groups).sort(function(a, b) {
    const c = new Date(a.dateShow);
    const d = new Date(b.dateShow);
    return c-d;
  });


  let listfinal = []
  Object.keys(orderList)
    .sort()
    .forEach(function(v, i) {
      listfinal.push({
        name: orderList[v].name,
        uv: filterCommentsForDate(orderList[v].data, "negativo"),
        pv: filterCommentsForDate(orderList[v].data, "positivo")
      })
    })

  // let newList = []
  // for (let i = 0; i < list.length; i++) {
  //
  //   const month = moment(list[i].dataPublicacao).format("MMM")
  //   const day = moment(list[i].dataPublicacao).format("DD")
  //
  //   newList.push({
  //     // name: day + "." + month,
  //     name: month.toUpperCase(),
  //     uv: filterCommentsForDate(list, list[i].dataPublicacao, "negativo"),
  //     pv: filterCommentsForDate(list, list[i].dataPublicacao, "positivo")
  //   })
  // }

  return listfinal
}

export const countPercentage = (list, platform, type) => {
  const total = list.length
  const totalType = countComments(list, platform, type)
  return (totalType / total * 100).toFixed(2)
}

export const countPercentageGraph = (list, platform, type) => {
  const total = list.length
  const totalType = countComments(list, platform, type)

  const result = (parseFloat(totalType) / parseFloat(total))
  let newValue = 0
  if (result < 1) {
    newValue = (1 - result) * 100
  } else {
    newValue = parseInt(result * 100)
  }
  return Math.round(newValue)
}

export const countMediaCommunication = (list) => {

  const sociaNetworks = list.filter(el => el.IDFonte === TYPE_PLATFORM.FACEBOOK
    || el.IDFonte === TYPE_PLATFORM.INSTRAGRAM
    || el.IDFonte === TYPE_PLATFORM.TWITTER).length

  const web = list.filter(el => el.IDFonte === TYPE_PLATFORM.WEB).length

  const specializedWebsites = list.filter(el => el.IDFonte === TYPE_PLATFORM.GOOGLE
    || el.IDFonte === TYPE_PLATFORM.YELP
    || el.IDFonte === TYPE_PLATFORM.TRIPADVISOR).length

  return {
    sociaNetworks,
    web,
    specializedWebsites
  }

}

export const showComments = (list, platform, type, order) => {
  const newList = list.filter(el => (platform !== TYPE_PLATFORM.GERAL ? el.IDFonte === platform : true)
    && (type ? el.polaridade === type : true))
  const listOrder = order === "ASC" ? newList.sort((a, b) => a.dataPublicacao - b.dataPublicacao) : newList.sort((a, b) => (a.dataPublicacao > b.dataPublicacao ? -1 : 1))
  return listOrder.slice(0, 4)
}

export const filterFeature = (list, feature) => {
  return list.filter(el => el.nomeCategoria === feature)
}

export const countPlatform = (list) => {

  const countFacebookPositive = countComments(list, TYPE_PLATFORM.FACEBOOK, "positivo")
  const countFacebookNegative = countComments(list, TYPE_PLATFORM.FACEBOOK, "negativo")

  const countWebPositive = countComments(list, TYPE_PLATFORM.WEB, "positivo")
  const countWebNegative = countComments(list, TYPE_PLATFORM.WEB, "negativo")

  const countYelpPositive = countComments(list, TYPE_PLATFORM.YELP, "positivo")
  const countYelpNegative = countComments(list, TYPE_PLATFORM.YELP, "negativo")

  const countGooglePositive = countComments(list, TYPE_PLATFORM.GOOGLE, "positivo")
  const countGoogleNegative = countComments(list, TYPE_PLATFORM.GOOGLE, "negativo")

  const countTripadvisorPositive = countComments(list, TYPE_PLATFORM.TRIPADVISOR, "positivo")
  const countTripadvisorNegative = countComments(list, TYPE_PLATFORM.TRIPADVISOR, "negativo")

  const countInstagramPositive = countComments(list, TYPE_PLATFORM.INSTRAGRAM, "positivo")
  const countInstagramNegative = countComments(list, TYPE_PLATFORM.INSTRAGRAM, "negativo")

  const countTwitterPositive = countComments(list, TYPE_PLATFORM.TWITTER, "positivo")
  const countTwitterNegative = countComments(list, TYPE_PLATFORM.TWITTER, "negativo")

  const dados = [
    {
      plataform: "Facebook",
      total: countFacebookPositive + countFacebookNegative,
      positive: countFacebookPositive,
      negative: countFacebookNegative
    },
    {
      plataform: "Google Reviews",
      total: countGooglePositive + countGoogleNegative,
      positive: countGooglePositive,
      negative: countGoogleNegative
    },
    {
      plataform: "Instagram",
      total: countInstagramPositive + countInstagramNegative,
      positive: countInstagramPositive,
      negative: countInstagramNegative
    },
    {
      plataform: "Tripadvisor",
      total: countTripadvisorPositive + countTripadvisorNegative,
      positive: countTripadvisorPositive,
      negative: countTripadvisorNegative
    },
    {
      plataform: "Twitter",
      total: countTwitterPositive + countTwitterNegative,
      positive: countTwitterPositive,
      negative: countTwitterNegative
    },
    {
      plataform: "Web",
      total: countWebPositive + countWebNegative,
      positive: countWebPositive,
      negative: countWebNegative
    },

    {
      plataform: "Yelp",
      total: countYelpPositive + countYelpNegative,
      positive: countYelpPositive,
      negative: countYelpNegative
    }
  ]
  return dados
}

export const countCategoryOpinion = (list, feature, type) => {
  return list.filter(el => el.nomeCategoria === feature && el.polaridade === type).length
}

export const groupComments = (list) => {
  return list.filter((v, i, a) => a.findIndex(t => (t.IDComentario === v.IDComentario)) === i)
}

export const countPerfil = (list, id, name, slice) => {

  // IDTipoFonteFK
  // nomeFonte

  // IDUsuarioFK
  // nome

  let newList = []
  for (let i = 0; i < list.length; i++) {
    newList.push({
      name: list[i][name],
      negative: list.filter(el => el[id] === list[i][id] && el.polaridade === "negativo").length,
      positive: list.filter(el => el[id] === list[i][id] && el.polaridade === "positivo").length,
      total: list.filter(el => el[id] === list[i][id]).length
    })
  }

  const listOrder = Object.values(newList).sort((a, b) => {
    if (a.total > b.total) return -1
    return a.total > b.total ? 1 : 0
  })

  const listGroup = listOrder.filter((v, i, a) => a.findIndex(t => (t.name === v.name)) === i)
  return slice ? listGroup.slice(0, 10) : listGroup
}

