import { useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  function setError({ field, message }) {
    // Checks if there is already an object with error
    // 'email.field' = 'email' in the 'errors' object
    const errorAlreadyExists = errors.find((error) => error.field === field);

    // if exists, execution stops
    if (errorAlreadyExists) {
      return;
    }

    // Checks if the user has typed something in the 'name' field
    setErrors((prevState) => [...prevState, { field, message }]);
  }

  function removeError(fieldname) {
    setErrors((prevState) => prevState.filter((error) => error.field !== fieldname));
  }

  function getErrorMessageByFieldName(fieldName) {
    // look in the error array and look for an object with
    // field equal to field using THIS function
    return errors.find((error) => error.field === fieldName)?.message;
    // the '?', checks if the value exists and is valid,
    // and if so, returns the 'message'
  }

  return {
    setError, removeError, getErrorMessageByFieldName, errors,
  };
}
