import { INITIAL_USER_DATA, USERS_KEY } from '.';
import { UserType } from './type/userType';

export const addInitialLoginData = () => {
  const usersData = localStorage.getItem(USERS_KEY);

  const initialUser: UserType[] | null =
    usersData &&
    JSON.parse(usersData).find((user: UserType) => user.email === INITIAL_USER_DATA.email);

  if (!initialUser) {
    localStorage.setItem(USERS_KEY, JSON.stringify([INITIAL_USER_DATA]));
  }
};
