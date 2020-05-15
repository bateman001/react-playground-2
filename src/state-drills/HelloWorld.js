import React from 'react';

class HelloWorld extends React.Component{

    state = {
            who: 'world'
        };

    worldButton = () => {

        this.setState({
            who: 'world'
        })
    }


    friendButton = () => {

        this.setState({
            who: 'Friend'
        })
    }

    reactButton = () => {

        this.setState({
            who: 'React'
        })
    }

    render(){
        return <div>
            <p>Hello {this.state.who}!</p>
            <button onClick= {this.worldButton}>World</button>
            <button onClick= {this.friendButton}>Friend</button>
            <button onClick= {this.reactButton}>React</button>

        </div>
    }
}

export default HelloWorld;