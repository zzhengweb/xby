import React, { Component } from 'react';
import Header from './common/header';
import Banner from './pages/home/components/Banner';
import Footer from './common/footer';
import Home from './pages/home';
import Flow from './pages/flow';
import Evaluation from './pages/evaluation';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
import {GlobalStyle} from './static/iconfont/iconfont';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <GlobalStyle />
          <BrowserRouter>
            <div>
              <Route path="/" component={Header} />
              <Route path="/" component={Banner } />
              <Route exact path="/" component={Home} />
              <Route exact path="/flow" component={Flow} />
              <Route exact path="/evaluation" component={Evaluation} />
              <Route path="/" component={Footer} />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
