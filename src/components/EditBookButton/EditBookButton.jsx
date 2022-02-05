import React, { useEffect } from "react";
import { Button } from "react-bootstrap/";
import { BsFillPencilFill } from "react-icons/bs";
const EditBookButton = ({ callback,rawData }) => {
  return (
    <>
      <Button variant="primary" onClick={() => callback(rawData)}>
        <BsFillPencilFill />
      </Button>
    </>
  );
};

export default EditBookButton;
