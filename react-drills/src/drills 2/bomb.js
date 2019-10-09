
import React from 'react';


class bomb extends React.Component {
    constructor() {
        super(props)
        this.state = { count: 0}
  
    }
    componentDidMount() {
        let interval = setInterval((callback, timeInMs) => {
            setSeconds(seconds => seconds +1);
        }, 1000);

        return () => clearInterval(interval);
    }

    clockDisplay() {
           const {count} = function () {
                if (count/2 ===0) {
                    return 'tick'
                }
                if (count>=8) {
                    return 'BOOM'
                }
                else {
                    return 'tock'
                }
        }
    }
    
    render() {
      return(
          <div>{clock}</div>
      )

      
    }
  }

export default bomb 










