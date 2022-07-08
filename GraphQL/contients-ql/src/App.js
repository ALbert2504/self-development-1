import { Row, Container } from 'react-bootstrap';
import { ContinentSelection, ContinentCountries } from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="text-center">Continents QL</h1>
        <Row>
          <ContinentSelection />
          <ContinentCountries />
        </Row>
      </Container>
    </div>
  );
}

export default App; 
