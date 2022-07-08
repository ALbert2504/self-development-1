import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center py-2">
      <Spinner animation="border" />
    </div>
  );
};

export default Loader;