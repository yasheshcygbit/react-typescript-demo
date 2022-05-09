import axios from 'axios';
import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../interfaces';

function UserDetails() {
  let params = useParams();
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const fetchUserDetails = async () => {
    setLoading(true);
    try {
      const userResponse = await axios.get(`https://reqres.in/api/users/${params.userid}`)
      setLoading(false);
      if (userResponse && userResponse.data && userResponse.data.data) {
        setUserDetails(userResponse.data.data);
      }
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserDetails();
  }, [])

  const returnReactNodeWithParam = (InnerComp: ReactNode): ReactNode => {
    return (
      <div className='inner'>
        This comes from function
        <div>
          {InnerComp}
        </div>
      </div>
    )
  }

  return (
    <div className="user-details">
      <h1>TS Returns ReactNode</h1>
      {returnReactNodeWithParam(<div>This is coming from param</div>)}
    </div>
  );
}

export default UserDetails;
