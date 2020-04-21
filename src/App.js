import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import SearchOnSite from './components/searchonsite';
import Header from './components/header';
import OOP from './units/paradigmas/oop';
import Functional from './units/paradigmas/functional';
import Solid from './units/principles/solid';
import Kiss from './units/principles/kiss';
import Yagni from './units/principles/yagni';
import Dry from './units/principles/dry';
import DataStructures from './units/data/datastructures';
import Adaptive from './units/layout/adaptive';
import JsNotes from './notes/jsnotes';
import ReactNotes from './notes/reactnotes';
import Other from './notes/other';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <Router>
            <Switch>
                <div className="mx-3">
                    <Header />
                    <Route path="/" component={SearchOnSite} exact />
                    <Route path="/oop" render={() => <OOP />} />
                    <Route path="/func" render={() => <Functional />} />
                    <Route path="/solid" render={() => <Solid />} />
                    <Route path="/kiss" render={() => <Kiss />} />
                    <Route path="/yagni" render={() => <Yagni />} />
                    <Route path="/dry" render={() => <Dry />} />
                    <Route path="/datastructures" render={() => <DataStructures />} />
                    <Route path="/adaptive" render={() => <Adaptive />} />
                    <Route path="/jsnotes" render={() => <JsNotes />} />
                    <Route path="/reactnotes" render={() => <ReactNotes />} />
                    <Route path="/other" render={() => <Other />} />
                </div>
            </Switch>
        </Router>
    );
}

export default App;
