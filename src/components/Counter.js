import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      foo: {
        bar: 0,
        foobar: 1
      }
    }
  }
  
  handleIncrease = () => {
    this.setState(current => ({
      number: current.number + 1 ,
      foo: {
        ...current.foo,
        foobar: current.foo.foobar + 1
      }
    }))
  };
  // 비구조화 할당 문법
  // const { current } = this.state 
  // ... 은 javascript의 전개 연산자. 기존의 객체안에 내용을 해당위치에다가 풀어준다.

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  handleFooIncrease = () => {
    this.setState({
      foo: {
        foobar: this.state.foo.foobar + 1
      }
    })
  }
   // this.state 는 사용하지 않는것이 좋다.
  
  render() {
    return (
      <div>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button> 

        <div>foobar: {this.state.foo.foobar}</div>
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.handleFooIncrease}>this.state fooIncrese</button> 
      </div>
    )
  }
}
