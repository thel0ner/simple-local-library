import { configureStore } from '@reduxjs/toolkit';
import { bookLibraryReducer } from './features/book-library/booklibrarySlice';
export default configureStore({
    reducer: {
        bookLibrary: bookLibraryReducer
    }
});