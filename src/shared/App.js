import React, {PureComponent} from 'react';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render() {
    const {counter} = this.state;

    return (
      <div>
        <h1>React Plus Server-Side Rendering Setup</h1>
        <span>Clicked: {counter}</span>
        <button onClick={() => this.setState({counter: counter + 1})}>Increment</button>
      </div>
    );
  }
}

export default App;
