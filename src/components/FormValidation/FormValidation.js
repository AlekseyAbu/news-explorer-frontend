import { useCallback, useState } from "react";

export const FormValidation = () => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const onChange = useCallback((evt) => {
    setValue(evt.target.value);
    setErrorMessage(evt.target.validationMessage);
    setIsValid(evt.target.validity.valid);
  }, []);
  return { value, errorMessage, setErrorMessage, isValid, onChange };
};