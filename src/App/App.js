import React from 'react';
import AppClass from './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import AllHeroes from '../AllHeroes/AllHeroes';
import NavigationBar from '../NavigationBar/NavigationBar';

export default function App() {
  return (
    <BrowserRouter>
      <div className={AppClass.container}>
        <NavigationBar />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/heroes" component={AllHeroes} />
      </div>
    </BrowserRouter>
  );
}
