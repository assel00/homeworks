import React, { useState, useEffect } from 'react';
import withLogger from './withLogger';

class App extends React.Component {
  componentDidMount() {
    console.log('App component has mounted.');
  }

  render() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `Count: ${count}`;
    }, [count]);

    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      setCount(count - 1);
    };

    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }
}

const AppWithLogger = withLogger(App);
export default AppWithLogger;