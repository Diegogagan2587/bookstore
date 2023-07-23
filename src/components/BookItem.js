import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = ({ itemProp }) => {
  const dispatch = useDispatch();
  return (
    <li className="book-container">
      <div className="book-info">
        <span className="genre">{itemProp.category}</span>
        <h3 className="title">{itemProp.title}</h3>
        <span className="author">{itemProp.author}</span>
        <div className="edit-info">
          <button type="button">Comments</button>
          <hr />
          <button
            className="center-button"
            type="button"
            onClick={() => dispatch(removeBook(itemProp, itemProp.item_id))}
          >
            Remove
          </button>
          <hr />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="oval-container">
        <div className="oval-2" />
      </div>
      <div className="progress">
        <span className="progress-indicator">64%</span>
        <span className="status-indicator">Completed</span>
      </div>
      <hr />
      <div className="chapter">
        <span className="chap-head">CURRENT CHAPTER</span>
        <span className="chap-progress">Chapter 17</span>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  itemProp: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
