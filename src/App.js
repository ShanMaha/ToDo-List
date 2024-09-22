import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [currentTodo, setCurrentTodo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <Provider store={store}>
      <div className="container">
        <h1>Todo App</h1>
        <AddTodo currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} index={currentIndex} />
        <TodoList setCurrentTodo={(todo) => {
          setCurrentTodo(todo);
          setCurrentIndex(currentIndex);
        }} />
      </div>
    </Provider>
  );
};

export default App;
