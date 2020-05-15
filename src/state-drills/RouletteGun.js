import React from 'react';

class RouletteGun extends React.Component{
    
    static defaultProps = {
        bulletInChamber: 8
    }

    state = {
        chamber: null,
        spinningTheChamber: false
    }

    getRandomNumber(){
            return Math.floor(Math.random() * (8 - 1) + 1);
          }
    

    pullTheTrigger = () => {

        this.setState({
            spinningTheChamber: true,
            chamber: null
        });


        console.log(this.state.spinningTheChamber);
        console.log(this.state.chamber);

        setTimeout(() => {
            this.setState({
                chamber: this.getRandomNumber(),
                spinningTheChamber: false
            });
        }, 2000);



    }

    message = () => {

        let msg;
        console.log(this.state.chamber, this.props.bulletInChamber);
        if(this.state.spinningTheChamber === true){
                msg = "spinning the chamber and pulling the trigger! ...."
        }else{

             if(this.state.chamber === this.props.bulletInChamber){
                msg = "BANG!!!!";
            }else{
                msg = "Safe";
            }
        }
        return msg;
    }

    render(){
        return (
            <div>
                <p>{this.message()}</p>
                <button onClick={this.pullTheTrigger}>Pull the Trigger</button>
            </div>
        )
    }
}

export default RouletteGun;