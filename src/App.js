// import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { CounterRedux } from './components/CounterRedux';
import { TodoApp } from './components/Todo';


function App() {
  return (
    <div className="App">
      <h2>Counter & Todo App with delete update on state</h2>
      
      <Counter/>
      <CounterRedux/>
      <br/>
    <TodoApp/>
    </div>
  );
}

export default App;
