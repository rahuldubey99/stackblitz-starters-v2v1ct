import { FC } from 'react';
import UsersList from './components/UsersList';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <UsersList />
    </div>
  );
};
