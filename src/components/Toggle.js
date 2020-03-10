import React, { Component } from 'react'

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    // 콜백에서 `this`가 작동하려면 아래와 같이 
    // 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  // 이 문법은 `this`가 AutomaticBind 내에서 바인딩되도록 합니다.
  // 주의: 이 문법은 *실험적인* 문법입니다.
  AutomaticBind = () => {
    console.log('this is:', this);
  }

  // 클래스 필드 문법을 사용하고 있지않다면,
  // 콜백에 화살표함수를 사용.
  arrowSymbolFunction() {
    console.log('this is:', this);
  }

  render() {
    return (
      <div> 
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <button onClick={this.AutomaticBind}>
          Click me
        </button>
        <button onClick={(e) => this.arrowSymbolFunction(e)}>
          Click me
        </button>
      </div>
    )
  }
}
