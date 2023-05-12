import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  addBook,
  removeBook,
  getBookItems,
  setBookItems,
} from '../../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const { bookItems, isLoading } = useSelector((store) => store.book);
  const [books, setBooks] = useState({
    title: '',
    author: '',
    category: '',
  });

  const updateTitle = (e) => {
    setBooks({ ...books, title: e.target.value });
  };

  const updateAuthor = (e) => {
    setBooks({ ...books, author: e.target.value });
  };

  const handleSetBooks = () => {
    const bookData = { item_id: uuidv4(), ...books };
    dispatch(addBook(bookData));
    dispatch(setBookItems(bookData));
    setBooks({
      ...books,
      title: '',
      author: '',
    });
  };

  useEffect(() => {
    dispatch(getBookItems());
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      </>
    );
  }

  return (
    <>
      {bookItems.map((book) => (
        <div key={book.item_id} className="books flex-column">
          <div className="title">
            <h3>{book.title}</h3>
          </div>
          <div className="author">
            <h4>{book.author}</h4>
          </div>
          <div className="control fade flex gap-1">
            <div className="edit ptr">Comments</div>
            |
            <button
              onClick={() => dispatch(removeBook(book.item_id))}
              className="edit ptr"
              type="button"
            >
              Remove
            </button>
            |
            <div className="edit ptr">Edit</div>
          </div>
        </div>
      ))}
      <div className="add-books flex-column">
        <div className="title fade">
          <h2>ADD NEW BOOK</h2>
        </div>

        <form action="" className="flex gap-1">
          <input
            id="book_title"
            name="title"
            type="text"
            placeholder="Book title"
            value={books.title}
            onChange={updateTitle}
          />
          <input
            id="book_author"
            name="author"
            type="text"
            placeholder="Author"
            value={books.author}
            onChange={updateAuthor}
          />
          <button type="button" onClick={handleSetBooks}>
            <p>ADD BOOK</p>
          </button>
        </form>
      </div>
    </>
  );
};

export default Books;
