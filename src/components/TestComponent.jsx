import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import BookRow from "./BookRow/BookRow";
import AddNewBookButton from "./AddNewBookButton/AddNewBookButton";
import SimpleSpinner from './SimpleSpinner/SimpleSpinner';
import {
  addBook,
  removeBook,
} from "../features/book-library/booklibrarySlice";
const TestComponent = () => {
  const books = useSelector((state) => state.bookLibrary.books);
  const dispatch = useDispatch();
  const addNewItem = () => {
    console.log("works");
  };

  return (
    <>
      <AddNewBookButton callback={addNewItem} />
      <BookRow bookTitle="test" bookDateAdded={new Date(2018,10,15)} />
      <SimpleSpinner /> 
      {/* 
      <RemoveBookButton callback={addNewItem} />
      <EditBookComponent callback={addNewItem} />
      <BookImageThumbnail /> */}
      {/* <strong>{JSON.stringify(books)}</strong> */}
      {/* <button
        onClick={() =>
          dispatch(
            increment({
              title: "sample",
              id: 1,
            })
          )
        }
      >
        Add
      </button>
      <button onClick={() => dispatch(decrement(1))}>
        remove
      </button> */}
    </>
  );
};

export default TestComponent;
