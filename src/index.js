import React from 'react';
import ReactDOM from 'react-dom'
import App from "./App"
import { BrowserRouter as Router, Route, Switch }from "react-router-dom";
import store from './components/store'
import { Provider } from 'react-redux'
import Post from "./components/pages/Post"
import ErrorPage from "./components/pages/ErrorPage"

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/post/:id" render={({match}) => {
            const {id} = match.params
            return <Post id={id} />
          }}/>
          <Route path="*" component={ErrorPage}/>
        </Switch>
      </Router>
    </Provider>,
  document.getElementById('root')
);
