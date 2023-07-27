import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Book } from "../redux/types";
import { addBook, updateBook } from "../redux/actions";

interface Props {
  onClose: () => void;
  book?: Book; // If a book is provided, it's for updating the book
}

const AddBookForm: React.FC<Props> = ({ onClose, book }) => {
  const [name, setName] = useState(book ? book.name : "");
  const [price, setPrice] = useState(book ? book.price : "");
  const [category, setCategory] = useState(book ? book.category : "");
  const [description, setDescription] = useState(book ? book.description : "");
  const [image, setImage] = useState(book ? book.image : "");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!name || !price || !category) {
      alert("Please fill in all required fields.");
      return;
    }

    const newBook: Book = {
      id: book ? book.id : Math.random().toString(),
      name,
      price: Number(price),
      category,
      description,
      image,
    };

    if (book) {
      dispatch(updateBook(newBook));
    } else {
      dispatch(addBook(newBook));
    }

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
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="bg-gold-500 hover:bg-gold-600 text-white py-2 px-4 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBookForm;
