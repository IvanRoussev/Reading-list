import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, deleteBook, editBook }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteBook(book.id);
  };

  const handleEditclick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    editBook(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='books' />
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditclick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
