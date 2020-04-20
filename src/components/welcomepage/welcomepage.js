import React from 'react';

class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>{this.props.data}</div>;
    }
}

export default WelcomePage;
