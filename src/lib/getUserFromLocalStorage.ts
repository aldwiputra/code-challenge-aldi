import { USERS_KEY } from '.';

export const getUserFromLocalStorage = () => {
  const usersData = localStorage.getItem(USERS_KEY);

  return usersData ? JSON.parse(usersData) : [];
};
