import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ListPage from './routes/ListPage';
import ComparePage from './routes/ComparePage'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/list" component={ListPage} />
        <Route path="/compare" component={ComparePage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
