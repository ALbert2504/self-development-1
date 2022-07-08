import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Col, Table, Spinner } from 'react-bootstrap';

import { useContinent } from '../contexts/ContinentProvider';
import { getContinentQuery } from '../apollo/queries/continents';

import { CountryInformation } from '.';


const ContinentCountries = () => {
  const { continent } = useContinent();
  const { data: { continent: { countries } = {} } = {}, loading, error } = useQuery(getContinentQuery, {
    variables: {
      code: continent,
    },
  });

  const [country, setCountry] = useState(null);

  useEffect(() => {
    setCountry(null);
  }, [continent]);

  const handleClick = (e) => {
    e.stopPropagation();
    setCountry(e.target.parentElement.dataset.id);
  };



  const countriesContent = (
    countries && countries.map((country, index) => {
      return (
        <tr key={country.code} data-id={country.code} onClick={handleClick} className="country-cell">
          <td>{index + 1}</td>
          <td>{country.code}</td>
          <td>{country.name} {country.emoji}</td>
          <td>{country.native}</td>
          <td>{country.capital}</td>
          <td>{country.currency}</td>
        </tr>
      );
    })
  );

  const handleBackClick = () => {
    setCountry(null);
  };

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center mt-5">
        <Spinner animation="grow" variant="primary" className="mx-3" />
        <Spinner animation="grow" variant="secondary" className="mx-3" />
        <Spinner animation="grow" variant="success" className="mx-3" />
        <Spinner animation="grow" variant="danger" className="mx-3" />
        <Spinner animation="grow" variant="warning" className="mx-3" />
        <Spinner animation="grow" variant="info" className="mx-3" />
        <Spinner animation="grow" variant="light" className="mx-3" />
        <Spinner animation="grow" variant="dark" className="mx-3" />
      </div>
    )
  }

  return (
    <Col xs={12} className="mt-4">
      {!country ? (
        <>
          {countries ? <Table striped bordered hover>
            <thead>
              <th>#</th>
              <th>Code</th>
              <th>Name</th>
              <th>Native</th>
              <th>Capital</th>
              <th>Currency</th>
            </thead>
            <tbody>
              {countriesContent}
            </tbody>
          </Table> : (
            <div className="p-2 border border-warning rounded">
              <p className="text-warning mb-0">No Continent selected yet</p>
            </div>
          )}
        </>
      ) : (
        <CountryInformation countryCode={country} handleBackClick={handleBackClick} />
      )}
    </Col>
  );
};

export default ContinentCountries;