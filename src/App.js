import React from 'react';

import Welcome from './components/Welcome';
import Hi from './components/Hi';
import Clock from './components/Clock';
import Food from './components/Food';
import Fruit from './components/Fruit';
import Counter from './components/Counter';
import Loading from './components/Loading';
import MovieList from './components/MovieList';

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
      <Loading />
      <hr/>

      <h3>class component - lifecycle</h3>
      <Clock date={new Date()} />
      <hr/>
    
      <h3>data fetch using axios - async / await</h3>
      <MovieList />
      <hr/>
    </div>
  );
}
 
export default App;



// lifecycle
// http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

// yts api
// official: https://yts.mx/api/v2/list_movies.json?sort_by=rating
// proxy: https://yts-proxy.now.sh/list_movies.json

// className을 쓰는이유는 class 와 헷갈리기때문
// 마찬가지로 <label for 은 html문법이고 javascript에서는 loop이기 때문에
// <label htmlFor=''> 와 같이 사용한다.