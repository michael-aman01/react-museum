import React from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import GalleryView from './components/GalleryView';

export default function App(){
  return (
     
   <Router>
      <Route path="/galleries/:id" component={GalleryView} />
  </Router>
  )

}



