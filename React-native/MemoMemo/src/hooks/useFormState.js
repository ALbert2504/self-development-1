import { useState } from 'react';

const useFormState = (...values) => {
  const setInitialValues = () => {
    const initialValues = {};

    values.forEach((value) => {
      initialValues[value] = {
        value: '',
        valid: false,
        touched: false,
      };
    });

    return initialValues;
  };

  const [formValues, setFormValues] = useState(setInitialValues);

  const resetFormValues = () => {
    setFormValues(setInitialValues);
  };



  return [formValues, setFormValues, resetFormValues];
};

export default useFormState;
