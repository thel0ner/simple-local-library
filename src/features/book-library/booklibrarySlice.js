import { createSlice } from "@reduxjs/toolkit";
export const bookLibrarySlicer = createSlice({
    name: 'bookLibrary',
    initialState: {
        books: [],
    },
    reducers:{
        increment: (state,action) => {
            return {
                ...state,
                books: [...state.books,action.payload]
            };
        },
        decrement: (state,action) => {
            return {
                ...state,
                books: [...state.books.filter(item => item.id !== action.payload)]
            };
        }
    }
});

export const {increment,decrement} = bookLibrarySlicer.actions;
 export const bookLibraryReducer = bookLibrarySlicer.reducer;

export default bookLibrarySlicer.reducer;