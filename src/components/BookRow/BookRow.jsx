import React from "react";
import {
  dateConverter,
  popularDateFormats,
} from "../../helpers/date-converter";
import RemoveBookButton from "../RemoveBookButton/RemoveBookButton";
import EditBookComponent from "../EditBookButton/EditBookButton";
import BookImageThumbnail from "../BookImageThumbnail/BookImageThumbnail";
const BookRow = (props) => {
  const { bookImage, bookTitle, issuedDate, removeCallBack, editCallBack } =
    props;
  return (
    <>
      <div className="row broder shadow-sm">
        <div className="col-md-3 col-12 p-1">
          <BookImageThumbnail imageBlob={bookImage} altText={bookTitle} />
        </div>
        <div className="col-md-3 col-12 d-flex justify-content-start align-items-center">
          <strong>{bookTitle}</strong>
        </div>
        <div className="col-md-3 col-12 d-flex justify-content-start align-items-center">
          <strong>
            {dateConverter(issuedDate, popularDateFormats.Short)}
          </strong>
        </div>
        <div className="col-md-3 col-12 d-flex align-items-center justify-content-around">
          <RemoveBookButton callback={removeCallBack} />
          <EditBookComponent callback={editCallBack} />
        </div>
      </div>
    </>
  );
};

export default BookRow;
