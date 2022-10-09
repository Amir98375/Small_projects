// import logo from './logo.svg';
import './App.css';
import { TodoApp } from './components/Todo';
import { Counter } from './Counter';

function App() {
  return (
    <div className="App">
      <h2>Todo App with delete update on state</h2>
      <Counter/>
    <TodoApp/>
    </div>
  );
}

export default App;
