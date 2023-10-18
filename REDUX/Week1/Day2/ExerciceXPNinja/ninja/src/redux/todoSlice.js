import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  visibilityFilter: "ALL",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    toggleTodo: (state, action) => {
      const toggledTodos = state.todos.map((todo, index) =>
        index === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
      state.todos = toggledTodos;
    },
    filterTodo: (state, action) => {
      state.visibilityFilter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, filterTodo } = todoSlice.actions;

export const selectFilteredTodos = (state) => {
  const { todos, visibilityFilter } = state.todo;
  switch (visibilityFilter) {
    case "ALL":
      return todos;
    case "ACTIVE":
      return todos.filter((todo) => !todo.isCompleted);
    case "COMPLETED":
      return todos.filter((todo) => todo.isCompleted);
    default:
      return todos;
  }
};

export default todoSlice.reducer;
