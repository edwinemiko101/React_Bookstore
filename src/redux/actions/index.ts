import { Book, ActionTypes } from "../types";

export const addBook = (book: Book) => ({
  type: ActionTypes.ADD_BOOK,
  payload: book,
});

export const updateBook = (book: Book) => ({
  type: ActionTypes.UPDATE_BOOK,
  payload: book,
});

export const deleteBook = (id: string) => ({
  type: ActionTypes.DELETE_BOOK,
  payload: id,
});
