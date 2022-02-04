import { createSlice } from "@reduxjs/toolkit";
import { addToStorage, readFromStorage, StorageConfig } from "../../helpers/localStorage";
const alreadyStoredBooks = readFromStorage(StorageConfig.booksStorageId);
const modifyBooks = (books, state) => {
    addToStorage(StorageConfig.booksStorageId, books);
    return {
        ...state,
        books,
    };
}

export const bookLibrarySlicer = createSlice({
    name: 'bookLibrary',
    initialState: {
        books: alreadyStoredBooks,
    },
    reducers: {
        addBook: (state, action) => {
            const books = [...state.books, action.payload];
            return modifyBooks(books, state);
        },
        removeBook: (state, action) => {
            const books = [...state.books.filter(item => item.id !== action.payload)];
            addToStorage(StorageConfig.booksStorageId, books);
            return {
                ...state,
                books,
            };
        },
        modifyBook: (state, action) => {
            const books = [...state.books];
            books[action.payload.id] = action.payload.bookInfo;
            addToStorage(StorageConfig.booksStorageId, books);
            return {
                ...state,
                books,
            }
        }
    }
});

export const { addBook, removeBook, modifyBook } = bookLibrarySlicer.actions;
export const bookLibraryReducer = bookLibrarySlicer.reducer;

export default bookLibrarySlicer.reducer;
