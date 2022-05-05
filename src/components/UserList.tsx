export interface User {
  name: string;
  email: string;
}

export interface UserListProps {
  userList: User[]
}

const Greet = ({userList}: UserListProps) => {
  return (
    <div>
      <h3>UserList</h3>
      {userList.map(item => (
        <div>{item.name}</div>
      ))}
    </div>
  )
}
export default Greet;