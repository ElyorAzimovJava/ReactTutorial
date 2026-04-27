import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from "uuid";
const initialState = {
    books: [],
    isLoading: false,
    error: { status: false, message: '' }
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addNewBook: (state, action) => {
            state.books.push({ bookId: uuidv4(), title: "", author: "", price: 0, status: "NEW" });
        },
        updateBook: (state, action) => {

        },
        deleteBook: (state, action) => {
            const bookId = action.payload;
            const book = state.books.find(book => book.bookId === bookId);
          if(book.status === "NEW") {
              state.books.splice(state.books.findIndex(book => book.id === bookId),1);
          }else{
              book.status = "DELETED";
          }
           // state.books.splice(state.books.findIndex(book => book.id === bookId),1); // mutable operation
          // state.books =  state.books.filter(book => book.bookId !== bookId); // immutable operation
        },
        setBooks: (state, action) => {
            state.books = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addNewBook, updateBook, deleteBook, setBooks, setIsLoading, setError } = booksSlice.actions;

export default booksSlice.reducer;