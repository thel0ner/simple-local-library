import { Spinner } from "react-bootstrap";
const SimpleSpinner = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 d-flex justify-content-center py-2">
          <Spinner animation="border" variant="primary" />
        </div>
      </div>
    </>
  );
};

export default SimpleSpinner;
