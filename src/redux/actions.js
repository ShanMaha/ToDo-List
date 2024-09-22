export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const updateTodo = (index, updatedTodo) => ({
  type: UPDATE_TODO,
  payload: { index, updatedTodo },
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  payload: index,
});
