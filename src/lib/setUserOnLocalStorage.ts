import { USERS_KEY, getUserFromLocalStorage } from '.';
import { UserType } from './type/userType';

export const setUserOnLocalStorage = (user: UserType) => {
  const usersData = getUserFromLocalStorage();
  usersData.push(user);

  localStorage.setItem(USERS_KEY, JSON.stringify(usersData));
};
