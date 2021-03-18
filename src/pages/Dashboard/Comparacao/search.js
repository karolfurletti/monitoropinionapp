import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import SearchComponent from './searchcomponent'



export default function Search() {
    let history = useHistory()
 return(
    <SearchComponent history={history}></SearchComponent>
 )

}