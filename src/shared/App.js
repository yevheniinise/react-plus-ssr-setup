import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Home from './pages/Home';
import About from './pages/About';

import './fonts/fonts.css';
import './App.css';

const App = () => (
  <div>
    <Helmet>
      <title>React Plus SSR Setup</title>
    </Helmet>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </div>
);

export default App;
