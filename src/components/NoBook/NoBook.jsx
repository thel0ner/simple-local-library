import React from "react";
import { Button } from "react-bootstrap";
const NoBook = ({ callback }) => {
  return (
    <>
      <div className="row">
        <div className="mt-2 col-12 text-center py-2 bg-light">
          <h4>There are no books here!</h4>
        </div>
      </div>
    </>
  );
};

export default NoBook;
