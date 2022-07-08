import { Row } from 'react-bootstrap';

// Components
import ShoesCollectionItem from './ShoesCollectionItem';

const ShoesCollectionList = ({ data }) => {
  const shoesCollectionContent = (
    data.map(({name, price, image, id}) => {
      return (
        <ShoesCollectionItem
          key={id}
          id={id}
          image={image}
          name={name}
          price={price}
        />
      );
    })
  );

  return (
    <Row>
      {shoesCollectionContent}
    </Row>
  );
};

export default ShoesCollectionList;