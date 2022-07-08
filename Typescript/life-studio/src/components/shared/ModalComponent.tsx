import {FC, ReactElement} from 'react';
import {Modal, Button} from 'react-bootstrap';

interface ModalComponentI {
  handleClose: () => void
  handleSave: () => void
  show: boolean
  title: string | ReactElement
}

const ModalComponent: FC<ModalComponentI> = ({
  handleClose,
  handleSave,
  show,
  title,
  children,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;