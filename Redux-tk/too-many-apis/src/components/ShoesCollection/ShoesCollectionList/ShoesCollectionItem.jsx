import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';


const ShoesCollectionItem = ({ name, image, price, id }) => {
  return (
    <Col
      className="mb-2"
      xs={12} md={6} lg={4} xl={3}
    >
      <Card className="h-100">
        <Card.Img variant="top" src={image} />
        <Card.Body className="d-flex flex-column align-items-start">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}$</Card.Text>
          <Link className="btn btn-primary mt-auto" to={`/shoes-collection/${id}`}>Read more</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ShoesCollectionItem;