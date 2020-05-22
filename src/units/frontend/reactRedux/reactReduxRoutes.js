import React from 'react';
import { Route } from 'react-router-dom';
import ReactPatterns from './reactPatterns';
import ReactPrinciples from './reactPrinciples';
import ReduxPure from './reduxPure';

const reactReduxRoutes = [
    <Route path="/react_patterns" render={() => <ReactPatterns />} />,
    <Route path="/reactprinciples" render={() => <ReactPrinciples />} />,
    <Route path="/reduxpure" render={() => <ReduxPure />} />,
];

export default reactReduxRoutes;
