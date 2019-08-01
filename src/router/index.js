import React ,{lazy}from "react";
import { Route, Link, Switch } from "react-router-dom";

import Home from '../pages/Home'
import Count from '../pages/Count'
// const Home=lazy(() => import('../pages/Home'))
// const Count=lazy(() => import(/* webpackChunkName: 'Count' */'../pages/Count'))
const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      <Link to="/">toHome6</Link>&emsp;|&emsp;
      <Link to="/count">toCount1234</Link>
    </header>
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/count" exact component={Count} />
      </Switch>
    </main>
  </div>
);

export default PrimaryLayout;
