import { useState } from 'react';
import {
  Container,
  Form,
  Button
} from 'react-bootstrap';

// Components
import { Loader } from '../../components';

// Actions
import { useLazyGetMp3Query } from '../../store/services/yTToMp3/yTToMp3Api';

// Styles
import './YTToMp3.css';


const YTToMp3 = () => {
  const [value, setValue] = useState('');
  const [ getMp3, { data, isLoading, isError } ] = useLazyGetMp3Query();

  const handleSubmit = (e) => {
    e.preventDefault();
    getMp3(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="py-3">
      <Container>
        <div>
          <Form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-center flex-md-row flex-column">
            <input
              className="video-id-input me-0 me-md-2 mb-md-0 mb-2 form-control text-center"
              placeholder="Video ID"
              value={value}
              onChange={handleChange}
            />
            <Button type="submit">Get Download Link</Button>
          </Form>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          isError || data?.status === 'fail' ? (
            <p className="text-danger text-center mt-2">
              Wrong video ID or not provided
            </p>
          ) : (
            data && <div className="d-flex flex-column align-items-center justify-content-center mt-2">
              <p className="text-success mb-1"><b>Video:</b> {data.title}</p>
              <a href={data.link} target="_blank" rel="noreferrer">Download here</a>
            </div>
          )
        )}
      </Container>
    </div>
  );
};

export default YTToMp3;
