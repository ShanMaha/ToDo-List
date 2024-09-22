import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './actions';

const initialState = {
  todos: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case UPDATE_TODO:
      const updatedTodos = state.todos.map((todo, index) =>
        index === action.payload.index ? action.payload.updatedTodo : todo
      );
      return { ...state, todos: updatedTodos };
    case DELETE_TODO:
      return { ...state, todos: state.todos.filter((_, index) => index !== action.payload) };
    default:
      return state;
  }
};

export default rootReducer;
