import { Col, Card, Button, Row } from "react-bootstrap";
import { useQuery } from "@apollo/client";

import { getCountryQuery } from "../apollo/queries/countries";

const CountryInformation = ({ countryCode, handleBackClick }) => {
  const { data: { country = {} } = {}, loading, error } = useQuery(getCountryQuery, {
    variables: {
      code: countryCode
    },
  });

  console.log(country);

  return (
    <Col xs={12}>
      <Button variant="link" onClick={handleBackClick}>&lt;- Back to Countries</Button>
      <div className="my-2">
        <span style={{ fontSize: '5rem' }}>{country.emoji}</span>
      </div>
      <Card border="secondary">
        <Card.Header>{country.name} ({country.native})</Card.Header>
        <Card.Body>
          <Card.Title>Country Information</Card.Title>
          <Row className="mt-2">
            <Col xs={12} lg={6}>
              <h4>Languages</h4>
              {country?.languages?.length && <ul>
                {country.languages.map((language) => {
                  return (
                    <li>
                      {language.name} ({language.native})
                    </li>
                  );
                })}
              </ul>}
            </Col>
            <Col xs={12} lg={6}>
              <h4>States</h4>
              {country?.states?.length ? (
                <ul>
                  {country.states.map((state) => {
                    return (
                      <li>
                        {state.name}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p>No States available for this country</p>
              )}
            </Col>
          </Row>
          <h5>Currency: {country.currency}</h5>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CountryInformation;