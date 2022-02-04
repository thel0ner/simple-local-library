import React from "react";
import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { NewBookModalContext } from "../ListOfBooks/NewBookModalContext";
const AddNewBookModal = ({ modalControllerCallback }) => {
  const show = useContext(NewBookModalContext);
  return (
    <>
      <Modal show={show} onHide={modalControllerCallback}>
        <Modal.Header closeButton>
          <Modal.Title>New Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalControllerCallback}>
            Close
          </Button>
          <Button variant="primary" onClick={modalControllerCallback}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddNewBookModal;
