import PropTypes from 'prop-types';

const BookItem = ({ itemProp, delBook }) => (
  <li className="book-container">
    <div className="book-info">
      <span className="genre">Science Fiction</span>
      <h3 className="title">{itemProp.title}</h3>
      <span className="author">{itemProp.author}</span>
      <div className="edit-info">
        <button type="button">Comments</button>
        <hr />
        <button type="button" onClick={() => delBook(itemProp.id)}>
          Remove
        </button>
        <hr />
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="progress">
      <span className="progress-indicator">64%</span>
      <span className="status-indicator">Completed</span>
    </div>
    <div className="chapter">
      <span>CURRENT CHAPTER</span>
      <span>Chapter 17</span>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </li>
);

BookItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  delBook: PropTypes.func.isRequired,
};

export default BookItem;
