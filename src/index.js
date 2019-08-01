import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import './index.less'
const rootEl = document.getElementById("root");
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
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Suspense>
    </AppContainer>
    ,
    rootEl
  )
}
