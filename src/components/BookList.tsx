import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Book } from "../redux/types";
import { deleteBook } from "../redux/actions";
import BookDetailPopup from "./BookDetailPopup";

const defaultImageUrl =
  "https://www.blazesoft.ca/wp-content/uploads/2023/05/desctop1-scaled.jpg";

const BookList: React.FC = () => {
  const books = useSelector((state: Book[]) => state);
  const dispatch = useDispatch();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleDeleteBook = (id: string) => {
    dispatch(deleteBook(id));
  };

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  return (
    <div className="mt-4">
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-white p-4 mb-4 shadow-md cursor-pointer flex"
          onClick={() => handleBookClick(book)}
        >
          <img
            src={book.image || defaultImageUrl}
            alt={book.name}
            className="w-16 h-16 rounded-md mr-4"
          />
          <div>
            <h3 className="text-xl font-bold">{book.name}</h3>
            <p>Price: ${book.price}</p>
            <p>Category: {book.category}</p>
            <p>{book.description}</p>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md mt-2"
              onClick={() => handleDeleteBook(book.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {selectedBook && (
        <BookDetailPopup
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </div>
  );
};

export default BookList;
