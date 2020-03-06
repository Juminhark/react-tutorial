import React, { Component } from 'react'

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // 생명주기 메서드
  // 최초에 생성될때 render() 실행후 didmount 실행
  componentDidMount(){
    console.log('Component did mount');
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // 바뀐부분이있으면 render() 실행후 update 실행
  // Didmount 될때 setInterval 로 1000 주기로 tick()을 실행. 이때마다 update됨
  componentDidUpdate(){
    console.log('Component update');
  }

  // 해당 페이지를 떠날떄
  componentWillUnmount() {
    console.log('Did unmount');
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    )
  }
}
