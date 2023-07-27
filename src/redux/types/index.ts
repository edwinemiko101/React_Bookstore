export interface Book {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export const ADD_BOOK = "ADD_BOOK";

export enum ActionTypes {
  ADD_BOOK = "ADD_BOOK",
  UPDATE_BOOK = "UPDATE_BOOK",
  DELETE_BOOK = "DELETE_BOOK",
}

interface AddBookAction {
  type: ActionTypes.ADD_BOOK;
  payload: Book;
}

interface UpdateBookAction {
  type: ActionTypes.UPDATE_BOOK;
  payload: Book;
}

interface DeleteBookAction {
  type: ActionTypes.DELETE_BOOK;
  payload: string; // id of the book to delete
}

export type BookAction = AddBookAction | UpdateBookAction | DeleteBookAction;
