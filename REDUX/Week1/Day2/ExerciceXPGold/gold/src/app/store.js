import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from '../features/articles'

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
})