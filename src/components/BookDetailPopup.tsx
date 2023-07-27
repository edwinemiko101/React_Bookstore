import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Book } from "../redux/types";
import { updateBook } from "../redux/actions";

interface Props {
  book: Book;
  onClose: () => void;
}

const BookDetailPopup: React.FC<Props> = ({ book, onClose }) => {
  const [name, setName] = useState(book.name);
  const [price, setPrice] = useState(String(book.price));
  const [category, setCategory] = useState(book.category);
  const [description, setDescription] = useState(book.description);
  const dispatch = useDispatch();

  const handleUpdateBook = () => {
    const updatedBook: Book = {
      ...book,
      name,
      price: Number(price),
      category,
      description,
    };
    dispatch(updateBook(updatedBook));
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-75 bg-black">
      <div className="bg-white p-4 rounded-md shadow-lg">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded-md shadow-sm"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded-md shadow-sm"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded-md shadow-sm"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded-md shadow-sm"
        />
        <div className="flex justify-end">
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mr-2"
            onClick={handleUpdateBook}
          >
            Save Changes
          </button>
          <button
            className="bg-black text-white py-2 px-4 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPopup;
