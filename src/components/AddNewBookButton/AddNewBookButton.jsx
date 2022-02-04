import React from "react";
import { Button } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
const AddNewBookButton = ({callback}) => {

  return (
    <>
      <div className="row">
        <div className="col-12">
          <Button variant="info" size="lg" onClick={() => callback()}>
            <BsPlusCircle className="pr-2"/>
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddNewBookButton;
