import { Dispatch, SetStateAction } from 'react';

export const checkValidity = (
  inputValue: string,
  validator: (inputValue: string) => boolean,
  errorStateSetter: Dispatch<SetStateAction<boolean>>
) => {
  if (validator(inputValue)) {
    errorStateSetter(false);
  } else {
    errorStateSetter(true);
  }
};
