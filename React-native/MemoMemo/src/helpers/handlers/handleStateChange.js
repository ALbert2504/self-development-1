const handleStateChange = (setValuesCallBack) => (name, value) => {
  setValuesCallBack((prevValues) => {
    return {
      ...prevValues,
      [name]: {
        ...prevValues[name],
        value,
        touched: true,
        valid: !!value
      },
    };
  });
};

export default handleStateChange;
