import ReactDOM from "react-dom"
import React from "react"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import { CookiesProvider } from "react-cookie"
import { PersistGate } from "redux-persist/es/integration/react";
import store, { persistor } from './models/configStore';
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
)
