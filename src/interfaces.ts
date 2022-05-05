export interface User {
  first_name: string;
  last_name: string;
  id: number;
  email: string;
}

export interface UserState {
  userName: string,
  isUserListLoading: boolean,
  userList: User[],
  userDetails: User | null
}

export interface SetUserInfoAction {
  email: string,
  lastName: string,
  age: number
}