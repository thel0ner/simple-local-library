import React from "react";
import { Image } from "react-bootstrap";
import { defaultBase64 } from "./notfound.const";
import "./BookImageThumbnail.css";
const BookImageThumbnail = ({ imageBlob, altText }) => {
  const url = imageBlob ? imageBlob : defaultBase64;
  return (
    <>
      <Image
        // src={url}
        src={defaultBase64} // for debugonly
        alt={altText ? altText : ""}
        thumbnail={true}
        className="rounded border-0 thumbnail"
      />
    </>
  );
};

export default BookImageThumbnail;
