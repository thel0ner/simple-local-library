import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {
  ModalRawDataContext,
  NewBookModalContext,
} from "../ListOfBooks/NewBookModalContext";
import { addBook } from "../../features/book-library/booklibrarySlice";
import { useDispatch } from "react-redux";
const AddNewBookModal = ({ modalControllerCallback }) => {
  /*
   * Form elements
   */
  const [title, setTitle] = useState(null);
  const [image, setImage] = useState(null);
  const [issuedDate, setIssuedDate] = useState(null);
  const [submited, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const show = useContext(NewBookModalContext);
  const rawData = useContext(ModalRawDataContext);
  useEffect(() => {
    if (rawData) {
      setTitle(rawData.title);
      // setImage(rawData.image); should be fixed
      setIssuedDate(rawData.issuedDate);
    }
    return () => {
      setTimeout(() => {
        setTitle(null);
        setIssuedDate(null);
      }, 0);
    };
  }, [rawData, show]);
  /*
   * From and modal control
   */
  const close = () => {
    setSubmitted(false);
    modalControllerCallback();
  };

  const submit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(event);
    setSubmitted(true);
    if (!title || !image || !issuedDate) return;
    dispatch(
      addBook({
        title,
        issuedDate,
        image,
      })
    );
    modalControllerCallback();
  };
  return (
    <>
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{rawData ? "Edit book" : "New Book"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submit}>
            <Form.Group controlId="title">
              <Form.Label className="required">Title of the book</Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue={title}
                onChange={(element) => setTitle(element.target.value)}
                className={submited && !title && "border-danger"}
                placeholder="title of  the book"
              ></Form.Control>
              {submited && !title && (
                <Form.Text className="text-danger">title is required</Form.Text>
              )}
            </Form.Group>
            <Form.Group controlId="issue date">
              <Form.Label className="required">Issue date</Form.Label>
              <Form.Control
                required
                type="date"
                defaultValue={issuedDate}
                onChange={(element) => setIssuedDate(element.target.value)}
                className={submited && !issuedDate && "border-danger"}
                placeholder="issue date of the book"
              ></Form.Control>
              {submited && !issuedDate && (
                <Form.Text className="text-danger">
                  Issue date is required
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group controlId="image upload">
              <Form.Label className="required">Cover</Form.Label>
              <Form.Control
                required
                type="file"
                defaultValue={image}
                onChange={(element) => setImage(element.target.value)}
                className={submited && !image && "border-danger"}
                placeholder="issue date of the book"
              ></Form.Control>
              {submited && !image && (
                <Form.Text className="text-danger">
                  cover image is required
                </Form.Text>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="primary" onClick={(event) => submit(event)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddNewBookModal;
