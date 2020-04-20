import React from 'react';
import './scrollto.css';

class Scrollto extends React.Component {
    constructor(props) {
        super(props);
    }

    scrollto = () => {
        window.scrollTo({ top: this.props.top, left: this.props.left, behavior: 'smooth' });
    };

    render() {
        return (
            <span className="scroller" onClick={this.scrollto}>
                {this.props.text}
            </span>
        );
    }
}

export default Scrollto;
