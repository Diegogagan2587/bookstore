import BookItem from "./BookItem";

const BookList = () => {
    return (
        <>
        <ul className="book-list">
            <h1>Books List Placeholder</h1>
            {/* Here We will include books */}
            <BookItem />
        </ul>
        </>
    )
}

export default BookList;