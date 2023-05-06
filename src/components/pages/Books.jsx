import React from 'react';

const Books = () => {
  const bookList = [
    { title: 'Count of monte cresto', author: 'jean marques' },
    { id: 2, title: 'Romeo and Juliet', author: 'Willian Shekspear' },
  ];
  return (
    <>
      {bookList.map((book) => (
        <>
          <div className="books flex-column">
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
            <div className="control flex gap-1">
              <div className="edit">Comments</div>
              |
              <div className="edit">Remove</div>
              |
              <div className="edit">Edit</div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Books;
