import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ReactPatterns from './reactPatterns';
import ReactPrinciples from './reactPrinciples';
import ReduxPure from './reduxPure';
import HooksAndLs from './hooksAndLs';

const ReactReduxRoutes = () => (
    <Fragment>
        <Route path="/react_patterns" render={() => <ReactPatterns />} />
        <Route path="/reactprinciples" render={() => <ReactPrinciples />} />
        <Route path="/reduxpure" render={() => <ReduxPure />} />
        <Route path="/reacthooksandlifecycle" render={() => <HooksAndLs />} />
    </Fragment>
);
export default ReactReduxRoutes;
