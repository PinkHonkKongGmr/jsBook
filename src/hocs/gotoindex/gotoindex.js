import React from 'react';
import { Link } from 'react-router-dom';
import goToIndexStore from '../../store/gotoindex';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import './gotoindex.css';

const store = observable(goToIndexStore);

const GoToindex = observer(() => {
    let status = store.status;
    return (
        <div className={`go_to_index_wrapper ${status}`}>
            <Link className="go_to_index" to="/">
                <div className="go_home">Go home!</div>
            </Link>
        </div>
    );
});
export default GoToindex;
