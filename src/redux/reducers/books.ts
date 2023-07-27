import { ActionTypes, Book, BookAction } from "../types";

const initialState: Book[] = [];

const booksReducer = (state = initialState, action: BookAction): Book[] => {
  switch (action.type) {
    case ActionTypes.ADD_BOOK:
      return [...state, action.payload];
    case ActionTypes.UPDATE_BOOK:
      return state.map((book) =>
        book.id === action.payload.id ? { ...book, ...action.payload } : book
      );
    case ActionTypes.DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
