import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const { bookItems } = useSelector((store) => store.book);
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
            <div className="edit">Comments</div>
            |
            <div className="edit">Remove</div>
            |
            <div className="edit">Edit</div>
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
