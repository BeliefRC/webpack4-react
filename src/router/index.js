import React ,{lazy}from "react";
import { Route, Link, Switch } from "react-router-dom";

// import Home from '../pages/Home'
// import Count from '../pages/Count'
// import User from '../pages/User'
const Home=lazy(() => import(/* webpackChunkName: 'Home' */'../pages/Home'))
const Count=lazy(() => import(/* webpackChunkName: 'Count' */'../pages/Count'))
const User=lazy(() => import(/* webpackChunkName: 'User' */'../pages/User'))
const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      <Link to="/">toHome6</Link>&emsp;|&emsp;
      <Link to="/count">toCount</Link>
    </header>
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/count" exact component={Count} />
        <Route path="/user" exact component={User} />
      </Switch>
    </main>
  </div>
);

export default PrimaryLayout;
