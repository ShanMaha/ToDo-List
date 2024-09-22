import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../redux/actions';
import './AddTodo.css';

const AddTodo = ({ currentTodo, setCurrentTodo, index }) => {
  const [inputValue, setInputValue] = useState(currentTodo || '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      if (currentTodo) {
        dispatch(updateTodo(index, inputValue));
        setCurrentTodo(null); // Reset current todo after update
      } else {
        dispatch(addTodo(inputValue));
      }
      setInputValue('');
    }
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add or update a todo"
      />
      <button type="submit">{currentTodo ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default AddTodo;
