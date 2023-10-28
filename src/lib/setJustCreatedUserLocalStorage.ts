import { JUST_CREATED_USERS_KEY } from '.';

export const setJustCreatedUserLocalStorage = (email: string) => {
  localStorage.setItem(JUST_CREATED_USERS_KEY, email);
  setTimeout(() => {
    localStorage.removeItem(JUST_CREATED_USERS_KEY);
  }, 9000);
};
