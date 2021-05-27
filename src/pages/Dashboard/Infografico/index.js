import React from "react"
import "./index.css"
import MakeInfonografico from "../../../components/MakeInfonografico"
import LoadingComponent from "../../../components/LoadingComponent"
import { useSelector } from "react-redux"

const Index = () => {

  const {
    generalModel,
    loginModel
  } = useSelector((state) => state)
  const {
    nomeRestaurante,
    logomarca
  } = loginModel.user

  return (
    <div>
      <LoadingComponent />
      <MakeInfonografico logomarca={logomarca} name={nomeRestaurante} list={generalModel.list} />
    </div>
  )
}

export default Index
