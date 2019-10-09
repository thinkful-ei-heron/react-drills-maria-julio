import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0
    };
    
    componentDidMount() {
        this.interval = setInterval(() => {
            let newCount = this.state.count + 1;
            this.setState({
                count: newCount
            });
        }, 1000);
    }
    
    renderTime() {
        if(this.state.count >= 8) {
            clearInterval(this.interval);
            return 'BOOM!';
        } else {
            return this.state.count % 2 === 0 ? 'tick' : 'tock';
        }
    }


    render() {
        return (
            <div>
                <p>{this.renderTime()}</p>
            </div>
            ) 
    }
}

export default Bomb;

