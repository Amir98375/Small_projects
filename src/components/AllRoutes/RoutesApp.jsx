import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Copy } from '../Copy'
import { Counter } from '../Counter'
import { CounterRedux } from '../CounterRedux'
import { Dragable } from '../Dragable'
import { MaterialUI } from '../MaterialUI'
import { Navbar } from '../Navbar'
import { SignIn } from '../SignIn'
import { Stack } from '../Stack'
import { StopWatch } from '../StopWatch'
import { TodoApp } from '../Todo'

export const RoutesApp = () => {
  return (
    <div>
     <Navbar/>
     <br />
      <Routes>

      <Route path='/' element={<TodoApp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/countRed' element={<CounterRedux/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/stack' element={<Stack/>}/>
      <Route path='/d&d' element={<Dragable/>}/>
      <Route path='/copy' element={<Copy/>}/>
      <Route path='/stopwatch' element={<StopWatch/>}/>
      <Route path='/material' element={<MaterialUI/>}/>
      <Route/>
      </Routes>
    </div>
  )
}
