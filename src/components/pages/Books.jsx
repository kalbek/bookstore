import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  addBook,
  removeBook,
  getBookItems,
} from '../../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const { bookItems, isLoading } = useSelector((store) => store.book);
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
          <input type="text" placeholder="Book title" />
          <input type="select" placeholder="Category" />
          <button
            type="button"
            onClick={() => {
              dispatch(
                addBook({
                  item_id: `item4${bookItems.length + 1}`,
                  title: 'The Count of monte cresto',
                  author: 'Alexandre Dumas',
                }),
                '',
              );
            }}
          >
            <p>ADD BOOK</p>
          </button>
        </form>
      </div>
    </>
  );
};

export default Books;
