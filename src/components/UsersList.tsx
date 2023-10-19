import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//  Style
import '../styles/UsersList.css';

// Services Imports
import { getUsers } from '../services/users';

// Components Imports
import UsersCard from './UserCard';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="search">
            <label>Search for user</label>
            <input
              type="search"
              data-search="data-search"
              placeholder="Search..."
            />
            <button className="search__clear">&times;</button>
            <div className="recent-search">
              <div className="recent-search__list"></div>
            </div>
          </div>
          <div className="list" id="list" data-searchable="data-searchable">
            {users.map((user) => (
              <>
                <Link to={`/user/${user.id}`}>
                  <UsersCard user={user} key={user?.id} />
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersList;
