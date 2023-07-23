import React, { useState , useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, postBooksToAPI } from '../redux/books/booksSlice';

const InputBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() && author.trim()) {
      const newBook = {
        item_id: uuidv4(),
        title,
        author,
        category: 'Pending Classification',
      };
      setTitle('');
      setAuthor('');
      dispatch(addBook(newBook));
      dispatch(postBooksToAPI(newBook));
    }
    setMessage('Please fill all fields!');
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  return (
    <>
      <h3>Add New Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          onChange={handleChangeTitle}
          value={title}
        />
        <input
          type="text"
          placeholder="Author"
          onChange={handleChangeAuthor}
          value={author}
        />
        <button type="submit">Add Book</button>
      </form>
      <span className="warning">{message}</span>
    </>
  );
};

export default InputBook;
