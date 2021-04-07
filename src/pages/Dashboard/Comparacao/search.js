import React from 'react'
import { useHistory } from 'react-router-dom'
import SearchComponent from './searchcomponent'

export default function Search() {
  const history = useHistory()
  return <SearchComponent history={history} />
}
