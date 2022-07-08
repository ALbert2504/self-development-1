import {FC} from 'react';
import {Card, Button} from 'react-bootstrap';

const Heading: FC = () => {
  return (
    <Card>
      <Card.Header as="h5">Your Life Studio</Card.Header>
      <Card.Body>
        <Card.Title>
          You want to do something or many things, but you are LAZY?
        </Card.Title>
        <Card.Text>
          All of us want to learn something new, to work hard, to study well at school or university, to be a good one,
          but most of us have a sireous enemy called LAZY. So what to do? Just remember you can do everything, if you
          want, if you have big wish to reach something or experience something.
        </Card.Text>
        <Button variant="primary">Try it!</Button>
      </Card.Body>
    </Card>
  );
};

export default Heading;