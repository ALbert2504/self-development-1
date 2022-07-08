import { useQuery } from "@apollo/client";
import { Col, Form } from "react-bootstrap";

import { getContinentsQuery } from "../apollo/queries/continents";
import { useContinent } from '../contexts/ContinentProvider'

const ContinentSelection = () => {
  const { data: { continents } = {}, error, loading } = useQuery(getContinentsQuery);
  const { setContinent, continent } = useContinent();

  console.log(continents);

  const continentsContent = (
    loading ? (
      <option hidden>Loading...</option>
    ) : (
      continents.map((continent) => {
        return (
          <option key={continent.code} value={continent.code}>
            {continent.name}
          </option>
        );
      })
    )
  );

  const handleChange = (e) => {
    setContinent(e.target.value);
  };

  console.log(continent);

  if (error) {
    return (
      <div className="p-4 border border-danger rounded">
        <p className="text-danger">Something went wrong</p>
      </div>
    );
  }

  return (
    <Col xs={12}>
      <Form>
        <Form.Select onChange={handleChange}>
          {continentsContent}
        </Form.Select>
      </Form>
    </Col>
  );
};

export default ContinentSelection;