import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions';
import './TodoItem.css';

const TodoItem = ({ todo, index, setCurrentTodo }) => {
  const dispatch = useDispatch();

  return (
    <li className="todo-item">
      <span className="todo-item-content" onClick={() => setCurrentTodo(todo)}>
        {todo}
      </span>
      <button className="delete-btn" onClick={() => dispatch(deleteTodo(index))}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
