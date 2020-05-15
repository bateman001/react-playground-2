import React from 'react';

class Bomb extends React.Component{

    state = {
        count: 0,
    }

    componentDidMount(){
      this.interval = setInterval(() => {
          this.setState({
            count: this.state.count + 1
          }) 
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    displayMsg = (count) => { 
        let msg = count % 2 === 0 ? 'tick' : 'tock'; 

        if (count >= 8) { 
            clearInterval(this.interval); msg = 'BOOM!!!!' 
        } 

            return msg; 
        }

render() { 
    return ( 
    <div> 
        <p>{this.displayMsg(this.state.count)}</p> 
    </div> 
    );
     }
    
}


export default Bomb;