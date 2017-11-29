import * as React from 'react';

interface State {
  counter: number;
}

export interface Props {
  label: string;
}

class StatefulComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1});
  }

  decrement = () => {
    const { counter } = this.state;
    this.setState({ counter: counter - 1});
  }

  render() {
    const { label } = this.props;
    const { counter } = this.state;
    return (    
      <div>
        <span>
          {label}: {counter}
        </span>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default StatefulComponent;