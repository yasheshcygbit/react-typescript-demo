import { createContext } from "react";

export interface IUser {
  fName: string;
  lName: string
}
const initialState: IUser = {
  fName: 'Yashesh',
  lName: 'Tamboli'
}

const UserContext = createContext<IUser>(initialState);
export default UserContext;