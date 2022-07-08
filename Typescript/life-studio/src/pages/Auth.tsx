import React, {FC, useState} from 'react';
import {useDispatch} from 'react-redux';
import {FormControl, Form, FormGroup, Button} from 'react-bootstrap';

// Actions
import {signUp, signIn} from "../store/auth/auth.actions";

// HOC
import withAuth from "../HOC/withAuth";

// Types
import {UserData} from "../store/auth/auth.actionTypes";

// Types
type FieldItem = {
  value: string
  isTouched: false
  isValid: false
}

type FeildsData = {
  name: FieldItem
  email: FieldItem
  password: FieldItem
  confirmPassword: FieldItem
};

// Initials
const initialData: FeildsData = {
  name: {
    value: '',
    isTouched: false,
    isValid: false,
  },
  email: {
    value: '',
    isTouched: false,
    isValid: false,
  },
  password: {
    value: '',
    isTouched: false,
    isValid: false,
  },
  confirmPassword: {
    value: '',
    isTouched: false,
    isValid: false,
  },
}

const Auth: FC = () => {
  const dispatch = useDispatch();

  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [fieldsData, setFieldsData] = useState<FeildsData>(initialData);

  const handleChangeAuthState = (): void => {
    setIsSignUp((prevState) => !prevState);
  };

  const handleChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => {
    setFieldsData((prevState) => {
      return {
        ...prevState,
        [name]: {
          value,
          isTouched: true,
          valid: true,
        }
      }
    });
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: UserData = {
      name: fieldsData.name.value,
      email: fieldsData.email.value,
      password: fieldsData.password.value,
      confirmPassword: fieldsData.confirmPassword.value
    };

    if (isSignUp) {
      dispatch(signUp(data));
    } else {
      dispatch(signIn({
        email: data.email,
        password: data.password,
      }));
    }
  };

  return (
    <div
      className="w-100 min-vh-100 mx-auto d-flex flex-column justify-content-center align-items-start"
      style={{maxWidth: 320}}
    >
      <Form className="mt-3 border rounded p-3" onSubmit={handleSubmit}>
        <h2 className="text-primary">Sign {isSignUp ? 'Up' : 'In'}</h2>
        <div className="mt-3">
          {isSignUp && <FormGroup className="mt-2" controlId="name">
              <Form.Label className="text-primary mb-1">Name</Form.Label>
              <FormControl
                  name="name"
                  type="text"
                  onChange={handleChange}
              />
          </FormGroup>}
          <FormGroup className="mt-2" controlId="email">
            <Form.Label className="text-primary mb-1">Email</Form.Label>
            <FormControl
              name="email"
              type="email"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="mt-2" controlId="password">
            <Form.Label className="text-primary mb-1">Password</Form.Label>
            <FormControl
              name="password"
              type="password"
              onChange={handleChange}
            />
          </FormGroup>
          {isSignUp && <FormGroup className="mt-2" controlId="confirmPassword">
              <Form.Label className="text-primary mb-1">Confirm password</Form.Label>
              <FormControl
                  name="confirmPassword"
                  type="password"
                  onChange={handleChange}
              />
          </FormGroup>}
        </div>
        <Button type="submit" className="mt-2">Sign {isSignUp ? 'Up' : 'In'}</Button>
      </Form>
      <p className="btn btn-link" onClick={handleChangeAuthState}>
        {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
      </p>
    </div>
  );
};

export default withAuth(Auth);