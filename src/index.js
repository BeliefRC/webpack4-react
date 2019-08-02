import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { HashRouter } from 'react-router-dom'
import Router from './router'
import './index.less'

const rootEl = document.getElementById('root')
renderWithHotReload(Router)
if (module.hot) {
  module.hot.accept('./router/index.js', () => {
    const Router = require('./router/index.js').default
    renderWithHotReload(Router)
  })
}

function renderWithHotReload (Router) {
  ReactDOM.render(
    <AppContainer>
      <Suspense fallback={null}>
        <HashRouter>
          <Router />
        </HashRouter>
      </Suspense>
    </AppContainer>
    ,
    rootEl
  )
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('service-worker registed')
      })
      .catch(error => {
        console.log('service-worker registed error')
      })
  })
}
