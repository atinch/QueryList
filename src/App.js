import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';

import AddQuery from './components/AddQuery/AddQuery';
import QueryList from './components/QueryList/QueryList';

const App = () => (
  <Provider store={store}> 
    <div className="main">
    <header className="App-header">
    <h1>Query List App</h1>
          <Router>
            <Route exact path="/" component={QueryList} />
            <Route exact path="/queries" component={QueryList} />
            <Route exact path="/queries/new" component={AddQuery} />
          </Router>
        </header>
    </div>
  </Provider>
);

export default App;





