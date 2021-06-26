import { BrowserRouter, Switch, Route } from "react-router-dom"
import React from "react"
import Inicio from "./pages/Dashboard/Inicio"
import Fontes from "./pages/Dashboard/Fontes"
import Analise from "./pages/Dashboard/Analise"
import Comparacao from "./pages/Dashboard/Comparacao"
import Search from "./pages/Dashboard/Comparacao/search"
import Comentarios from "./pages/Dashboard/Comentarios"
import Infografico from "./pages/Dashboard/Infografico"
import MinhaConta from "./pages/Dashboard/MinhaConta"
import DadosPessoais from "./pages/Dashboard/DadosPessoais"
import Login from "./pages/Auth/Login/Login"
import Register from "./pages/Auth/Register/Register"
import Relatorio from './pages/Dashboard/Relatorio/index'
import RelatorioPrint from './pages/Dashboard/Relatorio/print'
import { useCookies } from "react-cookie"

export default function Routes() {

  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(["email"])
  const isLogged = cookies.email

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={isLogged ? Inicio : Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard/inicio" component={isLogged ? Inicio : Login} />
        <Route path="/dashboard/analise" component={isLogged ? Analise : Login} />
        <Route path="/dashboard/comentarios" component={isLogged ? Comentarios : Login} />
        <Route path="/dashboard/relatorio" component={isLogged ? Relatorio : Login} />
        <Route path="/dashboard/infografico" component={isLogged ? Infografico : Login} />
        <Route path="/dashboard/fontes" component={isLogged ? Fontes : Login} />
        <Route path="/dashboard/comparacao/" component={isLogged ? Search : Login} />
        <Route path="/dashboard/compare" component={isLogged ? Comparacao : Login} />
        <Route path="/dashboard/minhaconta" component={isLogged ? MinhaConta : Login} />
        <Route path="/dashboard/dadospessoais" component={isLogged ? DadosPessoais : Login} />
        <Route path="/dashboard/relatorioPrint" component={isLogged ? RelatorioPrint : Login} />
      </Switch>
    </BrowserRouter>
  )
}
