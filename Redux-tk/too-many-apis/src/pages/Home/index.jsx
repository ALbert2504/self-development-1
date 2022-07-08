import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';

// Constants
import { navLinks } from "../../utils/constants";

// Styles
import './Home.css';

const Home = () => {
  const cardsContent = (
    navLinks.map(({ href, label, image }) => {
      return (
        <Col className="mb-2 home-card__item" lg={3} md={4} key={label}>
          <Link to={href} className="d-block home-card__link">
            <Card>
              <Card.Img variant="top" src={image} className="home-card__img"/>
              <Card.Body>
                <Card.Title>{label}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    })
  );

  return (
    <div className="py-3">
      <Container>
        <Row>
          {cardsContent}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
