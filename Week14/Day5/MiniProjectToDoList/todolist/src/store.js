import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './todos/todo'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})