import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Services Imports
import { getUser, getUserPosts } from '../services/users';

const UserProfile = () =>{

  const { userId } = useParams();

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    getUser(userId)
      .then((data) => setUser(data))
      .catch((error) => console.error(error));

    getUserPosts(userId)
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));

    // Fetch clock data and start the clock
    // Ensure clockData contains the required information (e.g., area, location, region)
  }, [userId]);
  return <>

    <div>
      <UserProfile/>

    </div>
  </>
}

export default UserProfile