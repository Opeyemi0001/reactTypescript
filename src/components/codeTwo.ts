import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 0,
//   };
//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   render() {
//     return;
//     <div>
//       <p>Count: {this.state.count}</p>
//       <button onClick={this.increment}>Increment</button>
//     </div>;
//   }
// }
// export default Counter;



// Define types for Props (empty object) and State (with a count of type number)
interface CounterProps {} //No props for this component
interface CounterState {
  count: number;
}

class Counter extends Component<CounterProps, CounterState> {
  //Intializing state with a count of type number
  state: CounterState = {
    count: 0,
  };

  //Method to increment count
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };


  render() {
    return (
      <div>
      <p>Count: {this.state.count}</p>
      <button onClick={this.increment}>Increment</button>
    </div>;
    );
  }
}
export default Counter;
