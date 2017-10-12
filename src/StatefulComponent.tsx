import * as React from 'react';

class StatefulComponent extends React.Component {
  increment = () => {
    // const { counter } = this.state;
    // this.setState({ counter: counter + 1});
  }

  decrement = () => {
    // const { counter } = this.state;
    // this.setState({ counter: counter - 1});
  }

  render() {
    return (    
      <div>
        <span />
        {/* <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button> */}
      </div>
    );
  }
}

export default StatefulComponent;