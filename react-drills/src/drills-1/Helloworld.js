import React from 'react';

class Helloworld extends React.Component {
  state = {
      who: 'World!'
  };
  watchClick = (input) => {
    this.setState({
        who: input
    });
  };
  render() {
      return (
        <div>
        <div>
            <button onClick = {() => this.watchClick('Friend!')}>
                Friend
            </button>
            <button onClick = {() => this.watchClick('React!')}>
                React
            </button>
            <button onClick = {() => this.watchClick('World!')}>
                World
            </button>
        </div>
        <p>Hello, {this.state.who}</p>
    </div>
      )
  }
}

export default Helloworld;
