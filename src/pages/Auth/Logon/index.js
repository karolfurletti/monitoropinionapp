import React, { useState } from 'react'
import './index.css'
import api from '../../../Services/api'
import { Link, useHistory } from 'react-router-dom'
import FiLogIn from '@material-ui/icons/Twitter'
const logoImg = require('../../../Assets/logo.png')
const MonitorOpinionImg = require('../../../Assets/logo.png')

export default function Logon() {
  const history = useHistory()
  const [id, setID] = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    try {
      const response = await api.post('sessions_provisoria', { id })
      console.log(response.data.name)
      localStorage.setItem('ongID', response.data.estabelecimento_id)
      history.push('profile')
    } catch (err) {
      alert('falha login')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="MonitorOpinion" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setID(e.target.value)}
          />
          <button type="submit" className="button">
            Entrar
          </button>
          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={MonitorOpinionImg} alt="Heroes" />
    </div>
  )
}
