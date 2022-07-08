import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// Components
import { Loader } from '../../../components';

// Queries
import { useGetShoeQuery } from '../../../store/services/shoesCollection/shoesCollectionApi';

const ShoePage = () => {
  const { shoeId } = useParams();
  const { data, isLoading } = useGetShoeQuery(shoeId);

  return (
    <div className="py-3">
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <Row className="border border-primary rounded p-4">
            <Col xs={12} md={6}>
              <img className="w-100 d-block" src={data.image} alt=""/>
            </Col>
            <Col xs={12} md={6}>
              <p className="text-primary">
                <b>Id:</b> {data.id}
              </p>
              <p className="text-primary">
                <b>Name:</b> {data.name}
              </p>
              <p className="text-primary">
                <b>Description:</b> {data.description}
              </p>
              <p className="text-primary">
                <b>Price:</b> {data.price}$
              </p>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ShoePage