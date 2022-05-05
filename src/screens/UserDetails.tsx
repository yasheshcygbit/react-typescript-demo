import axios from 'axios';
import { useEffect, useState } from 'react';
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

  return (
    <div className="user-details">
      <h1>User Details</h1>
      <h2>User Name: {userDetails?.first_name}</h2>
      <h2>User Name: {userDetails?.last_name}</h2>
      <h2>User Name: {userDetails?.email}</h2>
    </div>
  );
}

export default UserDetails;
