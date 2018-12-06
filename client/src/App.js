import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import { Provider} from "react-redux"
import store from "./store"
import CitiesSearch from './components/layout/CitiesSearch';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import "./styles/styles.scss";
import Navbar from './components/layout/Navbar';
import BooksSearch from './components/layout/BooksSearch';
import Landing from './components/layout/Landing';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <BrowserRouter>
          <div >
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/cities" component={CitiesSearch} />
            <Route exact path="/books" component={BooksSearch} />
          </Switch>
          </div>
       </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
