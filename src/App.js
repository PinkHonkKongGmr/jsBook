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
import JsInheritance from './units/javascript/inheritance';
import DebAndThrott from './units/javascript/debAndThrott';
import LoadingPage from './units/frontend/requests/loadingpage';
import Requests from './units/frontend/requests/req';
import Adaptive from './units/layout/adaptive';
import JsNotes from './notes/jsnotes';
import ReactNotes from './notes/reactnotes';
import Other from './notes/other';
import VideobaseJs from './units/videobase/js';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <Router>
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
                <Route path="/videobasejs" render={() => <VideobaseJs />} />
                <Route path="/loadingpage" render={() => <LoadingPage />} />
                <Route path="/jsinheritance" render={() => <JsInheritance />} />
                <Route path="/req" render={() => <Requests />} />
                <Route path="/debandthrott" render={() => <DebAndThrott />} />
            </div>
        </Router>
    );
}

export default App;
