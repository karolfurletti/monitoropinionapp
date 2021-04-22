import React from "react"
import "./index.css"
import MakeInfonografico from "../../../components/MakeInfonografico"
import LoadingComponent from "../../../components/LoadingComponent"
import { useSelector } from "react-redux"

const Index = () => {

  const { generalModel } = useSelector((state) => state)

  return (
    <div>
      <LoadingComponent />
      <MakeInfonografico list={generalModel.list} />
    </div>
  )
}

export default Index
