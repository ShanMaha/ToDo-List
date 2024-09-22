import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ setCurrentTodo }) => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} setCurrentTodo={setCurrentTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
