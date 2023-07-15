const BookItem = ({ itemProp, setBooks, delBook }) => {

  return (
    <li className="book-container">
      <div className="book-info">
        <span className="genre">Science Fiction</span>
        <h3 className="title">Dune</h3>
        <span className="author">Frank Herbert</span>
        <div className="edit-info">
          <button>Comments</button>
          <hr />
          <button 
          type="button"
          onClick={() => delBook(itemProp.id)}
           >Remove</button>
          <hr />
          <button>Edit</button>
        </div>
      </div>
      <div className="progress">
        <span className="progress-indicator">64%</span>
        <span className="status-indicator">Completed</span>
      </div>
      <div className="chapter">
        <span>CURRENT CHAPTER</span>
        <span>Chapter 17</span>
        <button>UPDATE PROGRESS</button>        
      </div>
    </li>
  );
};

export default BookItem;
