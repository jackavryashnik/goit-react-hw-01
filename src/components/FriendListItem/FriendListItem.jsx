import css from './FriendListItem.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const classOnline = clsx(isOnline ? 'online' : 'offline');
  
  return (
    <div className={css.friend}>
      <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
      <p className={css.name}>{name}</p>
      <p className={css[classOnline]}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};
