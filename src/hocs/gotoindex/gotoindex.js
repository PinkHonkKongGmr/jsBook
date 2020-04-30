import React from 'react';
import { Link } from 'react-router-dom';
import './gotoindex.css';

const GoToindex = () => {
    let status = 'on';
    return (
        <div className={`go_to_index_wrapper ${status}`}>
            <Link className="go_to_index" to="/"></Link>
        </div>
    );
};
export default GoToindex;
