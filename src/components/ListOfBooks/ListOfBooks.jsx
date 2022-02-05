import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddNewBookButton from "../AddNewBookButton/AddNewBookButton";
import AddNewBookModal from "../AddNewBookModal/AddNewBookModal";
import BookRow from "../BookRow/BookRow";
import NoBook from "../NoBook/NoBook";
import {
  NewBookModalContext,
  ModalRawDataContext,
} from "./NewBookModalContext";
const ListOfBooks = () => {
  /*
   * For controlling new book modal
   */
  const [newBookModal, setNewBookModal] = useState(false);
  const [modalRawData, setModalRawData] = useState(null);
  const openModal = () => setNewBookModal(true);
  const closeModal = () => setNewBookModal(false);
  /*
   * End of controlling new book modal
   */
  const books = useSelector((state) => state.bookLibrary.books);
  const openModalInEditMode = (rawData) => {
    setModalRawData(rawData);
    setTimeout(
      () => openModal(), 0
    );
  };
  return (
    <>
      <div className="row border rounded mt-3 p-2">
        <div className="col-12">
          <AddNewBookButton callback={openModal} />
          <NewBookModalContext.Provider value={newBookModal}>
            <ModalRawDataContext.Provider value={modalRawData}>
              <AddNewBookModal modalControllerCallback={closeModal} />
            </ModalRawDataContext.Provider>
          </NewBookModalContext.Provider>
          {books.length === 0 && <NoBook />}
          {books.map((book, index) => (
            <BookRow
              key={index}
              issuedDate={book.issuedDate}
              bookTitle={book.title}
              bookImage={book.image}
              editCallBack={openModalInEditMode}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListOfBooks;
