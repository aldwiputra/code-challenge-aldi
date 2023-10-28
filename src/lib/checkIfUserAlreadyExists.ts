import { getUserFromLocalStorage } from '.';
import { UserType } from './type/userType';

export const checkIfUserAlreadyExists = (userData: UserType) => {
  const users = getUserFromLocalStorage();
  console.log(users);
  const foundUser = users && users.find((user: UserType) => user.email === userData.email);

  return !!foundUser;
};
