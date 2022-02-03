import React from "react";
import { Button } from "react-bootstrap/";
import { BsFillPencilFill } from "react-icons/bs";
const EditBookButton = ({ callback }) => {
  return (
    <>
      <Button variant="primary" onClick={() => callback()}>
        <BsFillPencilFill />
      </Button>
    </>
  );
};

export default EditBookButton;
