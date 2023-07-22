// import libraries
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
// import compoenents
import { getBooksFromAPI } from '../redux/books/booksSlice';
import BookItem from './BookItem';

const BookList = ({ setBooks, delBook }) => {
  const books = useSelector((state) => state.books);
  return (
    <>
      <ul className="book-list">
        {books.map((book) => (
          <BookItem
            key={book.item_id}
            itemProp={book}
            setBooks={setBooks}
            delBook={delBook}
          />
        ))}
      </ul>
    </>
  );
};

BookList.propTypes = {
  setBooks: PropTypes.func.isRequired,
  delBook: PropTypes.func.isRequired,
};

export default BookList;
