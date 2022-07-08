import {FC} from 'react';
import {Container} from 'react-bootstrap';

// Components
import MainInfo from '../components/Profile/MainInfo';

// HOC
import withAuth from '../HOC/withAuth';

const Profile: FC = () => {
  return (
    <div className="mt-2">
      <Container>
        <MainInfo />
      </Container>
    </div>
  );
};

export default withAuth(Profile);