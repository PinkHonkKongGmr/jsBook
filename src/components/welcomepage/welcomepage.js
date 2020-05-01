import React from 'react';
import SearchOnSite from '../searchonsite';
import { observer } from 'mobx-react';
import goToIndexStore from '../../store/gotoindex';

class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        goToIndexStore.statusSwitcher();
    }

    componentWillUnmount() {
        goToIndexStore.statusSwitcher();
    }
    render() {
        return <SearchOnSite />;
    }
}

export default observer(WelcomePage);
