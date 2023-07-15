import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookList from './BookList';
import InputBook from './InputBook';
// Placeholder for importing

const BookLogic = () => {
  const [books, setBooks] = useState([
    {
      id: uuidv4(),
      category: 'action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      completed: 64,
      currentChapter: 'Chapter 17',
    },
    {
      id: uuidv4(),
      category: 'action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      completed: 64,
      currentChapter: 'Chapter 3: A Lesson Learned',
    },
    {
      id: uuidv4(),
      category: 'action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      completed: 64,
      currentChapter: 'Introduction',
    },
  ]);

  const delBook = (id) => {
    setBooks([
      ...books.filter((book) => book.id !== id),
    ]);
  };

  const addBookItem = ({
    category,
    title,
    author,
    completed,
    currentChapter,
  }) => {
    const newBook = {
      id: uuidv4(),
      category,
      title,
      author,
      completed,
      currentChapter,
    };
    setBooks([...books, newBook]);
  };

  return (
    <>
      <BookList bookProps={books} setBooks={setBooks} delBook={delBook} />
      <hr />
      <InputBook addBookItem={addBookItem} />
    </>
  );
  // end of BookLogic
};

export default BookLogic;
