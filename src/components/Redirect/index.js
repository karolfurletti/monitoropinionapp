import React from 'react';
import {Link, useHistory} from 'react-router-dom'



export default function Redirect(url) {
 let history = useHistory()

    history.push(url)

}