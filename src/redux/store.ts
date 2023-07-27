import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Book } from "./types";
import rootReducer from "./reducers/books";

const initialBooks: Book[] = [
  {
    id: "1",
    name: "Book of Ritse",
    price: 40,
    category: "Thriller",
    description: "A book about determination.",
    image:
      "https://www.blazesoft.ca/wp-content/uploads/2023/05/desctop1-scaled.jpg",
  },
  {
    id: "2",
    name: "Precious",
    price: 60,
    category: "Love",
    description:
      "Love has no limit, if you love something, you get good at it.",
    image:
      "https://www.blazesoft.ca/wp-content/uploads/2023/05/desctop1-scaled.jpg",
  },
];

const booksReducer = (state: Book[] = initialBooks, action: any) => {
  return state;
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
