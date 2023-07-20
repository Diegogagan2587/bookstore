import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = ({ setBooks, delBook }) => {
  const books = useSelector((state) => state.books);
  console.log('Accessing Store and Getting Books', books);
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
  bookProps: PropTypes.arrayOf([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ]).isRequired,
  setBooks: PropTypes.func.isRequired,
  delBook: PropTypes.func.isRequired,
};

export default BookList;
