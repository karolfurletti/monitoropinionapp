import moment from "moment"
import { TYPE_PLATFORM } from "../utils/const"

moment.locale("pt-br")

// const week = moment().subtract("weeks", 30).format("YYYY-MM-DD")
// const today = moment().format("YYYY-MM-DD")

export const countComments = (list, platform, type = null) => {
  const newList = list.filter(el =>
    (platform !== TYPE_PLATFORM.GERAL ? el.plataforma === platform : true)
    && (type ? el.teor === type : true)).length
  return newList
}

const filterCommentsForDate = (list, date, type) => {
  return list.filter(el => el.data === date && el.teor === type).length
}

export const listGraph = (list) => {

  let newList = []
  for (let i = 0; i < list.length; i++) {

    const month = moment(list[i].data).format("MMM")
    const day = moment(list[i].data).format("DD")

    newList.push({
      name: day + "." + month,
      uv: filterCommentsForDate(list, list[i].data, "negative"),
      pv: filterCommentsForDate(list, list[i].data, "positive")
    })
  }
  return newList
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

  const sociaNetworks = list.filter(el => el.plataforma === TYPE_PLATFORM.FACEBOOK
    || el.plataforma === TYPE_PLATFORM.INSTRAGRAM
    || el.plataforma === TYPE_PLATFORM.TWITTER).length

  const web = list.filter(el => el.plataforma === TYPE_PLATFORM.WEB).length

  const specializedWebsites = list.filter(el => el.plataforma === TYPE_PLATFORM.GOOGLE
    || el.plataforma === TYPE_PLATFORM.YELP
    || el.plataforma === TYPE_PLATFORM.TRIPADVISOR).length

  return {
    sociaNetworks,
    web,
    specializedWebsites
  }

}

export const showComments = (list, platform, type, order) => {

  const newList = list.filter(el => (platform !== TYPE_PLATFORM.GERAL ? el.plataforma === platform : true)
    && (type ? el.teor === type : true))
  const listOrder = order === "ASC" ? newList.sort((a, b) => a.data - b.data) : newList.sort((a, b) => (a.data > b.data ? -1 : 1))
  return listOrder.slice(0, 4)
}

export const filterFeature = (list, feature) => {
  const array = []
  for (let i = 0; i < list.length; i++) {
    for (let key in list[i].opinions) {
      if (list[i].opinions[key].category === feature) {
        array.push(list[i])
      }
    }
  }
  return array
}

export const countPlatform = (list) => {

  const countFacebookPositive = countComments(list, TYPE_PLATFORM.FACEBOOK, "positive")
  const countFacebookNegative = countComments(list, TYPE_PLATFORM.FACEBOOK, "negative")

  const countWebPositive = countComments(list, TYPE_PLATFORM.WEB, "positive")
  const countWebNegative = countComments(list, TYPE_PLATFORM.WEB, "negative")

  const countYelpPositive = countComments(list, TYPE_PLATFORM.YELP, "positive")
  const countYelpNegative = countComments(list, TYPE_PLATFORM.YELP, "negative")

  const countGooglePositive = countComments(list, TYPE_PLATFORM.GOOGLE, "positive")
  const countGoogleNegative = countComments(list, TYPE_PLATFORM.GOOGLE, "negative")

  const countTripadvisorPositive = countComments(list, TYPE_PLATFORM.TRIPADVISOR, "positive")
  const countTripadvisorNegative = countComments(list, TYPE_PLATFORM.TRIPADVISOR, "negative")

  const countInstagramPositive = countComments(list, TYPE_PLATFORM.INSTRAGRAM, "positive")
  const countInstagramNegative = countComments(list, TYPE_PLATFORM.INSTRAGRAM, "negative")

  const countTwitterPositive = countComments(list, TYPE_PLATFORM.TWITTER, "positive")
  const countTwitterNegative = countComments(list, TYPE_PLATFORM.TWITTER, "negative")

  const dados = [
    {
      plataform: TYPE_PLATFORM.FACEBOOK,
      total: countFacebookPositive + countFacebookNegative,
      positive: countFacebookPositive,
      negative: countFacebookNegative
    },
    {
      plataform: TYPE_PLATFORM.GOOGLE,
      total: countGooglePositive + countGoogleNegative,
      positive: countGooglePositive,
      negative: countGoogleNegative
    },
    {
      plataform: TYPE_PLATFORM.INSTRAGRAM,
      total: countInstagramPositive + countInstagramNegative,
      positive: countInstagramPositive,
      negative: countInstagramNegative
    },
    {
      plataform: TYPE_PLATFORM.TRIPADVISOR,
      total: countTripadvisorPositive + countTripadvisorNegative,
      positive: countTripadvisorPositive,
      negative: countTripadvisorNegative
    },
    {
      plataform: TYPE_PLATFORM.TWITTER,
      total: countTwitterPositive + countTwitterNegative,
      positive: countTwitterPositive,
      negative: countTwitterNegative
    },
    {
      plataform: TYPE_PLATFORM.WEB,
      total: countWebPositive + countWebNegative,
      positive: countWebPositive,
      negative: countWebNegative
    },

    {
      plataform: TYPE_PLATFORM.YELP,
      total: countYelpPositive + countYelpNegative,
      positive: countYelpPositive,
      negative: countYelpNegative
    }
  ]
  return dados
}

export const countCategoryOpinion = (list, feature, type) => {
  let count = 0
  for (let i = 0; i < list.length; i++) {
    for (let key in list[i].opinions) {
      const item = list[i].opinions[key]
      if (item.category === feature && item.teor === type) {
        count++
      }
    }
  }
  return count
}
