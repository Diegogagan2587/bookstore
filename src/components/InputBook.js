import { useState } from "react";

const InputBook = ({addBookItem}) => {


    return (
        <>
        <h3>Add New Book</h3>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Book Title"
            onChange={handleChange}
            value={title}
            />
             <input 
            type="text"
            placeholder="Author"
            onChange={handleChange}
            value={title}
            />
            <button>Add Book</button>
        </form>
        <span className="warning">{message}</span>
        </>
    )
}

export default InputBook;
