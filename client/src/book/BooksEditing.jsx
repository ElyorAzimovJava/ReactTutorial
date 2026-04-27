import { useState } from 'react'
import { useEffect } from 'react'
import serverCommunication from '../proxy/serverCommunication'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addNewBook, updateBook, deleteBook, setBooks, setIsLoading, setError } from './bookslice';
// Actions 
function BooksEditing() {
  const { books, isLoading, error } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  // INTERNAL STATE
  // const [books, setBooks] = useState([]);
  // const [error, setError] = useState({ status: false, message: "" })
  // const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {

  }, [])
  const OnAddNewBookClick = () => {
    dispatch(addNewBook());
  }
  const OnDeleteBookBtnClick = (bookId) => {
    dispatch(deleteBook(bookId));
  }
  const getBooks = async () => {
    try {
      dispatch(setIsLoading(true)); // DISPATCH an ACTION
      const result = await serverCommunication.getAsync("http://localhost:4000/books");
      if (result.status === "SUCCESS")
        dispatch(setBooks(result.data));
      else
        dispatch(setError({ status: true, message: result.data }));
    } catch (ex) {
      dispatch(setError({ status: true, message: ex }));
    } finally {
      dispatch(setIsLoading(false));
    }
  }
  return (
    <>
      {!isLoading && <button onClick={getBooks}>Get Books</button>}
      {isLoading && <div>Please wait ....</div>}

      <table border={1} cellPadding={10} cellSpacing={0}>
        {books.map(book => book.status !=="DELETED" &&
          <tr>
            <td>{book.bookId}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.price}</td>
            <td>
                <button onClick={() => OnDeleteBookBtnClick(book.bookId)}>Delete</button>
            </td>
          </tr>
        )}
      </table>
      <button onClick={ OnAddNewBookClick}>Add New Book</button>
      <div>{error.status && error.message}</div>
    </>
  )
}

export default BooksEditing;
