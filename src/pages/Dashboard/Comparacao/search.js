import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import SearchComponent from "./searchcomponent"
import { serviceApi } from "../../../Services/api"
import { useDispatch, useSelector } from "react-redux"

export default function Search() {

  // eslint-disable-next-line
  const [loading, setLoading] = useState(false)
  const { loginModel } = useSelector((state) => state)
  const [list, setList] = useState()
  const idRestaurante = loginModel.user.id_restaurante
  const dispatch = useDispatch()

  useEffect(() => {
    listComparation()
    // eslint-disable-next-line
  }, [])

  const listComparation = () => {
    setLoading(true)
    const options = { params: { idRestaurante } }
    serviceApi.get("/listComparation", options).then(response => {
      const { list } = response.data
      setList(list)
      setLoading(false)
      dispatch.generalModel.setListComparation(list)
    }).catch(err => {
      console.log(err)
    })
  }

  const history = useHistory()
  return <SearchComponent list={list} history={history} />
}
