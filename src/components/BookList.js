import BookItem from "./BookItem";

const BookList = ({ bookProps, setBooks, delBook }) => {
  return (
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
};

export default BookList;
