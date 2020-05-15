import React from 'react';

class RouletteGun extends React.Component{
    
    static defaultProp = {
        bulletInChamber: 8
    }

    state = {
        chamber: null,
        spinningTheChamber: false,
        msg: ' '
    }

    getRandomNumber(){
            return Math.floor(Math.random() * (8 - 1) + 1);
          }
    

    pullTheTrigger = (val) => {

        this.setState({
            spinningTheChamber: true,
        });
        console.log(this.state.spinningTheChamber);
        console.log(this.state.chamber);

        // setTimeout(() =>{
        //     this.setState({
        //         chamber: this.getRandomNumber(),
        //         spinningTheChamber: false
        //     });
        //     console.log(this.state.spinningTheChamber);
        // }, 2000);

      this.setState( {
            msg: this.displayMessage()
      });

    }

    displayMessage = (msg) => {
        console.log(this.state.spinningTheChamber);

        if(this.state.spinningTheChamber === true){
                msg = "spinning the chamber and pulling the trigger! ...."
    
        }

    //   if(this.state.chamber === this.props.bulletInChamber){
    //         msg = "BANG!!!!";
    //     }else{
    //         msg = "Safe";
    //     }

        return msg;
    }

    render(){
        return (
            <div>
                <p>{this.state.msg}</p>
                <button onClick={this.pullTheTrigger(this.state.spinningTheChamber)}>Pull the Trigger</button>
            </div>
        )
    }
}

export default RouletteGun;