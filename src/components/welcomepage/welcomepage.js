import React from 'react';
import SearchOnSite from '../searchonsite';

class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('mount');
    }

    componentWillUnmount() {
        console.log('unmount');
    }
    render() {
        return <SearchOnSite />;
    }
}

export default WelcomePage;
