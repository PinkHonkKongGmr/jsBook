import React from 'react';
import { Link } from 'react-router-dom';

class Unit extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            toShowlist: false,
        };
    }

    slide = () => {
        let condtition = this.state.toShowlist ? false : true;
        this.setState({ toShowlist: condtition });
    };

    render() {
        let listClass = this.state.toShowlist ? 'hasHeight' : 'hide';
        let lists = this.props.topics.map((topic, ind) => (
            <li className={listClass} key={ind}>
                <div className="hovermarker"></div>
                <Link to={topic.href}>{topic.text}</Link>
            </li>
        ));
        return (
            <div>
                <div className="nav" onClick={this.slide} className="clickable__title">
                    <div className="ball"></div>
                    {this.props.title}
                </div>
                {lists}
            </div>
        );
    }
}

export default Unit;
