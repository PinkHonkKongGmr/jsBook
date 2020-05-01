import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import goToIndexStore from '../../store/gotoindex';
import './gotoindex.css';
import { observable } from 'mobx';
const store = observable(goToIndexStore);

const GoToindex = observer(() => {
    let status = store.status;
    return (
        <div className={`go_to_index_wrapper ${status}`}>
            <Link className="go_to_index" to="/"></Link>
        </div>
    );
});
export default GoToindex;
