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


/*
<Clock />가 MainCencept component로 전달되었을 때 
React는 Clock 컴포넌트의 constructor를 호출합니다. 
Clock이 현재 시각을 표시해야 하기 때문에 현재 시각이 
포함된 객체로 this.state를 초기화합니다. 
나중에 이 state를 업데이트할 것입니다.

render() 실행이후 componentDidMount() 실행.

React는 Clock 컴포넌트의 render() 메서드를 호출합니다. 
이를 통해 React는 화면에 표시되어야 할 내용을 알게 됩니다. 
그 다음 React는 Clock의 렌더링 출력값을 일치시키기 위해 
DOM을 업데이트합니다.

Clock 출력값이 DOM에 삽입되면, React는 componentDidMount() 
생명주기 메서드를 호출합니다. 그 안에서 Clock 컴포넌트는 매초 
컴포넌트의 tick() 메서드를 호출하기 위한 타이머를 설정하도록 
브라우저에 요청합니다.

매초 브라우저가 tick() 메서드를 호출합니다. 
그 안에서 Clock 컴포넌트는 setState()에 현재 시각을 포함하는 
객체를 호출하면서 UI 업데이트를 진행합니다. setState() 호출 
덕분에 React는 state가 변경된 것을 인지하고 화면에 표시될 내용을 
알아내기 위해 render() 메서드를 다시 호출합니다. 
이 때 render() 메서드 안의 this.state.date가 달라지고 렌더링 출력값은 
업데이트된 시각을 포함합니다. React는 이에 따라 DOM을 업데이트합니다.

react가 state 변경 된것을 인지후 render() 실행. 
그후  componentDidUpdate() 실행.

Clock 컴포넌트가 DOM으로부터 한 번이라도 삭제된 적이 있다면 
React는 타이머를 멈추기 위해 componentWillUnmount() 생명주기 
메서드를 호출합니다

*/