import React from 'react';

export default class RouletteGun extends React.Component {
    
    state = {
        chamber: null,
        spinningTheChamber: false,
    };

    watchClick = () => {
        this.setState({
            spinningTheChamber: true
        })
        
        this.timeout = setTimeout(() => {
            
            let num = Math.ceil(Math.random() * 8)

            this.setState({
                chamber: num,
                spinningTheChamber: false,
            })

        }, 500)
        //clearTimeout(this.timeout);
       
    }

        componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    renderOutcome() {
        if(this.state.spinningTheChamber === true) {
            
            return 'spinning the chamber and pulling the trigger!'
        
        } else if(this.state.chamber === this.props.bulletInChamber) {
            
            return 'LOL UR DEAD AF'
        
        } else {
            
            return "you're safe!"
        
        }
    }

    render() {
        return(
            <div>
                <p>{this.renderOutcome()}</p>
                <button onClick= {this.watchClick}>Pull the trigger!</button>
            </div>
        )
    }
}

RouletteGun.defaultProps = {bulletInChamber: 8};