import React, { Component } from 'react';
import Header from './common/header';
import Banner from './common/Banner';
import Footer from './common/footer';
import Home from './pages/home';
import Flow from './pages/flow';
import Evaluation from './pages/evaluation';
import Introduction from './pages/introduction';
import Detail from './pages/detail';
import './App.css';
import { HashRouter,Route } from 'react-router-dom';
import { GlobalStyle } from './static/iconfont/iconfont';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <GlobalStyle />
          <HashRouter>
            <div>
              <Route path="/" component={Header} />
              <Route path="/" component={Banner} />
              <Route exact path="/" component={Home} />
              <Route path="/flow" component={Flow} />
              <Route path="/evaluation" component={Evaluation} />
              <Route path="/introduction" component={Introduction} />
              <Route path="/Detail/:id" component={Detail} />
              <Route path="/" component={Footer} />
            </div>
          </HashRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
