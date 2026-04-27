import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/counterSlice'
import booksReducer from '../book/bookslice'
export const store = configureStore({
  reducer: {
     counterReducer,
     booksReducer,
  },

})