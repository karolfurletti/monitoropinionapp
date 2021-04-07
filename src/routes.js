import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'
import Inicio from './pages/Dashboard/Inicio'
import Fontes from './pages/Dashboard/Fontes'
import Analise from './pages/Dashboard/Analise'
import Comparacao from './pages/Dashboard/Comparacao'
import Search from './pages/Dashboard/Comparacao/search'
import Comentarios from './pages/Dashboard/Comentarios'
import Infografico from './pages/Dashboard/Infografico'
import MinhaConta from './pages/Dashboard/MinhaConta'
import DadosPessoais from './pages/Dashboard/DadosPessoais'
import Logon from './pages/Auth/Logon'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/dashboard" exact component={Inicio} />
        <Route path="/dashboard/inicio" component={Inicio} />
        <Route path="/dashboard/analise" component={Analise} />
        <Route path="/dashboard/comentarios" component={Comentarios} />
        <Route path="/dashboard/relatorio" component={Inicio} />
        <Route path="/dashboard/infografico" component={Infografico} />
        <Route path="/dashboard/fontes" component={Fontes} />
        <Route path="/dashboard/comparacao/" component={Search} />
        <Route path="/dashboard/compare" component={Comparacao} />
        <Route path="/dashboard/minhaconta" component={MinhaConta} />
        <Route path="/dashboard/dadospessoais" component={DadosPessoais} />
      </Switch>
    </BrowserRouter>
  )
}
