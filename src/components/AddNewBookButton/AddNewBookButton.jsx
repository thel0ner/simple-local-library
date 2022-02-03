import React from "react";
import { Button } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
const AddNewBookButton = ({callback}) => {

  return (
    <>
      <div className="row">
        <div className="col-3">
          <Button variant="outline-info" onClick={() => callback()}>
            <BsPlusCircle/>
            <span className="ml-2 d-inline-block">
                Add new book
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddNewBookButton;
