import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import WelcomePage from './components/welcomepage';
import Header from './components/header';
import GoToindex from './hocs/gotoindex';
import OOP from './units/paradigmas/oop';
import Functional from './units/paradigmas/functional';
import Solid from './units/principles/solid';
import Kiss from './units/principles/kiss';
import Yagni from './units/principles/yagni';
import Dry from './units/principles/dry';
import DataStructures from './units/data/datastructures';
import Dsj from './units/data/datastructurejs';
import JsInheritance from './units/javascript/inheritance';
import JsContext from './units/javascript/context';
import DebAndThrott from './units/javascript/debAndThrott';
import Comments from './units/javascript/comments';
import Ustrict from './units/javascript/usrict/ustrict';
import LoadingPage from './units/frontend/requests/loadingpage';
import Requests from './units/frontend/requests/req';
import Rest from './units/frontend/rest';
import ReactRedux from './units/frontend/reactRedux';
import Bem from './units/layout/bem';
import Adaptive from './units/layout/adaptive';
import JsNotes from './notes/jsnotes';
import ReactNotes from './notes/reactnotes';
import Other from './notes/other';
import VideobaseJs from './units/videobase/js';
import ReactReduxRoute from './units/frontend/reactRedux/reactReduxRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="mx-3">
                <GoToindex />
                <Header />
                <Route path="/" component={WelcomePage} exact />
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
                <Route path="/jscontext" render={() => <JsContext />} />
                <Route path="/req" render={() => <Requests />} />
                <Route path="/debandthrott" render={() => <DebAndThrott />} />
                <Route path="/comments" render={() => <Comments />} />
                <Route path="/ustrict" render={() => <Ustrict />} />
                <Route path="/datastructurejs" render={() => <Dsj />} />
                <Route path="/rest" render={() => <Rest />} />
                <Route path="/react-redux" render={() => <ReactRedux />} />
                <Route path="/bem" render={() => <Bem />} />
                <ReactReduxRoute />
            </div>
        </Router>
    );
}

export default App;
