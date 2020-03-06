import React from 'react';
import Welcome from './components/Welcome';
import Hi from './components/Hi';
import Clock from './components/Clock';
import Food from './components/Food';
import Fruit from './components/Fruit';
import Counter from './components/Counter';
import Loading from './components/Loading';

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

function App() {
  return (
    <div>
      <h3>props 와 prop 속성 꺼내기</h3>
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
      <hr/>

      <h3>class component - lifecycle</h3>
      <Clock date={new Date()} />

      <Loading />
    </div>
  );
}
 
export default App;



// lifecycle
// http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
