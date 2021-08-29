import React from "react";

export class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
    };
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber() {
    this.setState({ data: this.state.data + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data}></Content>
      </div>
    );
  }
}

class Content extends React.Component {
  //** Được gọi trước khi render Component */
  componentWillMount() {
    console.log("Component WILL MOUNT!");
  }

  //** Được gọi sau khi render Component */
  componentDidMount() {
    console.log("Component DID MOUNT!");
  }

  //** Được gọi khi props được update */
  componentWillReceiveProps(newProps) {
    // console.log("newProp :>> ", newProps);
    console.log("Component WILL RECEIVE PROPS!");
  }

  //** Cho phép render lại khi props hoặc state được update */
  shouldComponentUpdate(newProps, newState) {
    // console.log(newProps);
    console.log(newState);
    if (newProps.myNumber >= 3) return true;
    return false;
  }

  //* Được gọi trước khi Component render lại */
  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(nextState);
    console.log("Component WILL UPDATE!");
  }

  //** Được gọi sau khi Component render lại */
  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID UPDATE!");
  }

  //** Được gọi khi Component xóa khỏi react */
  componentWillUnmount() {
    console.log("Component WILL UNMOUNT!");
  }

  render() {
    console.log("RENDER");
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}
