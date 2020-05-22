import React from 'react';

class Test extends React.Component {
    state = { text: 'text' };
    handleClick = () => {
        this.setState({ text: 'pooh' });
        this.setState((prev, props) => {
            return { text: prev.text + ' ' + 'mysh' + ' ' + props.val };
        });
    };

    render() {
        console.log('render in state');
        return (
            <div>
                {this.state.text}
                <button onClick={this.handleClick}>Мяк-жмяк</button>
            </div>
        );
    }
}

export default Test;
