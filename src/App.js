import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import MainConcept from './routes/MainConcept'
import Home from './routes/Home'
import About from './routes/About'
import Navigation from './routes/Navigation'
import Detail from './routes/Detail'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Route path='/' exact={true} component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/movie/:id' component={Detail}/>
      <Route path='/MainConcept' component={MainConcept}/>
    </BrowserRouter>
  )
}

export default App
