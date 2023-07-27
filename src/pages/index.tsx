// pages/index.tsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Book } from "../redux/types";
import AddBookForm from "../components/AddBookForm";
import BookList from "../components/BookList";
import { ADD_BOOK } from "../redux/types";

const IndexPage: React.FC = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const books = useSelector((state: Book[]) => state);
  const dispatch = useDispatch();

  const handleAddBook = () => {
    setIsAdding(true);
    setSelectedBook(null);
  };

  const handleEditBook = (book: Book) => {
    setIsAdding(true);
    setSelectedBook(book);
  };

  const handleCloseForm = () => {
    setIsAdding(false);
    setSelectedBook(null);
  };

  const handleAddNewBook = (newBook: Book) => {
    dispatch({
      type: ADD_BOOK,
      payload: newBook,
    });
  };

  return (
    <div className="bg-gradient-to-r from-orange-400 to-gold-500 p-4">
      <h1 className="text-4xl font-bold text-white mb-4">Ritse's Bookstore</h1>
      <button
        className="bg-black text-white py-2 px-4 rounded-md mr-4"
        onClick={handleAddBook}
      >
        Add a Book
      </button>
      <BookList />

      {isAdding && (
        <AddBookForm
          onClose={handleCloseForm}
          book={selectedBook}
          onAddBook={handleAddNewBook}
        />
      )}
    </div>
  );
};

export default IndexPage;
