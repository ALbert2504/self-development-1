import { Container } from 'react-bootstrap';

// Components
import { ShoesCollectionList, Loader } from '../../../components';

// Queries
import { useGetShoesQuery } from '../../../store/services/shoesCollection/shoesCollectionApi';


const ShoesCollection = () => {
  const { data, isLoading } = useGetShoesQuery();

  return (
    <div className="py-3">
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <h2 className="text-center text-primary mb-2">Shoes collection</h2>
            <ShoesCollectionList data={data} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default ShoesCollection;