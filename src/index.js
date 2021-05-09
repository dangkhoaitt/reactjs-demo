import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

export class Hello extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello Win!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}</h2>
//     </div>
//   );
// }

// function Tick() {
//   return <Clock date={new Date()} />;
// }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  /*là một method lifecycle component
    Được gọi sau khi render một component 
    mounting là khi thêm một xử lý gì đó khi component
    được render vào DOM lần đầu tiên.
   */
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello Win!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
