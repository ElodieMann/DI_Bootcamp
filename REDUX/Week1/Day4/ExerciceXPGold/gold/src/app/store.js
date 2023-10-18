import { configureStore } from '@reduxjs/toolkit'
import contactReducer from '../redux/contact'

export const store = configureStore({
  reducer: {
    contact: contactReducer
  },
})