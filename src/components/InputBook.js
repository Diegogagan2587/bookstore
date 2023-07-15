import { useState } from "react";

const InputBook = ({addBookItem}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [ message, setMessage ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(title.trim() && author.trim()) {
            addBookItem({title,author});
            setTitle('');
            setAuthor('');
        } else {
            setMessage("Please fill all fields!")
        }
    }

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleChangeAuthor = (event) => {
        setAuthor(event.target.value);
    }

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
            <button>Add Book</button>
        </form>
        <span className="warning">{message}</span>
        </>
    )
}

export default InputBook;
