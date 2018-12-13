import React from 'react';
import Garden from './components/Garden/Garden';
import PlantDetails from './components/PlantDetails/PlantDetails';
import { HashRouter as Router, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <h1>My Garden App</h1>
      <Route path="/" exact component={Garden} />
      <Route path="/:id" component={PlantDetails} />
    </div>
  </Router>
);

export default App;
