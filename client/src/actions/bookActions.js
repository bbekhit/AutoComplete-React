import { GET_BOOKS} from "./types";
import {books} from "../data/book";


export const getBooks = () => {
    return {
      type: GET_BOOKS,
      payload: books
    };
  };
  