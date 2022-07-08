import {FC} from 'react';
import {Container} from 'react-bootstrap';

// HOC
import withAuth from '../HOC/withAuth';

// Components
import Heading from '../components/Home/Heading';

const Home: FC = () => {
  return (
    <div className="mt-2">
      <Container>
        <div>
          <Heading />
        </div>
      </Container>
    </div>
  );
};

export default withAuth(Home);