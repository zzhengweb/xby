<<<<<<< HEAD
import React, { Component } from 'react';
import Header from './common/header';
import Home from './pages/home';
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
              <Route exact path="/" component={Home} />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
||||||| merged common ancestors
=======
import React, { Component } from 'react';
import Header from './common/header';
import Home from './pages/home';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
import {GlobalStyle} from './style';
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
              <Route exact path="/" component={Home} />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
>>>>>>> origin/master
