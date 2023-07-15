import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ bookProps, setBooks, delBook }) => (
  <>
    <ul className="book-list">
      {bookProps.map((book) => (
        <BookItem
          key={book.id}
          itemProp={book}
          setBooks={setBooks}
          delBook={delBook}
        />
      ))}
    </ul>
  </>
);

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
