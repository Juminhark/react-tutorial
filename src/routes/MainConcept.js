import React from 'react';
import './MainConcept.css';

import Welcome from '../components/Welcome';
import Hi from '../components/Hi';
import Clock from '../components/Clock';
import Food from '../components/Food';
import Fruit from '../components/Fruit';
import Counter from '../components/Counter';
import Loading from '../components/Loading';
import Toggle from '../components/Toggle'

// hardcoding data
const Fruits = [
  { 
    id:1,
    name: 'apple', 
    price: '3000'
  },
  { 
    id:2,
    name: 'banana', 
    price: '4000'
  },
  { 
    id:3,
    name: 'watermelon', 
    price: '5000'
  }
];

function MainConcept() {
  return (
    <div className='MainConcept__container'>
      
      <h3>component - props 와 prop 속성 꺼내기</h3>
      <p>component 합성 - MainConcept component는 Welcome, Hi component를 참조.</p>
      <Welcome name="min"/>
      <Hi name="sata"/>
      <hr/>
      
      <h3>prop-Type default값과 검증</h3>
      <Food name='watermelon'>sugar</Food>
      <Food />
      <hr/>

      <h3>리스트와 key. map()</h3>
      {Fruits.map(dish => (
        <Fruit key={dish.id} name={dish.name} price={dish.price}/>
      ))}
      <hr/>

      <h3>class component - state</h3>
      <Counter />
      <p>componentDidMount() 를 사용해 state 자동으로 변화.</p>
      <Loading />
      <hr/>

      <h3>class component - 생명주기 (lifecycle)</h3>
      <Clock date={new Date()} />
      <hr/>

      <h3>이벤트 처리하기</h3>
      <Toggle />
    </div>
  );
}
 
export default MainConcept;